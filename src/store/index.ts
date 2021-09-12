import { atom } from 'jotai'

export interface Provinces {
  name: string
  slug: string
  entry: number
}

export const provincesState = atom<Provinces[]>([
  { name: 'Jawa Timur', entry: 442, slug: 'jawa-timur' },
  { name: 'DKI Jakarta', entry: 442, slug: 'dki-jakarta' },
  { name: 'Sumatera Utara', entry: 442, slug: 'sumatera-utara' },
  { name: 'Sumatera Barat', entry: 432, slug: 'sumatera-barat' },
  { name: 'Sumatera Selatan', entry: 432, slug: 'sumatera-selatan' },
  { name: 'Aceh', entry: 442, slug: 'aceh' },
  { name: 'Jawa Barat', entry: 543, slug: 'jawa-barat' },
  { name: 'Jawa Tengah', entry: 543, slug: 'jawa-tengah' },
  { name: 'Riau', entry: 543, slug: 'riau' },
  { name: 'Kepulauan Riau', entry: 543, slug: 'kepulauan-riau' },
  { name: 'Bangka Belitung', entry: 543, slug: 'bangka-belitung' },
  { name: 'Jambi', entry: 543, slug: 'jambi' },
  { name: 'Bengkulu', entry: 543, slug: 'bengkulu' },
  { name: 'Lampung', entry: 543, slug: 'lampung' },
  { name: 'Banten', entry: 543, slug: 'banten' },
  { name: 'D.I Yogyakarata', entry: 543, slug: 'di-yogyakarta' },
  { name: 'Nusa Tenggara Timur', entry: 543, slug: 'nusa-tenggara-timur' },
  { name: 'Nusa Tenggara Barat', entry: 432, slug: 'nusa-tenggara-barat' },
  { name: 'Kalimantan Utara', entry: 543, slug: 'kalimantan-utara' },
  { name: 'Kalimantan Timur', entry: 543, slug: 'kalimantan-timur' },
  { name: 'Kalimantan Barat', entry: 543, slug: 'kalimantan-barat' },
  { name: 'Sulawesi Utara', entry: 543, slug: 'sulawesi-utara' },
  { name: 'Sulawesi Barat', entry: 543, slug: 'sulawesi-barat' },
  { name: 'Sulawesi Selatan', entry: 543, slug: 'sulawesi-selatan' },
  { name: 'Sulawesi Tenggara', entry: 543, slug: 'sulawesi-tenggara' },
  { name: 'Sulawesi Tengah', entry: 543, slug: 'sulawesi-tengah' },
  { name: 'Gorontalo', entry: 543, slug: 'gorontalo' },
  { name: 'Maluku', entry: 543, slug: 'maluku' },
  { name: 'Maluku Utara', entry: 543, slug: 'maluku-utara' },
  { name: 'Papua', entry: 543, slug: 'papua' },
  { name: 'Papua Barat', entry: 543, slug: 'papua-barat' }
])

export const hospitalsState = atom([
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  },
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  },
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  },
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  },
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  },
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  },
  {
    provider: 'RS Al-Huda Genteng',
    name: 'Rumah Sakit Rujukan',
    phone: 1234565788,
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan'
  }
])
