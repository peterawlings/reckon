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

  const validate = (data: StockItemDataArray) =>
    data?.every(
      (dataItem) =>
        typeof dataItem.code === "string" && typeof dataItem.price === "number"
    );

  useEffect(() => {
    const fetchData = async () => {
      return await fetch("https://join.reckon.com/stock-pricing")
        .then((res) => res.json())
        .then((newData: StockItemDataArray) => {
          const dataWithTimeStamp = {
            timeStamp: format(new Date(), "MM/dd/yyyy hh:mm:ss"),
            data: validate(newData) ? newData : null,
          };

          if (!logPaused) {
            setLogData([dataWithTimeStamp, ...logData] as StocksData);
          }
          setData([dataWithTimeStamp, ...data] as StocksData);
        })
        .catch((e) => {
          console.log("Response Error", e);
        });
    };
    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, [data, logPaused, logData]);

  function changePause() {
    setLogPaused(!logPaused);
  }

  return (
    <Container maxW="1500" mt={10} mb={10}>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
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
