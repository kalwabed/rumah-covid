import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceHeader from '@components/province/header'
import ProvinceContent from '@components/province/content'

const ProvincesQueryPage: NextPage = () => {
  const { asPath } = useRouter()
  const province = asPath.split('/')[2]

  return (
    <Page>
      <Jumbotron province={province} />
      <ProvinceHeader />
      <ProvinceContent />
    </Page>
  )
}

export default ProvincesQueryPage
