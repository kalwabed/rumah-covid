import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, SimpleGrid, VStack, Link as ChakraLink } from '@chakra-ui/react'

import Container from '@components/layout/container'
import SectionHeader from './section-header'
import NewsCard from './news-card'

const news = [
  {
    title: 'Protokol Isolasi Mandiri Bantu Cegah Penyebaran COVID-19',
    date: '24 Agustus 2021',
    description:
      'Jumlah pasien yang terinfeksi virus Corona atau COVID-19 kian hari terus bertambah. Agar tingkat penyebarannya tidak semakin parah, pemerintah menyarankan masyakarat untuk tetap berada di rumah dan menerapkan protokol isolasi mandiri, terutama bagi yang mengalami gejala COVID-19.',
    authorName: 'Dr. Frans Siregar'
  },
  {
    title: 'Persediaan Oksigen Rumah Sakit Rujukan Covid-19 Masih Aman',
    date: '2 Agustus 2021',
    description:
      'Pemerintah memastikan persediaan oksigen di rumah sakit rujukan Covid-19 di semua wilayah masih aman. Banyak pihak yang mambantu menyuplai kebutuhan oksigen, diantaranya PLN dan Singapura.',
    authorName: 'Dr. Jono Subagio'
  },
  {
    title: 'Vaksin Sinovac Kurang Efektif, Tapi Pilihan Lain Terbatas',
    date: '14 Mei 2021',
    description:
      '"Lebih baik daripada tidak." Demikian penilaian salah seorang pakar penyakit menular terhadap vaksin COVID-19 buatan Sinovac Biotech, menyusul laporan bahwa ratusan tenaga kesehatan Indonesia yang mendapat vaksin itu tetap terjangkit COVID-19.',
    authorName: 'Dr. Yusuf Purba'
  }
]

const News = () => {
  return (
    <Container mt={[32, 64]}>
      <SectionHeader description="Menambah wawasan melalui artikel yang ditulis oleh para tenaga ahli di lapangan.">
        Berita terkini.
      </SectionHeader>

      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        {news.map((news, i) => (
          <NewsCard key={news.title} index={i} news={news} />
        ))}

        <Box bgImage="url('/assets/news-4-bg.jpg')" bgPos="top" p={[4, 8]} rounded="md" shadow="md">
          <VStack
            align="center"
            flexDir="column"
            justify="center"
            w="full"
            h="full"
            p={8}
            spacing={4}
            bgColor="gray.900"
            color="white"
            rounded="md"
            shadow="lg"
          >
            <ChakraLink href="#" fontSize={['2xl', '4xl']} fontWeight="bold">
              Berita lainnya <ArrowForwardIcon />{' '}
            </ChakraLink>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default News
