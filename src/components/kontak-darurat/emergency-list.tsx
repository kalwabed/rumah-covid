import { SimpleGrid, HStack, Box } from '@chakra-ui/react'
import Image from 'next/image'

import EmergencyIllustration from '@components/assets/emergency.png'
import Container from '@components/layout/container'
import ContactCard from './contact-card'
import BUMN from '@components/assets/logo-bumn.png'
import Kemenkes from '@components/assets/logo-kemenkes.png'
import LenteraSvarga from '@components/assets/logo-lentera-svarga.png'
import InfoOxygen from '@components/assets/logo-oxygen.png'

const contactList = [
  { provider: 'SIRANAP V3.0', description: 'Situs Sistem Informasi Rawat Inap', image: Kemenkes },
  { provider: 'Farma Plus', description: 'Situs Ketersediaan Obat di Daerahmu', image: BUMN },
  {
    provider: 'Lentera Svarga',
    description: 'Situs Layanan Krematorium, Mobil Jenazah, Peti Mati, Bunga Duka, dan Program Bantuan Makanan Isoman',
    image: LenteraSvarga
  },
  { provider: 'Info Oxygen', description: 'Informasi Tabung Oksigen di Daerahmu', image: InfoOxygen }
]

const EmergencyList = () => {
  return (
    <Container mt={20}>
      <HStack justify="space-between" align="center">
        <SimpleGrid columns={2} w="50%" gap={8}>
          {contactList.map(ct => (
            <ContactCard {...ct} />
          ))}
        </SimpleGrid>
        <Box>
          <Image src={EmergencyIllustration} alt="Doctor" placeholder="blur" />
        </Box>
      </HStack>
    </Container>
  )
}

export default EmergencyList
