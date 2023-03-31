import { 
    useMediaQuery, 
    Container, 
    Flex, 
    Box, 
    Heading, 
    Text, 
    Icon, 
    SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { mySkills } from '../constants/constants'

function Profile() { 
    const [isNotSmallerScreen] = useMediaQuery("(min-width:500px)");

    return (
        <Container maxW="100%" centerContent>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} >
                <Box alignSelf="top" px="16" py="16">
                    <Heading fontWeight="extrabold"  color="cyan.500" size="4xl">
                        8+
                    </Heading>
                    <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
                </Box>
                <Box alignSelf="center" px="16" py="16" >
                    <Box mb={8}>
                        <Heading fontWeight="bold" size="4xl">
                            Skillset
                        </Heading>
                        <Text>A list of my favorite tools and technologies that I use on a regular basis.</Text>
                    </Box>
                    <SimpleGrid w="full" columns={{ base: 1, md: 4 }} spacing="20px">
                        {mySkills.map((item, index) => {
                            return <Flex p={8} rounded="xl" direction="row" bg="cyan.400" h="100px" w="30vh" 
                                        alignItems="center" justifyContent="flex-start" _hover={{bg: "cyan.600"}} key={item.name}>
                                        <Icon color="white" as={item.icon} boxSize={10} mr={5} />
                                        <Text color="white" fontSize="md" fontWeight="semibold">
                                            {item.name}
                                        </Text>
                                    </Flex>;
                            })}
                    </SimpleGrid>
                </Box>
            </Flex>
        </Container>
    )
}

export default Profile
