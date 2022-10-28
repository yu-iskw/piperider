import { Divider, Box, Text } from '@chakra-ui/react';
import { ColumnSchema } from '../../../sdlc/single-report-schema';
import { renderChartUnavailableMsg } from '../Charts/utils';
import { FlatBoxPlotChart } from '../Charts/FlatBoxPlotChart';
import { QuantilesMatrix } from '../Columns/ColumnMetrics/QuantilesMatrix';

interface Props {
  columnDatum?: ColumnSchema;
}
export function QuantilesWidget({ columnDatum }: Props) {
  const { p50, max, min, p25, p75 } = columnDatum || {};
  if (columnDatum) {
    return (
      <Box bg={'gray.50'} minWidth={'0px'}>
        <Text fontSize={'xl'}>Quantile Data</Text>
        <Divider my={3} />
        <Box my={5}>
          <FlatBoxPlotChart
            quantileData={{
              p50,
              max,
              min,
              p25,
              p75,
            }}
          />
        </Box>
        <QuantilesMatrix columnDatum={columnDatum} />
      </Box>
    );
  }
  return <>{renderChartUnavailableMsg({})}</>;
}
