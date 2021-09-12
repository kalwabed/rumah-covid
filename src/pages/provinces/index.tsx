import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceList from '@components/provinces/province-list'
import SearchBar from '@components/provinces/search-bar'

const ProvincesPage = () => {
  return (
    <Page>
      <Jumbotron />
      <SearchBar />
      <ProvinceList />
    </Page>
  )
}

export default ProvincesPage
