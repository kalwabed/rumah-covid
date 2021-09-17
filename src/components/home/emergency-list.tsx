import { SimpleGrid, HStack, Box } from '@chakra-ui/react'
import Image from 'next/image'

import EmergencyIllustration from '@components/assets/emergency.png'
import Container from '@components/layout/container'
import ContactCard from './contact-card'
import BUMN from '@components/assets/logo-bumn.png'
import Kemenkes from '@components/assets/logo-kemenkes.png'
import LenteraSvarga from '@components/assets/logo-lentera-svarga.png'
import InfoOxygen from '@components/assets/logo-oxygen.png'
import SectionHeader from '@components/home/section-header'

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
    <Container mt={64}>
      <SectionHeader
        id="kontak-darurat"
        description="Kumpulan informasi situs dan kontak penting terkait fasilitas serta alat kesehatan untuk COVID-19 di level nasional."
      >
        Kontak Penting Terkait COVID-19
      </SectionHeader>

      <HStack justify="space-between" align="center">
        <SimpleGrid columns={2} w={['full', '50%']} gap={[4, 8]}>
          {contactList.map(ct => (
            <ContactCard key={ct.provider} {...ct} />
          ))}
        </SimpleGrid>
        <Box display={['none', 'block']}>
          <Image src={EmergencyIllustration} alt="Doctor" placeholder="blur" />
        </Box>
      </HStack>
    </Container>
  )
}

export default EmergencyList
