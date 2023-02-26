import { useMediaQuery, Flex, Box, Heading, Text, Icon, Grid } from '@chakra-ui/react'
import React from 'react'
import { DiAndroid } from 'react-icons/di';
import { mySkills } from '../constants/constants'

function Profile() { 
 
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">
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
                <Grid templateColumns={["1fr","repeat(2,1fr)", "repeat(4, 1fr)","repeat(4, 1fr)",]} gap={[2, 5, 5, 5]}>

                    {mySkills.map((item) => {
                        return <Flex p={8} rounded="xl" direction="row" bg="cyan.400" h="100px" w="30vh" alignItems="center" justifyContent="flex-start" _hover={{bg: "cyan.600"}} key={item.name}>
                            <Icon color="white" as={item.icon} boxSize={10} mr={5} />
                            <Text color="white" fontSize="md" fontWeight="semibold">
                                {item.name}
                            </Text>
                        </Flex>;
                    })}

                </Grid>
                
            </Box>
        </Flex>
    )
}

export default Profile
