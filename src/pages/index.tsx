import { NextPage } from 'next'

import Hero from '@components/home/hero'
import Page from '@components/layout/page'
import Services from '@components/home/services'
import News from '@components/home/news'

const HomePage: NextPage = () => (
  <Page py={10}>
    <Hero />
    <Services />
    <News />
  </Page>
)

export default HomePage
