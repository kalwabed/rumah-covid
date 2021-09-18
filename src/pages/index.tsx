import { NextPage } from 'next'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import Hero from '@components/home/hero'
import Page from '@components/layout/page'
import Services from '@components/home/services'
import News from '@components/home/news'
import Telemedicine from '@components/shared/telemedicine'

const HomePage: NextPage = () => (
  <>
    <Box position="absolute" top={[-320, -100]} right={[-300, -180]} zIndex={0}>
      <Image src="/hero-blob.svg" width={500} height={500} alt="Hero blob" />
    </Box>
    <Box position="absolute" top={[-320, -100]} left={[-280, -245]} zIndex={0}>
      <Image src="/logo-blob.svg" width={500} height={500} alt="Hero blob" />
    </Box>

    <Page title="Sumber Informasi Faskes untuk Covid-19 | RumahCovid" py={10}>
      <Hero />
      <Services />
      <News />
      <Telemedicine />
    </Page>
  </>
)

export default HomePage
