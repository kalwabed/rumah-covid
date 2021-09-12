import { ChangeEvent, useMemo, useState } from 'react'

import Page from '@components/layout/page'
import Jumbotron from '@components/provinces/jumbotron'
import ProvinceList from '@components/provinces/province-list'
import SearchBar from '@components/provinces/search-bar'

const provinces = [
  { name: 'Jawa Timur', entry: 442 },
  { name: 'DKI Jakarta', entry: 442 },
  { name: 'Sumatera Utara', entry: 442 },
  { name: 'Sumatra Barat', entry: 432 },
  { name: 'Sumatra Selatan', entry: 432 },
  { name: 'Aceh', entry: 442 },
  { name: 'Jawa Barat', entry: 543 },
  { name: 'Jawa Tengah', entry: 543 },
  { name: 'Riau', entry: 543 },
  { name: 'Kepulauan Riau', entry: 543 },
  { name: 'Bangka Belitung', entry: 543 },
  { name: 'Jambi', entry: 543 },
  { name: 'Bengkulu', entry: 543 },
  { name: 'Lampung', entry: 543 },
  { name: 'Banten', entry: 543 },
  { name: 'D.I Yogyakarata', entry: 543 },
  { name: 'Nusa Tenggara Timur', entry: 543 },
  { name: 'Nusa Tenggara Barat', entry: 432 },
  { name: 'Kalimantan Utara', entry: 543 },
  { name: 'Kalimantan Timur', entry: 543 },
  { name: 'Kalimantan Barat', entry: 543 },
  { name: 'Sulawesi Utara', entry: 543 },
  { name: 'Sulawesi Barat', entry: 543 },
  { name: 'Sulawesi Selatan', entry: 543 },
  { name: 'Sulawesi Tenggara', entry: 543 },
  { name: 'Sulawesi Tengah', entry: 543 },
  { name: 'Gorontalo', entry: 543 },
  { name: 'Maluku', entry: 543 },
  { name: 'Maluku Utara', entry: 543 },
  { name: 'Papua', entry: 543 },
  { name: 'Papua Barat', entry: 543 }
]

const ProvincesPage = () => {
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
