import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-item"
import Section from "../components/section"
import thumbdammp from "../public/images/works/dammp.png"
import thumbcoinatm from "../public/images/works/coinatm.png"
import thumbastrobabies from "../public/images/works/astro_babies.png"
import thumbcontinuum from "../public/images/works/continuum.png"
import thumbdinodame from "../public/images/works/dinodame.png"

const WorkPage = () => {
  return (
    <Container maxW={700}>
      <Heading as="h3" variant="page-title" fontSize={20} my={10}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 3]} gap={6}>
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

        <Section>
          <WorkGridItem title="Astro Baby Mint" thumbnail={thumbastrobabies}>
            Astro Baby is a NFT Project with three big collections (Babies, Apes, Pups) on Solana blockchain.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem title="The Larp Explorer" thumbnail={thumbcontinuum}>
            The Larp Explorer is the ethereum blockchain explorer build to fetch the real data from etherscan.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem title="Dinodame Minting Dapp" thumbnail={thumbdinodame}>
            Dinodame minting dapp is build with react library to mint the dino dames nft on ethereum blockchain.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )

}

export default WorkPage
