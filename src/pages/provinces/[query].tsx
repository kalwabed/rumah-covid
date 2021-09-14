import { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceHeader from '@components/province/header'
import ProvinceContent from '@components/province/content'
import { provinceState } from 'src/store'

const ProvincesQueryPage: NextPage = () => {
  const { asPath } = useRouter()
  const [, setProvince] = useAtom(provinceState)

  const province = asPath.split('/')[2].replace('#', '')

  useEffect(() => {
    setProvince(province)
  }, [province])

  return (
    <Page>
      <Jumbotron />
      <ProvinceHeader />
      <ProvinceContent />
    </Page>
  )
}

export default ProvincesQueryPage
