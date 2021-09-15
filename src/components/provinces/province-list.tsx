import { Icon, SimpleGrid, Flex, LinkOverlay, Text, HStack, LinkBox } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Container from '@components/layout/container'
import { Provinces } from 'src/store'
import EmptyState from './empty-state'

const ProvinceList = ({ provinces }: { provinces: Provinces[] }) => {
  const { asPath } = useRouter()

  return (
    <Container mt={10}>
      {provinces.length === 0 && <EmptyState />}
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
                  <Link href={`/provinces/${province.slug}`} passHref>
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
