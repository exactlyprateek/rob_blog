import React from 'react';
// import {  NavLink } from 'react-router-dom';
import {
	Box,
	Flex,
	HStack,
	
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorMode,
	useColorModeValue,
	Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,  Search2Icon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';
//    <Link className="navbar-brand" to='/'>Robofied Blogs</Link> <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink> <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const Links = [ 'Home', 'Blog' ];
	const Urls = [ '/', '/blog' ];
	return (
		<div>
			<Box bg={useColorModeValue('grey.400', 'grey.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: !isOpen ? 'none' : 'inherit' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Box>Robofied</Box>
						<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
							{Links.map((link, idx) => <NavLink title={link} url={Urls[idx]} key={link} />)}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Button
                        p="1.3rem 0.9rem 1.3rem 0.9rem"
							rounded={'full'}
							onClick={toggleColorMode}
							variant={'solid'}
							colorScheme={'telegram'}
							size={'sm'}
							mr={4}

						>
							{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
						</Button>
						<Menu>
							<MenuButton
								_hover={{
									transform: 'scale(1.1)',
									outline: '0.5px white solid'
								}}
								transition="all 0.5s"
								transform="scale(1)"
								outline="0px transparent solid"
								rounded={'full'}
								as={Button}
								p="1.3rem 0.8rem 1.3rem 0.8rem"
								variant={'link'}
								cursor={'pointer'}
								height="1.5rem"
							>
								<Search2Icon mb="1" />
							</MenuButton>
							<MenuList
								transform="skewY(10deg) rotate(10deg) translateY(0px)"
								_active={{ transform: 'skewY(10deg) rotate(10deg) translateY(0px)' }}
							>
								<MenuItem>Link 1</MenuItem>
								<MenuItem>Link 2</MenuItem>
								<MenuDivider />
								<MenuItem>Link 3</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link) => <NavLink key={link}>{link}</NavLink>)}
						</Stack>
					</Box>
				) : null}
			</Box>
		</div>
	);
}

export default Navbar;
