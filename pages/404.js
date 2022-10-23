import NextLink from 'next/link'
import { Heading, Text, Box, Container, Divider, Button, Center, VStack } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Center height={700}>
                <VStack spacing={8}>
                    <Heading as="h1">Not Found</Heading>
                    <Text>The page you&apos;re looking for was not found.</Text>
                    <Divider />
                    <Box align="center">
                        <NextLink href='/'>
                            <Button colorScheme="teal">Return to Home</Button>
                        </NextLink>
                    </Box>
                </VStack>
            </Center>
        </Container>
    )
}

export default NotFound