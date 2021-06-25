import { Button } from "@chakra-ui/button";
import { Box, Container } from "@chakra-ui/layout";
import { useColorModeValue, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxW="container.lg">
      <Box mt="1" bg="grey.700">
        {/* <h1 className="display-4">Welcome to Blogs!</h1>
      <p className="lead">
        We make all kinds of awesome blog about various topics.
      </p>
      <hr className="my-4" />
      <p>Click the button below to check out our awesome blog.</p> */}
        <Center>
          <Button
            mb="4"
            as={Link}
            textDecoration="none"
            colorScheme="telegram"
            mt="3"
            to="/blogs"
            _hover={{ color: useColorModeValue(["white", "blue"]) }}
          >
            Check out The Blogs
          </Button>
        </Center>
        <embed
          src="https://exactlyprateek.github.io/PrateekRohilla_Frontend_2022.pdf"
          style={{
            width: "95%",
            minHeight: "85vh",
          }}
        />
      </Box>
    </Container>
  );
}

export default Home;
