import { NextPage } from 'next'
import { useAtomValue } from 'jotai/utils'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceHeader from '@components/province/header'
import ProvinceContent from '@components/province'
import { provinceState } from 'src/store'

const ProvincesQueryPage: NextPage = () => {
  const province = useAtomValue(provinceState)

  return (
    <Page title={`Informasi seputar kontak fasilitas kesehatan di Provinsi ${province.title}`}>
      <Jumbotron />
      <ProvinceHeader />
      <ProvinceContent />
    </Page>
  )
}

export default ProvincesQueryPage
