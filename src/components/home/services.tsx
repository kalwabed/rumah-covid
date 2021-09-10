import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, GridItem, Grid, Flex, Heading, Icon, Text, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FaRegHospital } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'

import PageContent from '@components/layout/page-content'
import SectionTitle from './section-title'
import Image from 'next/image'

const services = [
  {
    name: 'Rumah sakit',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: FaRegHospital
  },
  {
    name: 'Isoman',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: FiHome
  },
  {
    name: 'Kontak Darurat',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: IoCallOutline
  }
]

const Services = () => {
  return (
    <PageContent isFullWidth mt={40} py={16} px={0}>
      <Box
        pos="absolute"
        top={0}
        left={0}
        transform="auto"
        skewY="-8deg"
        h="full"
        w="full"
        bgColor="gray.700"
        zIndex={-10}
      />
      <SimpleGrid columns={[1]} gap={10} py={48} maxW="8xl" w="full" mx="auto">
        <Grid templateColumns="repeat(2,1fr)" justifyItems="end" alignItems="center" gap={10}>
          <GridItem colSpan={1}>
            <Image src="/service-rs.svg" alt="Rumah sakit" width={500} height={350} />
          </GridItem>

          <GridItem colSpan={1} justifySelf="center" w="50%">
            <VStack align="start" spacing={6} mb={4}>
              <Box bgColor="green.500" p={4} shadow="xl" rounded="full">
                <Icon as={FaRegHospital} p={1} color="white" w={16} h={16} />
              </Box>
              <Heading as="h3" color="white" fontSize="3xl">
                Rumah sakit
              </Heading>
            </VStack>
            <VStack spacing={4} align="start">
              <Text color="white">
                Memprioritaskan faskes dengan standar nasional, dan didukung dengan teknologi terkini.
              </Text>
              <Button variant="unstyled" color="blue.400" rightIcon={<ArrowForwardIcon />}>
                Telusuri rumah sakit
              </Button>
            </VStack>
          </GridItem>
        </Grid>

        {/* {services.map(service => (
          <Flex
            key={service.name}
            flexDir="column"
            align="start"
            p={4}
            rounded="xl"
          >
            <Flex align="start" flexDir="column">
              <VStack align="start" mb={4} spacing={4}>
                <Box bgColor="green.500" p={2.5} shadow="xl" rounded="full">
                  <Icon as={service.icon} p={1} color="white" w={10} h={10} />
                </Box>
                <Heading as="h3" fontSize="2xl" textTransform="capitalize">
                  {service.name}
                </Heading>
              </VStack>
              <Text color="gray.600" w="85%">
                {service.description}
              </Text>
              <Button textTransform="capitalize" variant="ghost" mt={8} rightIcon={<ArrowForwardIcon />}>
                Telusuri {service.name}
              </Button>
            </Flex>
          </Flex>
        ))} */}
      </SimpleGrid>
    </PageContent>
  )
}

export default Services
