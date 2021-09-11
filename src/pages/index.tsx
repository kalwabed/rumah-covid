import { NextPage } from 'next'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import Hero from '@components/home/hero'
import Page from '@components/layout/page'
import Services from '@components/home/services'
import News from '@components/home/news'
import Telemedicine from '@components/home/telemedicine'

const HomePage: NextPage = () => (
  <>
    <Box position="absolute" top={[-320, -100]} right={[-300, -180]}>
      <Image src="/hero-blob.svg" width={500} height={500} alt="Hero blob" />
    </Box>
    <Box position="absolute" display={['none', null, 'inline-block']} top={-100} left={-245}>
      <Image src="/logo-blob.svg" width={500} height={500} alt="Hero blob" />
    </Box>

    <Page py={10}>
      <Hero />
      <Services />
      <News />
      <Telemedicine />
    </Page>
  </>
)

export default HomePage
