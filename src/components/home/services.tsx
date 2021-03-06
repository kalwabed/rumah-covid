import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import { Box, GridItem, Grid, Heading, Icon, Text, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FaRegHospital } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'

import Container from '@components/layout/container'
import ServiceRs from '@components/assets/service-rs.png'
import ServiceIsoman from '@components/assets/service-isoman.png'
import ServiceContact from '@components/assets/service-contact.png'

const services = [
  {
    name: 'Rumah sakit',
    description: 'Memprioritaskan faskes dengan standar nasional, dan didukung dengan teknologi terkini.',
    image: ServiceRs,
    icon: FaRegHospital,
    iconBg: 'coral',
    buttonText: 'Telusuri rumah sakit',
    href: '/provinces?kebutuhan=rumah%20sakit'
  },
  {
    name: 'Isolasi mandiri',
    description: 'Daftar tempat-tempat yang mendukung isolasi mandiri dibawah pengawasan dinas kesehatan.',
    image: ServiceIsoman,
    icon: FiHome,
    iconBg: 'forestgreen',
    buttonText: 'Telusuri tempat isoman',
    href: '/provinces?kebutuhan=isoman'
  },
  {
    name: 'Kontak Darurat',
    description: 'Situs dan kontak penting terkait penanganan dan pencegahan COVID-19.',
    image: ServiceContact,
    icon: IoCallOutline,
    iconBg: 'tomato',
    buttonText: 'Telusuri kontak darurat',
    href: '/kontak-darurat'
  }
]

const Services = () => {
  return (
    <Container isFullWidth mt={40} py={16} px={[4, 0]}>
      <Box
        pos="absolute"
        top={0}
        left={0}
        transform="auto"
        skewY="-8deg"
        h="full"
        w="full"
        bgColor="gray.800"
        zIndex={-10}
      />
      <SimpleGrid columns={1} gap={[28, 48]} py={48} maxW="8xl" w="full" mx="auto">
        {services.map(service => (
          <Grid
            key={service.name}
            templateColumns={['none', 'repeat(2,1fr)']}
            justifyItems="end"
            alignItems="center"
            gap={10}
            py={8}
          >
            <GridItem colSpan={1} display={['none', 'grid']}>
              <Image src={service.image} alt={service.name} placeholder="blur" width={600} height={400} />
            </GridItem>

            <GridItem colSpan={1} justifySelf="center" w={['90%', '50%']}>
              <VStack align={['center', 'start']} spacing={6} mb={[3, 4]}>
                <Box bgColor={service.iconBg} p={4} shadow="xl" rounded="full">
                  <Icon as={service.icon} p={1} color="white" w={16} h={16} />
                </Box>
                <Heading as="h3" color="white" fontSize="4xl">
                  {service.name}
                </Heading>
              </VStack>
              <VStack spacing={4} align={['center', 'start']} textAlign={['center', 'start']}>
                <Text letterSpacing=".025rem" color="white">
                  {service.description}
                </Text>
                <Link href={service.href}>
                  <a>
                    <Button
                      size="lg"
                      variant="unstyled"
                      color="blue.400"
                      alignItems="center"
                      display="inline-flex"
                      rightIcon={<ArrowForwardIcon boxSize={5} />}
                    >
                      {service.buttonText}
                    </Button>
                  </a>
                </Link>
              </VStack>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Services
