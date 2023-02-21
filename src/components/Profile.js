import { useMediaQuery, Flex, Box, Heading, Text, Icon, Grid } from '@chakra-ui/react'
import React from 'react'
import { DiAndroid } from 'react-icons/di';

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="top" px="32" py="16">
                <Heading fontWeight="extrabold"  color="cyan.500" size="4xl">
                    7+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Box mb={8}>
                    <Heading fontWeight="bold" size="4xl">
                        Skillset
                    </Heading>
                    <Text>A list of my favorite tools and technologies that I use on a regular basis.</Text>
                </Box>
                <Grid templateColumns={["1fr","repeat(2,1fr)", "repeat(3, 1fr)","repeat(3, 1fr)",]} gap={[2, 5, 5, 5]}>
                    <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            HTML
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            ReactJs
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            PHP
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Flutter
                        </Text>
                    </Flex>
                </Grid>

            </Box>
        </Flex>
    )
}

export default Profile
