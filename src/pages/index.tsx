import { NextPage } from 'next'

import Hero from '@components/home/hero'
import Page from '@components/layout/page'
import Services from '@components/home/services'
import News from '@components/home/news'
import Telemedicine from '@components/home/telemedicine'

const HomePage: NextPage = () => (
  <Page py={10}>
    <Hero />
    <Services />
    <News />
    <Telemedicine />
  </Page>
)

export default HomePage
