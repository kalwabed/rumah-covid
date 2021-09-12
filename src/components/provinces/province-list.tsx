import { Icon, chakra, SimpleGrid, Flex, Box, LinkOverlay, Text, HStack, LinkBox } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'
import Link from 'next/link'

import Container from '@components/layout/container'

const provinces = [
  { name: 'Jawa Timur', entry: 442 },
  { name: 'DKI Jakarta', entry: 442 },
  { name: 'Sumatera Utara', entry: 442 },
  { name: 'Sumatra Barat', entry: 432 },
  { name: 'Sumatra Selatan', entry: 432 },
  { name: 'Aceh', entry: 442 },
  { name: 'Jawa Barat', entry: 543 },
  { name: 'Jawa Tengah', entry: 543 },
  { name: 'Riau', entry: 543 },
  { name: 'Kepulauan Riau', entry: 543 },
  { name: 'Bangka Belitung', entry: 543 },
  { name: 'Jambi', entry: 543 },
  { name: 'Bengkulu', entry: 543 },
  { name: 'Lampung', entry: 543 },
  { name: 'Banten', entry: 543 },
  { name: 'D.I Yogyakarata', entry: 543 },
  { name: 'Nusa Tenggara Timur', entry: 543 },
  { name: 'Nusa Tenggara Barat', entry: 432 },
  { name: 'Kalimantan Utara', entry: 543 },
  { name: 'Kalimantan Timur', entry: 543 },
  { name: 'Kalimantan Barat', entry: 543 },
  { name: 'Sulawesi Utara', entry: 543 },
  { name: 'Sulawesi Barat', entry: 543 },
  { name: 'Sulawesi Selatan', entry: 543 },
  { name: 'Sulawesi Tenggara', entry: 543 },
  { name: 'Sulawesi Tengah', entry: 543 },
  { name: 'Gorontalo', entry: 543 },
  { name: 'Maluku', entry: 543 },
  { name: 'Maluku Utara', entry: 543 },
  { name: 'Papua', entry: 543 },
  { name: 'Papua Barat', entry: 543 }
]

const ProvinceList = () => {
  return (
    <Container mt={10}>
      <SimpleGrid columns={[2, 3]} gap={[5, 8]}>
        {provinces.map(province => (
          <HStack
            key={province.name}
            bgColor="gray.100"
            p={[3, 0]}
            spacing={[0, 3]}
            minH={16}
            rounded="md"
            overflow="hidden"
            shadow="sm"
          >
            <Flex
              display={['none', 'flex']}
              w="15%"
              justify="center"
              align="center"
              fontWeight="medium"
              color="white"
              height="full"
              bgImg={`url(https://source.boringavatars.com/marble/100/${encodeURI(
                province.name
              )}?colors=2F2BAD,AD2BAD,E42692&square=true)`}
              bgPos="center"
            >
              {province.name[0]}
            </Flex>

            <LinkBox>
              <Flex flexDir="column">
                <HStack align="center" mb={[0, 2]}>
                  <Link href="/provinces/jawa-timur" passHref>
                    <LinkOverlay
                      borderRight={['none', '1px solid gray']}
                      pr={3}
                      py={0}
                      fontWeight="bold"
                      fontSize={['md', 'lg']}
                    >
                      {province.name}
                    </LinkOverlay>
                  </Link>

                  <Text color="gray.600" display={['none', 'block']}>
                    {province.entry} Entri
                  </Text>
                </HStack>
                <Text fontSize="sm" display={['block', 'none']} my={1} color="gray.600">
                  {province.entry} Entri
                </Text>
                <HStack color="gray.500" spacing={[0, 2]}>
                  <Icon as={FiClock} boxSize={[3, 4]} display={['none', 'block']} />
                  <Text fontSize="xs">Update 3 September 2021</Text>
                </HStack>
              </Flex>
            </LinkBox>
          </HStack>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default ProvinceList
