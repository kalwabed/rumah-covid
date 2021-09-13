import {
  SimpleGrid,
  Stack,
  Grid,
  GridItem,
  Flex,
  Badge,
  HStack,
  Icon,
  Button,
  Link as ChakraLink,
  Text,
  Box,
  Tooltip
} from '@chakra-ui/react'
import { HiBadgeCheck, HiLocationMarker, HiPhone } from 'react-icons/hi'

const SiteItems = () => {
  return (
    <SimpleGrid columns={[1]} w="full" gap={5}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => (
        <Box
          key={k}
          px={[4, 6]}
          py={4}
          border="1px solid"
          w={['full', '80%']}
          borderColor="gray.200"
          rounded="md"
          _hover={{ shadow: 'md' }}
        >
          <HStack align="center" justify="space-between" mb={1}>
            <ChakraLink color="blue.500" href="#" fontSize={['sm', 'lg']} fontWeight="bold">
              Rumah Sakit Rujukan Islam Terdepan
            </ChakraLink>
            <HStack>
              <Badge colorScheme="green">tersedia</Badge>
              <Badge colorScheme="orange">rumah sakit</Badge>
            </HStack>
          </HStack>
          <HStack justify="space-between" align="center">
            <Text fontSize="sm" fontWeight="medium">
              RS Al-Huda Genteng
            </Text>
            <HStack>
              <Text fontSize="xs" color="gray.500">
                Terverifikasi 28/07/2021
              </Text>
              <Icon display={['none', 'block']} as={HiBadgeCheck} color="green.400" boxSize={5} />
            </HStack>
          </HStack>
          <HStack display={['flex', 'none']} my={1}>
            <Icon as={HiBadgeCheck} color="blue.500" boxSize={5} />
            <Text fontSize="sm">Terverifikasi 28/07/2021</Text>
          </HStack>
          <HStack my={2}>
            <Icon as={HiPhone} />{' '}
            <ChakraLink href="tel:08123456789" color="blue.600">
              08123456789
            </ChakraLink>
          </HStack>
          <HStack align="start">
            <Icon as={HiLocationMarker} />{' '}
            <Text fontSize="sm">
              Jl. Jend. Sudirman Kav. 49, Kecamatan Setiabudi, Kelurahan Karet Semanggi, Jakarta Selatan
            </Text>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default SiteItems
