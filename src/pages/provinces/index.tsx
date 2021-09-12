import { NextPage } from 'next'
import { ChangeEvent, useMemo, useState } from 'react'
import { useAtom } from 'jotai'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceList from '@components/provinces/province-list'
import SearchBar from '@components/provinces/search-bar'
import { provincesState } from 'src/store'

const ProvincesPage: NextPage = () => {
  const [provinces] = useAtom(provincesState)
  const [search, setSearch] = useState('')

  const filteredProvinces = useMemo(() => {
    if (provinces.length === 0) return null

    if (search) {
      return provinces.filter(province => province.name.toLowerCase().includes(search.toLowerCase()))
    }

    return provinces
  }, [search])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <Page>
      <Jumbotron />
      <SearchBar search={search} onChange={handleOnChange} />
      <ProvinceList provinces={filteredProvinces} />
    </Page>
  )
}

export default ProvincesPage
