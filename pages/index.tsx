import type { NextPage } from "next";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Log from "../Components/Log";
import Summary from "../Components/Summary";

const Home: NextPage = () => {
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
