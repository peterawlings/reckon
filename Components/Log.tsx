import { FunctionComponent, useEffect, useState } from "react";
import { Box, Button, Flex, Heading, List } from "@chakra-ui/react";
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
        height="100vh"
        overflow="auto"
      >
        {data?.reverse().map((stockItem) => (
          <>
            {stockItem.data && (
              <LogListItem key={stockItem.timeStamp} stockItem={stockItem} />
            )}
          </>
        ))}
      </Box>
    </>
  );
};

export default Log;
