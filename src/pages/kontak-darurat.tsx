import type { NextPage } from 'next'

import EmergencyList from '@components/kontak-darurat/emergency-list'
import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'

const KontakDaruratPage: NextPage = () => {
  return (
    <Page title="Kontak Penting Terkait COVID-19 | RumahCovid">
      <Jumbotron type="kontak-darurat" />
      <EmergencyList />
    </Page>
  )
}

export default KontakDaruratPage
