import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'

import nodeInstallation from "../public/images/posts/node_installation_in_linux.png"
import { WorkGridItem } from '../components/grid-item'

const PostPage = () => {
  return (
    <Container maxW={700}>
      <Heading as="h3" variant="page-title" fontSize={20} my={10}>
        Posts
      </Heading>
      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        
        <Section>
          <WorkGridItem 
            id="nodeInstallation" 
            thumbnail={nodeInstallation}
            category='posts'
          >
            How to install NodeJS in linux using the tar file
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  )
}

export default PostPage
