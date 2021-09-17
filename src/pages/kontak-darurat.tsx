import Telemedicine from '@components/shared/telemedicine'
import EmergencyList from '@components/kontak-darurat/emergency-list'
import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'

const KontakDarurat = () => {
  return (
    <Page>
      <Jumbotron type="kontak-darurat" />
      <EmergencyList />
      <Telemedicine />
    </Page>
  )
}

export default KontakDarurat
