import { Avatar, Box, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

import IsomanImg from '@components/assets/blog-isoman.jpg'
import OxygenImg from '@components/assets/blog-oxygen.jpg'
import VaksinImg from '@components/assets/blog-vaksin.jpg'
import SectionTitle from './section-title'

const news = [
  {
    title: 'Protokol Isolasi Mandiri Bantu Cegah Penyebaran COVID-19',
    date: '24 April 2021',
    description:
      'Jumlah pasien yang terinfeksi virus Corona atau COVID-19 kian hari terus bertambah. Agar tingkat penyebarannya tidak semakin parah, pemerintah menyarankan masyakarat untuk tetap berada di rumah dan menerapkan protokol isolasi mandiri, terutama bagi yang mengalami gejala COVID-19.',
    cover: IsomanImg,
    authorName: 'Dr. Frans Siregar'
  },
  {
    title: 'Persediaan Oksigen Rumah Sakit Rujukan Covid-19 Masih Aman',
    date: '29 Agustus 2021',
    description:
      'Pemerintah memastikan persediaan oksigen di rumah sakit rujukan Covid-19 di semua wilayah masih aman. Banyak pihak yang mambantu menyuplai kebutuhan oksigen, diantaranya PLN dan Singapura.',
    cover: OxygenImg,
    authorName: 'Dr. Jono Subagio'
  },
  {
    title: 'Vaksin Sinovac Kurang Efektif, Tapi Pilihan Lain Terbatas',
    date: '1 September 2021',
    description:
      '"Lebih baik daripada tidak." Demikian penilaian salah seorang pakar penyakit menular terhadap vaksin COVID-19 buatan Sinovac Biotech, menyusul laporan bahwa ratusan tenaga kesehatan Indonesia yang mendapat vaksin itu tetap terjangkit COVID-19.',
    cover: VaksinImg,
    authorName: 'Dr. Yusuf Purba'
  }
]

const News = () => {
  return (
    <Box as="section" mt={40}>
      <SectionTitle>Berita</SectionTitle>

      <SimpleGrid columns={[1, 2, 3]} gap={10}>
        {news.map((news, i) => (
          <VStack key={news.title} align="start" flexDir="column" w="full" p={3} spacing={4}>
            <Box overflow="hidden" rounded="lg">
              <Image src={news.cover} alt={news.title} placeholder="blur" />
            </Box>
            <Text fontSize="sm" color="gray.500">
              {news.date}
            </Text>

            <Heading as="h3" fontSize="2xl">
              {news.title}
            </Heading>
            <Text fontSize="sm">{news.description}</Text>

            <HStack align="center" justify="start">
              <Avatar name={news.authorName} src={`https://randomuser.me/api/portraits/men/${i + 18}.jpg`} />
              <Text fontWeight="medium">{news.authorName}</Text>
            </HStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default News
