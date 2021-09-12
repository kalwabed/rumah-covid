import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import { decodeSlug } from 'src/utils/slug-converter'

const ProvincesQueryPage: NextPage = () => {
  const { asPath } = useRouter()
  const province = decodeSlug(asPath.split('/')[2])

  return (
    <Page>
      <Jumbotron province={province} />
    </Page>
  )
}

export default ProvincesQueryPage
