import { useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/layout';
import React from 'react';

function NavLink(props) {
	return (
		<Link
			textDecoration="none"
			px="0.8rem"
			py="0.5rem"
			rounded={'full'}
			outline="0px transparent solid"
			transform="scale(1)"
			transition="all 0.5s"
            
			_hover={{
				transform: 'scale(1.1)',
				textDecoration: 'none',
				outline: useColorModeValue('0.5px #2C58BF solid','0.5px rgba(255, 255, 255, 0.7) solid'),
				bg: useColorModeValue('telegram.200', 'telegram.900'),
				color: useColorModeValue('black', 'white')
			}}
			href={props.url}
		>
			{props.title}
		</Link>
	);
}

export default NavLink;
