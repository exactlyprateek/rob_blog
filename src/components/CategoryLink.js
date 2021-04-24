import { useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/layout';
import React from 'react';


function CategoryLink(props) {
	return (
		<Link
			textDecoration="none"
			px="0.8rem"
			py="0.5rem"
			rounded={'full'}
			outline="0px transparent solid"
			transform="scale(1)"
			transition="all 0.2s"
			
			_hover={{
				transform: 'scale(0.95)',
				textDecoration: 'none',
				
				bg: useColorModeValue('purple.200', 'purple.800'),
				color: useColorModeValue('purple.800', 'purple.200')
			}}
			href={props.url}
		>
			{props.title}
		</Link>
	);
}

export default CategoryLink;
