[![ci-tests](https://github.com/infuseai/piperider-cli/actions/workflows/tests.yaml/badge.svg)](https://github.com/infuseai/piperider-cli/actions/workflows/tests.yaml/badge.svg)
[![release](https://img.shields.io/github/release/infuseAI/piperider-cli/all.svg?style=flat-square)](https://github.com/infuseAI/piperider-cli/releases)
[![InfuseAI Discord Invite](https://img.shields.io/discord/664381609771925514?color=%237289DA&label=chat&logo=discord&logoColor=white)](https://discord.com/invite/5zb2aK9KBV)

<p align="center">
  <a href="https://piperider.io">
    <img  src="/.github/images/logo.svg"
      width="284" border="0" alt="PipeRider">
  </a>
</p>

# Automates data quality management
For data practitioner who wants to trust their data by:  
- Defining the shape of data, so they can **make sure the data will be expected in the future** 
- Save time on debugging data,**easily discover & discuss any data problems from upstream**
- Socially **collaborate across teams on the dataset through data catalog and data insights**

# Key Features
## Instant quality assessment in html
Check [single run view](/images/piperider_single_run.png)

## Inject tests to key metrics
Refer to [User defined test functions](https://github.com/InfuseAI/piperider-cli/blob/main/docs/user-defined-test-function.md)

## Compare different test assessments
Check [comparison view](/images/piperider_comparison_view.png)

# Get started
## Install PipeRider

```bash
$ pip install piperider
```

By default, PipeRider supports built-in sqlite connector, extra connectors are available:

| connectors  | install  |
|---|---|
| snowflake | pip install piperider[snowflake]  |
| postgres  | pip install piperider[postgres]  |

Use comma to install multiple connectors in one line:
```
$ pip install piperider[postgres,snowflake]
```

## Attach piperider to a dbt project
![piperider_init](/images/cmd_init.gif)

This command creates `/.piperider` under a dbt project root and generate necessary configurations.

## Scan data quality from models
![piperider_run](/images/cmd_run.gif)  

This command scans the models from datasource and create assessment results in `/.piperider/output`

## Generate reports
![piperider_report](/images/cmd_report.gif)  

generate a static html report under current path. 

## Generate comparison view
![piperider_compare](/images/cmd_compare.gif)  

The generated report in html will be placed in the path shown in console

# Get involved
[Work In Progress]
