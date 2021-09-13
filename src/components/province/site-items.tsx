import { SimpleGrid, HStack, Icon, Box, Heading, Text, Tooltip } from '@chakra-ui/react'
import { HiBadgeCheck, HiLocationMarker, HiPhone } from 'react-icons/hi'

const SiteItems = () => {
  return (
    <SimpleGrid columns={[1, 2]} w="full" gap={5}>
      {[1, 2].map(k => (
        <Box px={6} py={4} border="1px solid" borderColor="gray.200" rounded="md" _hover={{ shadow: 'md' }}>
          <HStack align="center" mb={1}>
            <Heading as="h2" fontSize="2xl">
              Rumah Sakit Rujukan
            </Heading>
            <Tooltip hasArrow label="Terverifikasi 28/07/2021" bg="blue.400" color="white">
              <span>
                <Icon as={HiBadgeCheck} color="blue.500" boxSize={5} />
              </span>
            </Tooltip>
          </HStack>
          <Text>RS Al-Huda Genteng</Text>
          <HStack my={2}>
            <Icon as={HiPhone} /> <Text>08111617101</Text>
          </HStack>
          <HStack align="start">
            <Icon as={HiLocationMarker} />{' '}
            <Text w="90%" fontSize="sm">
              Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan
            </Text>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default SiteItems
