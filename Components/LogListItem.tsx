import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { LogListItem } from "../types";

const LogListItem: FunctionComponent<LogListItem> = ({ stockItem }) => {
  const { data, timeStamp } = stockItem;
  return (
    <Box mb="5">
      <List>
        <ListItem role="listitem">{`Updates for ${timeStamp}`}</ListItem>

        {data?.map((stock) => {
          return (
            <ListItem role="listitem" key={stock.code}>
              <Text fontSize="md">{`${stock.code}: ${stock.price}`}</Text>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default LogListItem;
