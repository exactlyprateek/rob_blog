import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Link } from '@chakra-ui/react';
import React, { useState } from 'react';

function BlogView(props) {
	const [ lines, setLines ] = useState(3);
	return (
		<Center py={6}>
			<Box
				maxW={'445px'}
				w={'full'}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}
			>
				{/* <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Box> */}
				<Stack>
					<Text
						color={'green.500'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}
					>
						{props.tag}
					</Text>
					<Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
						{props.title}
					</Heading>
					<Text noOfLines={lines} color={'gray.500'}>
						{props.body}
					</Text>
					<Link
						colorScheme="blue"
						onClick={() => {
							lines === 3 ? setLines(9999) : setLines(3);
						}}
					>
						{lines === 3 ? 'Read More' : 'Read Less'}
					</Link>
				</Stack>
				<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
					<Avatar src={`https://picsum.photos/id/${props.title.length}/200/300.jpg`} alt={'Author'} />
					<Stack direction={'column'} spacing={0} fontSize={'sm'}>
						<Text fontWeight={600}>{props.author}</Text>
						<Text color={'gray.500'}>{props.info}</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	);
}

export default BlogView;
