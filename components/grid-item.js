import NextLink from 'next/link'
import Image from 'next/image'
import { Box, LinkBox, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const WorkGridItem = ({ children, title, category='works', id, thumbnail }) => (
  <Box w="100%" align="center" >
     <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <div>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder='blur'
          loading='lazy'
          />
        <Text mt={2}>{title}</Text>
        <Text mt={5} fontSize={14}>
          {children}
        </Text>
        </div>
    </LinkBox>
  </Box >
)

export const GridItemStyle = () => (

  <Global styles={`
    .grid-item-thumbail: {
      border-radius: 12px;
      height: 900px;
    }
  `} />
)