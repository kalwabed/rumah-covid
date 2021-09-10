import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react'
import Link from 'next/link'

import PageContent from '@components/layout/page-content'
import SectionHeader from './section-header'

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
    <PageContent mt={64}>
      <SectionHeader description="Menambah wawasan melalui artikel yang ditulis oleh para tenaga ahli di lapangan.">
        Berita terkini
      </SectionHeader>

      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        {news.map((news, i) => (
          <LinkBox
            key={news.title}
            bgImage={`url('/news-${i + 1}-bg.jpg')`}
            bgPos="top"
            p={[4, 8]}
            rounded="md"
            shadow="md"
          >
            <VStack
              align="start"
              flexDir="column"
              w="full"
              h="full"
              p={8}
              spacing={4}
              bgColor="gray.900"
              color="white"
              rounded="md"
              shadow="lg"
            >
              <HStack align="center" justify="start">
                <Avatar
                  size="sm"
                  name={news.authorName}
                  src={`https://randomuser.me/api/portraits/men/${i + 18}.jpg`}
                />
                <Text fontWeight="medium" fontSize={['sm', 'md']}>
                  {news.authorName}
                </Text>
              </HStack>
              <Link href="/news" passHref>
                <LinkOverlay fontSize="2xl" fontWeight="bold">
                  {news.title}
                </LinkOverlay>
              </Link>
              <Text fontSize="sm">{news.description}</Text>
              <Text fontSize="sm" color="gray.500">
                {news.date}
              </Text>
            </VStack>
          </LinkBox>
        ))}

        <Box bgImage="url('/news-4-bg.jpg')" bgPos="top" p={8} rounded="md" shadow="md">
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
            <ChakraLink href="#" fontSize={['3xl', '4xl']} fontWeight="bold">
              Berita lainnya <ArrowForwardIcon />{' '}
            </ChakraLink>
          </VStack>
        </Box>
      </SimpleGrid>
    </PageContent>
  )
}

export default News
