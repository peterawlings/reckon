import { FunctionComponent } from "react";
import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { SummaryComponent } from "../types";

const Summary: FunctionComponent<SummaryComponent> = ({ data }) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Heading mb={3}>Summary</Heading>
      </Flex>
      <Box border="1px" borderColor="gray.200" p={3} borderRadius={7}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>Stock</Th>
                <Th isNumeric>Starting</Th>
                <Th isNumeric>Lowest</Th>
                <Th isNumeric>Highest</Th>
                <Th isNumeric>Current</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td isNumeric>item</Td>
                <Td isNumeric>item</Td>
                <Td isNumeric>item</Td>
                <Td isNumeric>item</Td>
                <Td isNumeric>item</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Summary;
