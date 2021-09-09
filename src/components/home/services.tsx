import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Icon, Text, VStack, Button, SimpleGrid } from '@chakra-ui/react'
import { FaRegHospital } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { IoCallOutline } from 'react-icons/io5'

import SectionTitle from './section-title'

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
    <Box as="section" mt={40}>
      <SectionTitle>Pelayanan</SectionTitle>

      <SimpleGrid columns={[1, 3]} gap={10}>
        {services.map(service => (
          <Flex
            key={service.name}
            flexDir="column"
            align="start"
            p={4}
            bgGradient="linear(to-br, rgba(61,61,61,0.10968137254901966) 0%, rgba(255,255,255,1) 55%, rgba(162,244,213,0.25539565826330536) 100%)"
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
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Services
