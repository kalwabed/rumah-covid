import { Box, Flex, Heading, Icon, Text, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FaRegHospital, FaAmbulance } from 'react-icons/fa'
import { GiScubaTanks } from 'react-icons/gi'
import { FiBook } from 'react-icons/fi'

import SectionTitle from './section-title'

const services = [
  {
    name: 'Rumah sakit',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque laboriosam est nostrum aliquid cum mollitia.',
    icon: FaRegHospital
  },
  {
    name: 'Ambulans',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque laboriosam est nostrum aliquid cum mollitia.',
    icon: FaAmbulance
  },
  {
    name: 'Info oksigen',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque laboriosam est nostrum aliquid cum mollitia.',
    icon: GiScubaTanks
  },
  {
    name: 'Edukasi',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eaque laboriosam est nostrum aliquid cum mollitia.',
    icon: FiBook
  }
]

const Services = () => {
  return (
    <Box as="section" mt={40}>
      <SectionTitle>Pelayanan</SectionTitle>

      <SimpleGrid columns={[1, 2, 4]} gap={10}>
        {services.map(service => (
          <Flex key={service.name} flexDir="column" justify="center" align="center" p={2}>
            <VStack spacing={4}>
              <VStack align="center">
                <Icon as={service.icon} p={2.5} color="blue.500" w={16} h={16} bgColor="blue.50" rounded="full" />
                <Heading as="h3" fontSize="3xl" textTransform="capitalize">
                  {service.name}
                </Heading>
              </VStack>
              <Text textAlign="center" color="gray.600" w="85%">
                {service.description}
              </Text>
              <Button textTransform="capitalize">Telusuri {service.name}</Button>
            </VStack>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Services
