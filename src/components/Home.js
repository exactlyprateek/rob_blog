import { Button } from '@chakra-ui/button';
import { Box, Container } from '@chakra-ui/layout';
import React from 'react';

const home = () => (
	<Container maxW="container.lg">
		<Box mt="5" bg="grey.700">
			<h1 className="display-4">Welcome to Robofied!</h1>
			<p className="lead">We make all kinds of awesome blog about various topics.</p>
			<hr className="my-4" />
			<p>Click the button below to check out our awesome blog.</p>
			<Button textDecoration="none" colorScheme="telegram" mt="3" as="a" href="/blog">
				Check out our Blog
			</Button>
		</Box>
	</Container>
);

export default home;
