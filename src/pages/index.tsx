import { NextPage } from 'next'

import { Box } from '@chakra-ui/react'
import Hero from '@components/home/hero'

const HomePage: NextPage = () => (
  <Box py={10}>
    <Hero />
  </Box>
)

export default HomePage
