import { useMediaQuery, HStack, LinkBox, Flex } from '@chakra-ui/react';
import React from 'react'
import Icon from '@chakra-ui/icon'
import { FaLinkedin, FaGithubAlt, FaTwitter, FaInstagram } from 'react-icons/fa';

function Social() {
    
    //const { colorMode } = useColorMode();
    //const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <HStack spacing={isNotSmallerScreen ? '50px' : '20px'}>

            <LinkBox
                as="Linkedin"
                w="100%"
                p={4}
                transition=".5s"
                cursor="pointer"
                display="flex"
                role="group">
                <Flex alignItems="center" justifyContent="space-between">
                    <Icon as={FaLinkedin} boxSize={isNotSmallerScreen ? '50' : '25'} _groupHover={{ color: "blue.400" }} />
                </Flex>
            </LinkBox>

            <LinkBox
                as="Github"
                w="100%"
                p={4}
                transition=".5s"
                cursor="pointer"
                display="flex"
                role="group">
                <Flex alignItems="center" justifyContent="space-between">
                    <Icon as={FaGithubAlt} boxSize={isNotSmallerScreen ? '50' : '25'} _groupHover={{ color: "blue.400" }} />
                </Flex>
            </LinkBox>

            <LinkBox
                as="Twitter"
                w="100%"
                p={4}
                transition=".5s"
                cursor="pointer"
                display="flex"
                role="group">
                <Flex alignItems="center" justifyContent="space-between">
                    <Icon as={FaTwitter} boxSize={isNotSmallerScreen ? '50' : '25'} _groupHover={{ color: "blue.400" }} />
                </Flex>
            </LinkBox>

            <LinkBox
                as="Instagram"
                w="100%"
                p={4}
                transition=".5s"
                cursor="pointer"
                display="flex"
                role="group">
                <Flex alignItems="center" justifyContent="space-between">
                    <Icon as={FaInstagram} boxSize={isNotSmallerScreen ? '50' : '25'} _groupHover={{ color: "blue.400" }} />
                </Flex>
            </LinkBox>

        </HStack>
    )
}

export default Social
