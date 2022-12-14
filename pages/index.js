import { Box, Button, Container, Heading, Icon, Image, Link, List, ListItem } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import {
    IoLogoGithub,
    IoLogoDiscord,
    IoLogoFacebook
} from 'react-icons/io5'

const Page = () => {
    return (
        <Container mt={10} maxW={700}>
            <Box display={{ md: 'flex' }} textAlign={{ base: 'center', md: 'left' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Muskan Bartaula
                    </Heading>
                    <p>Web Developer / Blockchain Developer</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 8, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={3}
                        borderStyle="solid"
                        maxWidth="150px"
                        maxHeight="150px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/muskan.jpg"
                        width="200px"
                        height="200px"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>
                    Muskan is a fullstack developer passionate to build web application for your busineess dream.
                    He loves to play with code and has been playing with different web technologies like
                    Python, Django, Flask, Grails, NodeJS, ReactJS, VueJS and so on. He is very eager to
                    learn new technologies when he get time for it. Working with him is a step
                    to take your business to the next level with new advanced technologies.
                </Paragraph>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1996</BioYear> Born in Hetauda, Nepal
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear> Graduated BSC.CSIT from Hetauda City College
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear> Worked At Alphatech
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear> Worked as Freelancer
                </BioSection >
                <BioSection>
                    <BioYear>Now</BioYear> Elintegro Inc
                </BioSection>
            </Section >

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">Web Links</Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/MuskanBartaula" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                Github
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://discord.com/users/MuskanBartaula#1049" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                Discord
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.facebook.com/MuskanMTD" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                                Facebook
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container >
    )
}

export default Page