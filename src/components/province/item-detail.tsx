import { Box, Text, SimpleGrid } from '@chakra-ui/react'

const details = [
  {
    type: 'Penyedia',
    content: 'RSUD Percontohan'
  },
  {
    type: 'Keterangan',
    content: 'Rumah sakit rujukan covid-19'
  },
  {
    type: 'Lokasi',
    content: 'Surabaya'
  },
  {
    type: 'Kontak',
    content: '(021) 12345678'
  },
  {
    type: 'Alamat',
    content: 'Jl. Pucang Anom Timur IV No.12, RT004/RW03, Kertajaya, Kec. Gubeng, Kota Surabaya, Jawa Timur, 60282'
  },
  {
    type: 'Tautan',
    content: 'https://example.com'
  },
  {
    type: 'Terakhir Update',
    content: '22 September 2021'
  },
  {
    type: 'Bentuk Verifikasi',
    content: 'Verifikasi via chat WhatsApp'
  },
  {
    type: 'Tambahan Informasi',
    content:
      'Ambulans 24 jam untuk pasien dan jenazah Covid-19. Penjemputan dari Sidoarjo/Surabaya. Bisa antar ke kota lain. Tersedia 3 unit. Tidak menyediakan peti.'
  }
]

const ItemDetail = () => {
  return (
    <Box
      border="1px"
      borderColor="gray.100"
      bgColor="gray.50"
      fontSize={['sm', 'md']}
      shadow="sm"
      w="full"
      my={6}
      rounded="md"
    >
      {details.map(detail => (
        <Box key={detail.type} borderBottom="1px" borderColor="gray.200">
          <SimpleGrid columns={2} mb={2} px={4} py={3}>
            <Box>
              <Text color="gray.500">{detail.type}</Text>
            </Box>
            <Box>
              <Text>{detail.content}</Text>
            </Box>
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  )
}

export default ItemDetail
