import {
  Box,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { nanoid } from 'nanoid';

import { ColumnSchema } from '../../sdlc/single-report-schema';
import {
  ComparsionSource,
  SaferTableSchema,
  zReport,
  ZTableSchema,
} from '../../types';
import { NO_VALUE } from '../shared/Columns/ColumnCard/ColumnTypeDetail/constants';
import { useLocation } from 'wouter';

type EnrichedColumnData = {
  added: number;
  deleted: number;
  changed: number;
  columns:
    | (
        | (ColumnSchema & {
            key: string;
            type: string;
            changed: boolean;
          })
        | null
      )[];
};
const getEnrichedColumnsFor = (
  columns: SaferTableSchema['columns'] | undefined,
  type: ComparsionSource,
) =>
  columns
    ? Object.entries(columns).map(([key, column]) => ({
        ...column,
        key,
        type,
        changed: false,
      }))
    : [];

type Props = {
  baseTableDatum?: SaferTableSchema;
  targetTableDatum?: SaferTableSchema;
  visibleDetail?: boolean;
};
export function CRTabSchemaDetails({
  baseTableDatum,
  targetTableDatum,
  visibleDetail = false,
}: Props) {
  zReport(ZTableSchema.safeParse(baseTableDatum));
  zReport(ZTableSchema.safeParse(targetTableDatum));
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const fallbackTable = baseTableDatum || targetTableDatum;
  const baseColEntries = getEnrichedColumnsFor(baseTableDatum?.columns, 'base');
  const targetColEntries = getEnrichedColumnsFor(
    targetTableDatum?.columns,
    'target',
  );
  const combinedColEntries = [...baseColEntries, ...targetColEntries];

  //Should tally based on the change
  const deltaAdded = targetColEntries.length - baseColEntries.length;
  const addedTest = deltaAdded < 0 ? 0 : deltaAdded; // round negatives to 0
  const deltaDeleted = baseColEntries.length - targetColEntries.length;
  const deletedTest = deltaDeleted < 0 ? 0 : deltaDeleted;

  // Reduce
  const aggregateEnrichedColumns =
    combinedColEntries.reduce<EnrichedColumnData>(
      (acc, column, idx) => {
        //index offsets when iterating both columns together
        const currBaseIndex =
          idx < baseColEntries.length ? idx : idx - baseColEntries.length;
        const currTargetIndex =
          idx >= baseColEntries.length ? idx : idx + baseColEntries.length;

        //cross-checks if schema type is changed
        const currBaseSchema = combinedColEntries[currBaseIndex]?.schema_type;
        const currTargetSchema =
          combinedColEntries[currTargetIndex]?.schema_type;
        const isSchemaChanged = currBaseSchema !== currTargetSchema;
        const changed = acc.changed + (isSchemaChanged ? 1 : 0);

        //write schema detail for UI rows
        const colSchemaDetail = {
          ...column,
          name: column.name,
          changed: isSchemaChanged, //per schema change
        };

        return {
          ...acc,
          changed, // total schema changes
          columns: [...acc.columns, colSchemaDetail],
        } as EnrichedColumnData;
      },
      { added: addedTest, deleted: deletedTest, changed: 0, columns: [] }, //accumulator -- initial value
    );

  // UI vars
  const { added, deleted, changed, columns } = aggregateEnrichedColumns;
  const baseColumns = columns.slice(0, baseColEntries.length);
  const targetColumns = columns.slice(baseColEntries.length);

  // Equalize target columns view (fill with null comparisons)
  const equalizedBaseColumns = equalizeColumns(
    baseColumns,
    targetColumns,
    deltaAdded,
  );
  const equalizedTargetColumns = equalizeColumns(
    targetColumns,
    baseColumns,
    deltaDeleted,
  );
  // Combine columns on a per-row basis, now that the columns lengths are equalized/matched
  const combinedSchemaRowItem = equalizedBaseColumns.map((base, index) => {
    return {
      base,
      target: equalizedTargetColumns[index],
    };
  });

  return (
    <Flex direction="column">
      <Text mb={4} p={2}>
        Added:
        <Text as={'span'} fontWeight={700} ml={1}>
          {added}
        </Text>
        , Deleted:
        <Text as={'span'} fontWeight={700} ml={1}>
          {deleted}
        </Text>
        , Changed:{' '}
        <Text as={'span'} fontWeight={700} ml={1}>
          {changed}
        </Text>
      </Text>

      <Flex justifyContent={'space-evenly'}>
        <TableContainer w={'100%'}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Base Column</Th>
                <Th borderRight={'1px solid lightgray'}>Base Type</Th>
                <Th>Target Column</Th>
                <Th>Target Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              {combinedSchemaRowItem.map(
                ({ base: baseColumn, target: targetColumn }) => {
                  const fallbackColumn = baseColumn || targetColumn;
                  return (
                    <Tr
                      key={nanoid(10)}
                      onClick={() =>
                        visibleDetail &&
                        setLocation(
                          `/tables/${fallbackTable?.name}/columns/${fallbackColumn?.name}`,
                        )
                      }
                      position={'relative'}
                      _hover={{
                        bg: 'blackAlpha.50',
                        cursor: visibleDetail ? 'pointer' : 'inherit',
                      }}
                    >
                      <Td color={baseColumn?.changed ? 'red.500' : 'inherit'}>
                        {baseColumn?.name ?? NO_VALUE}
                      </Td>
                      <Td
                        color={baseColumn?.changed ? 'red.500' : 'inherit'}
                        borderRight={'1px solid lightgray'}
                      >
                        {baseColumn?.schema_type ?? NO_VALUE}
                      </Td>
                      <Td color={targetColumn?.changed ? 'red.500' : 'inherit'}>
                        {targetColumn?.name ?? NO_VALUE}
                      </Td>
                      <Td color={targetColumn?.changed ? 'red.500' : 'inherit'}>
                        {targetColumn?.schema_type ?? NO_VALUE}
                      </Td>
                      {visibleDetail && (
                        <Box as="td" position="absolute" top={3} right={0}>
                          <Icon
                            as={FiChevronRight}
                            color="piperider.500"
                            boxSize={6}
                          />
                        </Box>
                      )}
                    </Tr>
                  );
                },
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}

function equalizeColumns(
  source: EnrichedColumnData['columns'],
  target: EnrichedColumnData['columns'],
  delta: number,
): EnrichedColumnData['columns'] {
  if (source.length < target.length) {
    return [...source, ...Array(delta).fill(null)];
  }
  return source;
}
