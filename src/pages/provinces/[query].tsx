import { NextPage } from 'next'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceHeader from '@components/province/header'
import ProvinceContent from '@components/province'

const ProvincesQueryPage: NextPage = () => {
  return (
    <Page>
      <Jumbotron />
      <ProvinceHeader />
      <ProvinceContent />
    </Page>
  )
}

export default ProvincesQueryPage
