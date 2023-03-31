import { 
    useMediaQuery, 
    Flex, 
    Box, 
    Heading, 
    Text, 
    Grid, 
    Image, 
    Tag, 
    Button, 
    Container } from '@chakra-ui/react'
import React from 'react'
import { myProjects } from '../constants/constants'

function Projects() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return ( 
        <Container maxW="100%" centerContent>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} >
                <Box alignSelf="center" py="16">
                    <Box mb={8}>
                        <Heading fontWeight="bold" size="4xl">
                            Projects
                        </Heading>
                        <Text mt={4}>List of projects that I have made in the past.</Text>
                    </Box>
                    <Grid alignSelf="center" templateColumns={["1fr", "1fr", "repeat(2, 1fr)","repeat(4, 1fr)",]} gap={[5, 5, 5, 5]}>
                        {myProjects.map((project) => {
                            return <Flex w="full" alignItems="center" justifyContent="center" key={project.name}>
                                <Box bg="blue.500" /*bg={useColorModeValue('white', 'gray.600')}*/ maxW="sm" rounded="lg" shadow="lg">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.name}
                                        roundedTop="lg"
                                    />
                                    <Flex p={5} mt={4} mb={4} flex='1' gap='4' alignItems='center' flexWrap='wrap' >
                                        <Box>
                                            {project.tech.map((tech) => (
                                            <Tag bg={'blue.700'} color={'white'} size="sm" padding="0 5px" key={tech} mx={1}>
                                                {tech}
                                            </Tag>
                                            ))}

                                            <Heading color={'white'} size='md'>{project.name}</Heading>
                                        </Box>
                                        <Text color={'white'}>{project.summary}</Text>
                                        <Button
                                            flex={1}
                                            fontSize={'sm'}
                                            rounded={'full'}
                                            bg={'blue.800'}
                                            color={'white'}
                                            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
                                            _hover={{bg: 'blue.700'}}
                                            _focus={{bg: 'blue.700'}}>
                                            Visit
                                        </Button>
                                    </Flex>
                                </Box>
                            </Flex>;
                        })}
                    </Grid>
                </Box>
            </Flex>
        </Container>
    )
}

export default Projects
