import { ReactNode } from 'react';
import {
  Box,
  Flex,
//   Avatar,
  HStack,
  Link,
  IconButton,
  Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { NavLink } from 'react-router-dom'

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>The Shoppies</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <NavLink to="/searchmovieslist">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'md'}
              mr={4}
              leftIcon={<AddIcon />}>
              Nominate Movie
            </Button>
            </NavLink>
            <NavLink to="/favoriteslist">
                <Button variant={'solid'}
              colorScheme={'pink'}
              size={'md'}
              mr={4}
              >Favorites List</Button>
            </NavLink>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/searchmovieslist">Home</NavLink> */}
            {/* <NavLink to="/favoriteslist">FavoritesList</NavLink> */}
              {/* {Links.map((link) => (
                <NavLink key={link.id} to={link.likes}>{link.name}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
        
      </Box>
    </>
  );
}


export default NavBar
