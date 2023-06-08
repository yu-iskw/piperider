import json
import os
from unittest import TestCase

from dbt.exceptions import EventCompilationError

import piperider_cli.dbtutil as dbtutil
from piperider_cli.compare_report import ComparisonData
from piperider_cli.datasource.sqlite import SqliteDataSource
from piperider_cli.profiler import Profiler
from tests.common import create_table
from piperider_cli.dbt.list_task import compare_models_between_manifests, compare_models_between_manifests_files, \
    list_resources_from_manifest, list_resources_from_manifest_file, \
    ResourceSelector, load_manifest, load_manifest_from_file


class TestCompareSummaryNG(TestCase):

    def setUp(self):
        self.maxDiff = None
        self.dbt_state_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "mock_dbt_data")

    def manifest_path(self, manifest_name):
        return os.path.join(self.dbt_state_dir, manifest_name)

    def manifest_dict(self, manifest_name):
        with open(self.manifest_path(manifest_name)) as fh:
            return json.loads(fh.read())

    def test_in_memory_compare_with_manifests(self):
        run1 = self.manifest_dict("jaffle_shop_base.json")
        run2 = self.manifest_dict("jaffle_shop_target.json")

        data = ComparisonData(run1, run2, None)
        result = data.to_summary_markdown_ng()

        with open("output.md", "w") as fh:
            fh.write(result)

    def test_in_memory_compare_with_manifests_base_not_profiled(self):
        run1 = self.manifest_dict("case_base_not_profiled_1.json")
        run2 = self.manifest_dict("case_base_not_profiled_2.json")

        data = ComparisonData(run1, run2, None)
        result = data.to_summary_markdown_ng()

        with open("output.md", "w") as fh:
            fh.write(result)

    def test_in_memory_compare_with_manifests_target_not_profiled(self):
        run1 = self.manifest_dict("case_base_not_profiled_1.json")
        run2 = self.manifest_dict("case_base_not_profiled_2.json")

        data = ComparisonData(run2, run1, None)
        result = data.to_summary_markdown_ng()

        with open("output.md", "w") as fh:
            fh.write(result)