import { FunctionComponent } from "react";
import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { SummaryComponent } from "../types";

const Summary: FunctionComponent<SummaryComponent> = ({ data }) => {
  const sortData = (code: string) => {
    const pricesArray = data.map(
      (stockItem) =>
        stockItem.data?.find((stockItem) => stockItem.code === code)?.price
    );
    return {
      code,
      startingPrice: pricesArray[pricesArray.length - 1],
      lowestPrice: [...pricesArray].sort(
        (a, b) => (a as number) - (b as number)
      )[0],
      highestPrice: [...pricesArray].sort(
        (a, b) => (b as number) - (a as number)
      )[0],
      current: pricesArray[0],
    };
  };

  const codeList = data[0]?.data?.map((stockItem) => stockItem.code);

  return (
    <>
      <Flex justifyContent="space-between">
        <Heading mb={3}>Summary</Heading>
      </Flex>
      <Box border="1px" borderColor="gray.200" p={3} borderRadius={7}>
        {data.length ? (
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
                {codeList?.map((item) => {
                  const stockStat = sortData(item);
                  return (
                    <Tr key={stockStat.code}>
                      <Td isNumeric>{stockStat.code}</Td>
                      <Td isNumeric>{stockStat.startingPrice?.toFixed(2)}</Td>
                      <Td isNumeric>{stockStat.lowestPrice?.toFixed(2)}</Td>
                      <Td isNumeric>{stockStat.highestPrice?.toFixed(2)}</Td>
                      <Td isNumeric>{stockStat.current?.toFixed(2)}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Text textAlign="center">No Data</Text>
        )}
      </Box>
    </>
  );
};

export default Summary;
