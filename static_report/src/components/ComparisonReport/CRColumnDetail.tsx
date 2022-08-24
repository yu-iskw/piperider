import { Flex, Grid, Text, GridItem, Icon, Box } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

import {
  CRAssertionsBaseSummary,
  CRAssertionsTargetSummary,
} from './CRAssertions';
import { ColumnName } from '../shared/TableList/ColumnName';
import type {
  AssertionTest,
  ColumnSchema,
} from '../../sdlc/single-report-schema';
import { HistogramChart } from '../shared/Charts/HistogramChart';

function getAssertions(assertions: AssertionTest[]) {
  const total = assertions.length;
  const failed = assertions.reduce((acc, test) => {
    if (test.status === 'failed') {
      acc++;
    }
    return acc;
  }, 0);
  const passed = total - failed;

  return {
    total,
    passed,
    failed,
  };
}

export function CRColumnDetail({
  name,
  icon,
  baseColAssertions,
  targetColAssertions,
  data,
}: {
  name: string;
  icon: any;
  baseColAssertions: AssertionTest[];
  targetColAssertions: AssertionTest[];
  data: {
    base: ColumnSchema;
    target: ColumnSchema;
  };
}) {
  const baseAssertions = getAssertions(baseColAssertions);
  const targetAssertions = getAssertions(targetColAssertions);

  return (
    <Grid
      key={name}
      templateColumns="205px 2.3fr 1.5fr 2rem"
      alignItems="center"
      p={3}
      _hover={{ bgColor: 'gray.50', cursor: 'pointer' }}
    >
      <GridItem>
        <ColumnName name={name} icon={icon} />
      </GridItem>

      <GridItem>
        <Flex gap={4} width="calc(100% - 50px)" height="80px">
          <Box width="50%">
            {data.base ? (
              <HistogramChart hideAxis data={data.base} />
            ) : (
              <NoData />
            )}
          </Box>
          <Box width="50%">
            {data.target ? (
              <HistogramChart hideAxis data={data.target} />
            ) : (
              <NoData />
            )}
          </Box>
        </Flex>
      </GridItem>

      <GridItem>
        {baseAssertions.total > 0 && targetAssertions.total > 0 ? (
          <Flex gap={2} color="gray.500" alignItems="center">
            <CRAssertionsBaseSummary {...baseAssertions} />
            <Text as="span">{' -> '}</Text>
            <CRAssertionsTargetSummary
              {...targetAssertions}
              baseAssertionsFailed={baseAssertions.failed}
              assertionsDiff={targetAssertions.total - baseAssertions.total}
            />
          </Flex>
        ) : (
          <Text color="gray.500">no assertions</Text>
        )}
      </GridItem>

      <GridItem>
        <Flex alignItems="center">
          <Icon as={FiChevronRight} color="piperider.500" boxSize={6} />
        </Flex>
      </GridItem>
    </Grid>
  );
}

function NoData() {
  return (
    <Text mt={7} color="gray.500">
      No data available
    </Text>
  );
}
