from rich.console import Console


def parse_compare_ref(refs: str):
    console = Console()

    if refs is None:
        return None, None

    if '...' in refs:
        base_ref = refs.split('...')[0]
        target_ref = refs.split('...')[1]
        if base_ref == '' or target_ref == '':
            console.print('[bold red]Error:[/bold red] Commit format is not supported')
            return None, None
    elif '..' in refs:
        console.print('[bold red]Error:[/bold red] Two-dot diff comparisons are not supported')
        return None, None
    else:
        base_ref = refs
        target_ref = None

    return base_ref, target_ref


def compare_with_recipe(ref_diff, **kwargs):
    """
    Generate the comparison report for your branch.
    """

    from piperider_cli.cli_utils import DbtUtil
    from piperider_cli.cli_utils.cloud import CloudConnectorHelper
    from piperider_cli.configuration import FileSystem, is_piperider_workspace_exist
    from piperider_cli.error import DbtProjectNotFoundError, RecipeConfigException
    from piperider_cli.initializer import Initializer
    from piperider_cli.recipes import RecipeConfiguration, configure_recipe_execution_flags, is_recipe_dry_run

    console = Console()

    recipe = kwargs.get('recipe')
    summary_file = kwargs.get('summary_file')
    force_upload = kwargs.get('upload')
    enable_share = kwargs.get('share')
    open_report = kwargs.get('open')
    project_name = kwargs.get('project')
    debug = kwargs.get('debug', False)
    select = kwargs.get('select')
    modified = kwargs.get('modified')
    skip_datasource_connection = kwargs.get('skip_datasource')

    base_ref, target_ref = parse_compare_ref(ref_diff)
    if ref_diff is not None and base_ref is None:
        return -1

    if base_ref is not None and kwargs.get('base_branch') is not None:
        console.print("[bold red]Error:[/bold red] "
                      "'--base-branch' option and '[REF-DIFF]' argument cannot be used together")
        return -1
    elif base_ref is None:
        base_ref = kwargs.get('base_branch')

    # reconfigure recipe global flags
    configure_recipe_execution_flags(dry_run=kwargs.get('dry_run'), interactive=kwargs.get('interactive'))

    if enable_share:
        force_upload = True

    if force_upload is True and CloudConnectorHelper.is_login() is False:
        raise RecipeConfigException(
            message='Please login to PipeRider Cloud first.',
            hint='Run "piperider cloud login" to login to PipeRider Cloud.'
        )

    # Search dbt project config files
    dbt_project_dir = kwargs.get('dbt_project_dir')
    no_auto_search = kwargs.get('no_auto_search')
    dbt_project_path = DbtUtil.get_dbt_project_path(dbt_project_dir, no_auto_search, recursive=False)
    dbt_profiles_dir = kwargs.get('dbt_profiles_dir')
    if dbt_project_path:
        FileSystem.set_working_directory(dbt_project_path)
        # Only run initializer when dbt project path is provided
        Initializer.exec(dbt_project_path=dbt_project_path, dbt_profiles_dir=dbt_profiles_dir, interactive=False)
    elif is_piperider_workspace_exist() is False:
        raise DbtProjectNotFoundError()

    ret = 0
    try:
        # note: dry-run and interactive are set by configure_recipe_execution_flags
        from piperider_cli.recipe_executor import RecipeExecutor
        recipe_config: RecipeConfiguration = RecipeExecutor.exec(
            recipe_name=recipe,
            select=select,
            modified=modified,
            base_ref=base_ref,
            target_ref=target_ref,
            skip_datasource_connection=skip_datasource_connection,
            debug=debug)
        last = False
        base = target = None
        if not recipe_config.base.is_file_specified() and not recipe_config.target.is_file_specified():
            last = True
        else:
            base = recipe_config.base.get_run_report()
            target = recipe_config.target.get_run_report()

        if not is_recipe_dry_run():
            from piperider_cli.compare_report import CompareReport
            CompareReport.exec(a=base, b=target, last=last, datasource=None,
                               output=kwargs.get('output'), tables_from="all",
                               summary_file=summary_file,
                               force_upload=force_upload,
                               enable_share=enable_share,
                               open_report=open_report,
                               project_name=project_name,
                               show_progress=True,
                               debug=debug)
    except Exception as e:
        raise e

    return ret
