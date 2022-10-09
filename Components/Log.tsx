import { FunctionComponent } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import LogListItem from "./LogListItem";
import { LogComponent } from "../types";

const Log: FunctionComponent<LogComponent> = ({
  data,
  changePause,
  logPaused,
}) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Heading mb={3}>Log</Heading>
        <Button onClick={changePause} role="button">
          {logPaused ? `Resume` : "Pause"}
        </Button>
      </Flex>
      <Box
        border="1px"
        borderColor="gray.200"
        p={3}
        borderRadius={7}
        overflow="auto"
        height="calc(100vh - 130px)"
      >
        {data.length ? (
          data
            .reverse()
            .map((stockItem, i) => (
              <LogListItem
                key={stockItem.timeStamp + i}
                stockItem={stockItem}
              />
            ))
        ) : (
          <Text textAlign="center">No Data</Text>
        )}
      </Box>
    </>
  );
};

export default Log;
