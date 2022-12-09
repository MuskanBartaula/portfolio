import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-item"
import Section from "../components/section"
import thumbdammp from "../public/images/works/dammp.png"
import thumbcoinatm from "../public/images/works/coinatm.png"


const WorkPage = () => {
  return (
    <Container>
      <Heading as="h3" variant="page-title" fontSize={20} my={10}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem title="DammpSuite" thumbnail={thumbdammp}>
            Dammp is a web application to make a profitable trade using their bot to trade.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem title="CoinATM" thumbnail={thumbcoinatm}>
            CoinATM is to make a subscriptions on crypto currencies
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )

}

export default WorkPage
