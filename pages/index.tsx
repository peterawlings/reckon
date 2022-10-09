import type { NextPage } from "next";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Log from "../Components/Log";
import Summary from "../Components/Summary";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { StockItemDataArray, StocksData } from "../types";

const Home: NextPage = () => {
  const [data, setData] = useState<StocksData>([]);
  const [logData, setLogData] = useState<StocksData>([]);
  const [logPaused, setLogPaused] = useState(false);

  const fetchData = async () => {
    return await fetch("https://join.reckon.com/stock-pricing")
      // return await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())

      .catch((e) => {
        console.log("Response Error", e);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData().then((newData: StockItemDataArray) => {
        console.log("newData", newData);
        const dataWithTimeStamp = {
          timeStamp: format(new Date(), "MM/dd/yyyy hh:mm:ss"),
          data: newData,
        };

        if (!logPaused) {
          setLogData([dataWithTimeStamp, ...logData] as StocksData);
        }
        setData([dataWithTimeStamp, ...data] as StocksData);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [data, logPaused, logData]);
  return (
    <Container maxW="1500" maxH="100vh" mt={10} mb={10}>
      <SimpleGrid minH="100vh" columns={[1, 2]} spacing={10}>
        <Box>
          <Log data={logData} changePause={changePause} logPaused={logPaused} />
        </Box>
        <Box>
          <Summary data={data} />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
