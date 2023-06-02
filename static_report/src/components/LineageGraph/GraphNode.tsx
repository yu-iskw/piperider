import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { VscDiffAdded, VscDiffModified, VscDiffRemoved } from 'react-icons/vsc';
import { Handle, Node, Position } from 'reactflow';
import { useLocation } from 'wouter';
import { LineageGraphItem } from '../../utils/dbt';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { getStatDiff } from './util';
import { FiGrid } from 'react-icons/fi';
import { CSSProperties } from 'react';

export function GraphNode(params) {
  const node = params as Node;
  const data = node.data as LineageGraphItem;
  const singleOnly = (data as any).singleOnly;
  const onClick = (data as any).onClick;

  const [location] = useLocation();
  const isActive = data.path === location;
  const isHighlighted: boolean = (data as any).isHighlighted || false;

  let resourceType = node?.data?.type;

  // resource background color
  let resourceColor: CSSProperties['color'] = 'inherit';
  if (
    resourceType === 'source' ||
    resourceType === 'seed' ||
    resourceType === 'model'
  ) {
    resourceColor = '#c0eafd';
  } else if (resourceType === 'exposure' || resourceType === 'analysis') {
    resourceColor = '#f6e3ff';
  } else if (resourceType === 'metric') {
    resourceColor = 'rgb(255 230 238)';
  }

  // border width and color
  let borderWidth = 1;
  let borderColor = 'black';
  //   if (isActive || isHighlighted) {
  //     borderWidth = 1;
  //     borderColor = 'darkorange';
  //   }

  // text color, icon
  let iconChangeStatus;
  let changeStatus = data.changeStatus;
  let color = 'inherit';
  let fontWeight: CSSProperties['fontWeight'] = 'inherit';
  if (!singleOnly) {
    if (changeStatus === 'added') {
      iconChangeStatus = VscDiffAdded;
      color = '#1a7f37';
      fontWeight = 600;
    } else if (changeStatus === 'changed') {
      iconChangeStatus = VscDiffModified;
      color = '#9a6700';
      fontWeight = 600;
    } else if (changeStatus === 'removed') {
      iconChangeStatus = VscDiffRemoved;
      color = '#cf222e';
      fontWeight = 600;
    }
  }

  const name = node?.data?.name;

  getStatDiff();
  const statValue = singleOnly
    ? data?.stat?.target || 0
    : data?.stat?.base || 0;
  const statChange =
    data?.stat?.target !== undefined && data?.stat?.base !== undefined
      ? data?.stat?.target - data?.stat?.base
      : undefined;

  return (
    <Flex
      //   className="react-flow__node-default"
      width="300px"
      _hover={{ bg: 'gray.100' }}
      alignItems="center"
      borderColor={borderColor}
      borderWidth={borderWidth}
      backgroundColor="white"
      borderRadius={3}
      onClick={() => {
        onClick(node?.data);
      }}
      padding={0}
    >
      <Handle type="target" position={Position.Left} />

      <Flex
        backgroundColor={resourceColor}
        padding={2}
        borderRightWidth={borderWidth}
        borderColor={borderColor}
        alignItems="center"
      >
        <Icon as={FiGrid} />
      </Flex>

      <Box
        width="100%"
        textAlign="left"
        flex="1"
        color={color}
        fontWeight={fontWeight}
        ml={2}
      >
        {/* <Link href={node?.data?.path}>{name}</Link> */}
        <Box>{name}</Box>
      </Box>
      {!singleOnly && changeStatus && (
        <Icon
          color={color}
          as={iconChangeStatus}
          mr={2}
          fontWeight={fontWeight}
        />
      )}

      {/* {data?.stat && (
        <VStack flex="0 1 60px" alignItems="flex-end" spacing={0}>
          <Text fontWeight="bold" textAlign="right">
            {statValue}
          </Text>
          {statChange !== undefined && (
            <Box textAlign="right" color={statChange < 0 ? 'red' : 'green'}>
              {statChange < 0 ? <TriangleDownIcon /> : <TriangleUpIcon />}
              {statChange}%
            </Box>
          )}
        </VStack>
      )} */}

      <Handle type="source" position={Position.Right} />
    </Flex>
  );
}
