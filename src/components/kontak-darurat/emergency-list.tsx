import { SimpleGrid, HStack, Box, Image } from '@chakra-ui/react'

import Container from '@components/layout/container'
import ContactCard from './contact-card'

const contactList = [
  { provider: 'SIRANAP V3.0', description: 'Situs Sistem Informasi Rawat Inap', image: '/assets/logo-kemenkes.png' },
  { provider: 'Farma Plus', description: 'Situs Ketersediaan Obat di Daerahmu', image: '/assets/logo-bumn.png' },
  {
    provider: 'Lentera Svarga',
    description: 'Situs Layanan Krematorium, Mobil Jenazah, Peti Mati, Bunga Duka, dan Program Bantuan Makanan Isoman',
    image: '/assets/logo-lentera-svarga.png'
  },
  { provider: 'Info Oxygen', description: 'Informasi Tabung Oksigen di Daerahmu', image: '/assets/logo-oxygen.png' }
]

const EmergencyList = () => {
  return (
    <Container mt={20}>
      <HStack justify="space-between" align="center">
        <SimpleGrid columns={2} w={['full', '50%']} gap={[4, 8]}>
          {contactList.map(ct => (
            <ContactCard key={ct.provider} {...ct} />
          ))}
        </SimpleGrid>
        <Box display={['none', 'block']}>
          <Image src="/assets/emergency.png" alt="Doctor" />
        </Box>
      </HStack>
    </Container>
  )
}

export default EmergencyList
