import React from 'react';
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';


import {VStack, Flex, Heading, Spacer, useColorMode} from '@chakra-ui/react';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import Projects from './components/Projects';


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={8}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="blue.500">Jvmvl</Heading>
        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile> 
      <Projects></Projects>
    </VStack>
  );
}

export default App;
