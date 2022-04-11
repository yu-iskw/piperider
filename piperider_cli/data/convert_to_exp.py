from ruamel.yaml import YAML
from piperider_cli.config import get_stages

CUSTOM_ASSERTION_KEY = 'expect_column_values_pass_with_assertion'

yaml = YAML(typ="safe")
yaml.default_flow_style = False

expectation_type_map = {
    'shouldExist': 'expect_column_to_exist',
    'shouldBeUnique': 'expect_column_values_to_be_unique',
    'shouldBeNull': 'expect_column_values_to_be_null',
    'shouldNotBeNull': 'expect_column_values_to_not_be_null',
    'shouldBeInSet': 'expect_column_values_to_be_in_set',
    'shouldNotBeInSet': 'expect_column_values_to_not_be_in_set',
    'shouldDistinctBeInSet': 'expect_column_distinct_values_to_be_in_set',
    'shouldDistinctContainSet': 'expect_column_distinct_values_to_contain_set',
    'shouldDistinctEqualSet': 'expect_column_distinct_values_to_equal_set',
    'shouldBeType': 'expect_column_values_to_be_of_type',
    'shouldBeInTypes': 'expect_column_values_to_be_in_type_list',
    'shouldBeInRange': 'expect_column_values_to_be_between',
    'shouldMaxBeInRange': 'expect_column_max_to_be_between',
    'shouldMinBeInRange': 'expect_column_min_to_be_between',
    'shouldMeanBeInRange': 'expect_column_mean_to_be_between',
    'shouldMedianBeInRange': 'expect_column_median_to_be_between',
    'shouldSumBeInRange': 'expect_column_sum_to_be_between',
    'shouldStdevBeInRange': 'expect_column_stdev_to_be_between',
    'shouldLengthBeInRange': 'expect_column_value_lengths_to_be_between',
    'shouldBeJSONParseable': 'expect_column_values_to_be_json_parseable',
    'shouldBeDateParseable': 'expect_column_values_to_be_dateutil_parseable',
    'shouldMatchRegex': 'expect_column_values_to_match_regex',
    'shouldNotMatchRegex': 'expect_column_values_to_not_match_regex',
    'shouldMatchRegexList': 'expect_column_values_to_match_regex_list',
    'shouldNotMatchRegexList': 'expect_column_values_to_not_match_regex_list',
    'tableRowCountEqual': 'expect_table_row_count_to_equal',
    'tableRowCountInRange': 'expect_table_row_count_to_be_between',
    'tableColumnCountEqual': 'expect_table_column_count_to_equal',
    'tableColumnCountInRange': 'expect_table_column_count_to_be_between',
    'tableColumnMatchList': 'expect_table_columns_to_match_ordered_list',
    'tableColumnMatchSet': 'expect_table_columns_to_match_set',
}


def get_expectation_type(name):
    if name in expectation_type_map:
        return expectation_type_map[name]

    from piperider_cli.custom_assertion import has_assertion_id
    if has_assertion_id(name):
        return CUSTOM_ASSERTION_KEY

    return None


def generate_expectation(test):
    expectation_name = get_expectation_type(test['function'])
    exp = {
        'expectation_type': get_expectation_type(test['function']),
        'kwargs': {},
        'meta': {},
    }
    if test['function'].startswith('should'):
        exp['kwargs']['column'] = test['column']

    if test['function'] == 'tableColumnMatchList':
        exp['kwargs']['column_list'] = test['params']
    elif test['function'] == 'tableColumnMatchSet':
        exp['kwargs']['column_set'] = test['params']
    elif test['function'] == 'shouldBeType':
        exp['kwargs']['type_'] = test['params']
    elif test['function'] == 'shouldBeInTypes':
        exp['kwargs']['type_list'] = test['params']
    elif test['function'].endswith('Set'):
        exp['kwargs']['value_set'] = test['params']
    elif test['function'].endswith('InRange'):
        exp['kwargs']['min_value'] = test['params'][0]
        exp['kwargs']['max_value'] = test['params'][1]
    elif test['function'].endswith('Regex'):
        exp['kwargs']['regex'] = test['params']
    elif test['function'].endswith('RegexList'):
        exp['kwargs']['regex_list'] = test['params']
    elif test['function'].endswith('Equal'):
        exp['kwargs']['value'] = test['params']

    if expectation_name == CUSTOM_ASSERTION_KEY:
        exp['kwargs']['assertion_id'] = test['function']
        exp['kwargs']['params'] = test['params']
    return exp

def convert_to_ge_expectations(stage_file, stage_name):
    stages = get_stages(stage_file)
    stage = stages[stage_name]

    expectations = []
    for test in stage['tests']:
        if 'column' in test and type(test['column']) == list:
            for col in test['column']:
                expectations.append(generate_expectation({
                    'function': test['function'],
                    'column': col,
                }))
        else:
            expectations.append(generate_expectation(test))

    output = {
        'data_asset_type': None,
        'expectation_suite_name': 'mydata',
        'expectations': expectations,
        'ge_cloud_id': None,
        'meta': {},
    }

    return output
