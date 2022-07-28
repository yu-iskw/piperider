import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

/**
 * Container to display one chart.
 * Children clickable for showing modal popup zoom of chart
 * FIXME: clear all tooltips upon onCLose event
 */
type Props = { children: ReactNode; title: string };
export const ColumnCardDataVisualContainer: React.FC<Props> = ({
  title,
  children,
}) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        p={9}
        my={6}
        mx={3}
        bg={'whiteAlpha.700'}
        rounded={'md'}
        onClick={onOpen}
      >
        {children}
      </Flex>
      <Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={12}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Flex mt={6} w={'100%'} direction={'row'} justify={'center'}>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
