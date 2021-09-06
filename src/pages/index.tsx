import { NextPage } from 'next'

import Hero from '@components/home/hero'
import Page from '@components/layout/page'
import Services from '@components/home/services'

const HomePage: NextPage = () => (
  <Page py={10}>
    <Hero />
    <Services />
  </Page>
)

export default HomePage
