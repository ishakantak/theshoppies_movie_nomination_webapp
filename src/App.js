import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import NavBar from "./components/NavBar"
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import FavoritesList from './pages/FavoritesList';
import SearchMovies from './pages/SearchMovies';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favoriteslist' element={<FavoritesList/>}/>
        <Route path='/searchmovieslist' element={<SearchMovies/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
      
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favoriteslist' element={<FavoritesList/>}/>
        <Route path='/searchmovieslist' element={<SearchMovies/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes> */}
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
