import { useColorMode, useMediaQuery, Stack, Circle, Flex, Box, Text, Button, Image  } from '@chakra-ui/react';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
            <Flex direction={["column", "row"]} spacing="200px" p={isNotSmallerScreen?"32":"0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} mr={isNotSmallerScreen ? 32 : 0} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hello, I'm</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Jamal Chahir</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Full Stack Web & Mobile Developer</Text>
                    <Button mt={8} colorScheme="blue" onClick={() => window.open("https://pawan.live")}>Let's talk</Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/4349535?v=4' />
            </Flex>
        </Stack>
    )
}

export default Header