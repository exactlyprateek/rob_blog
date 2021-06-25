 return (
  <Container maxW="container.lg">
    <Box mt="5" bg="grey.700">
      {/* <h1 className="display-4">Welcome to Blogs!</h1>
      <p className="lead">
        We make all kinds of awesome blog about various topics.
      </p>
      <hr className="my-4" />
      <p>Click the button below to check out our awesome blog.</p> */}
      <Button
        as={Link}
        textDecoration="none"
        colorScheme="telegram"
        mt="3"
        to="/blog"
        _hover={{ color: useColorModeValue(["white", "blue"]) }}
      >
        Check out The Blogs
      </Button>
    </Box>
  </Container>
);