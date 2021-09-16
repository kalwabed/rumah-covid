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
  { name: 'D.I Yogyakarta', entry: 543, slug: 'di-yogyakarta' },
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

interface Item {
  description: string
  provider: string
  phone: string
  address: string
  verified?: string
  status?: 'Tersedia' | 'Tidak Tersedia'
  category: string
}

export const itemsState = atom<Item[]>([
  {
    description: 'Ambulans siap tanggap',
    provider: 'RS Al-huda Genteng',
    phone: '081928928222',
    address: 'Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan',
    verified: 'Terverifikasi 28/07/2021',
    status: 'Tersedia',
    category: 'rumah sakit'
  },
  {
    description: 'Ketersediaan tempat tidur',
    provider: 'RSUPN Dr. Cipto Mangkunkusumo',
    phone: '1500135',
    address: 'Poliklinik Madya RSCM RW.5, Kenari, Senen, Central Jakarta City, Jakarta 10430',
    verified: 'Terverifikasi 28/07/2021',
    category: 'rumah sakit'
  },
  {
    description: 'Rumah sakit rujukan covid-19',
    provider: 'RS Islam Pondok Kopi',
    phone: '0218093288',
    address: 'Jl. Raya Pondok Kopi Jakarta Timur',
    verified: 'Terverifikasi 28/07/2021',
    status: 'Tidak Tersedia',
    category: 'rumah sakit'
  },
  {
    description: 'Rumah sakit rujukan covid-19',
    provider: 'RS Umum Bhakti Mulia',
    phone: '(021) 548 1625',
    address: 'Jl. KS Tubun No. 79 Slipi Jakarta Barat',
    status: 'Tersedia',
    category: 'rumah sakit'
  },
  {
    description: 'Rumah sakit rujukan covid-19',
    provider: 'RSUP Fatmawati',
    phone: '02175015247660552',
    address: 'Jln. Rs. Fatmawati Raya No.4',
    category: 'rumah sakit'
  },
  {
    description: 'RS rujukan covid ibu hamil',
    provider: 'RSUD Saiful Anwar',
    phone: '081391917939',
    address: 'Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65112',
    verified: 'Terverifikasi 28/07/2021',
    category: 'rumah sakit'
  }
])

export const provinceState = atom<{ title: string; url: string }>({ url: '', title: '' })

export const pathState = atom<string>('')
