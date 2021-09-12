import { useMemo } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { SimpleGrid, VStack, Text, Box, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import Link from 'next/link'
import { useAtom } from 'jotai'

import Container from '@components/layout/container'
import { provincesState } from 'src/store'

const Jumbotron = ({ province = '' }) => {
  const [provinces] = useAtom(provincesState)

  const title = useMemo(() => provinces?.find(prov => prov.slug === province)?.name ?? 'Provinsi', [province])

  return (
    <Container isFullWidth bgColor="gray.800" bgImage="/topography.svg" color="white" w="full" pb={14} pt={6} px={0}>
      <Container>
        <SimpleGrid columns={[1]} gap={10}>
          <Box>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} mb={10}>
              <BreadcrumbItem>
                <Link href="/" passHref>
                  <BreadcrumbLink>
                    <FiHome />
                  </BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link href="/provinces" passHref>
                  <BreadcrumbLink isCurrentPage={!province}>Provinsi</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              {province && (
                <BreadcrumbItem>
                  <Link href={`/provinces/${province}`} passHref>
                    <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
              )}
            </Breadcrumb>
            <VStack spacing={4} align="start">
              <Heading as="h1" fontSize="5xl">
                {title}
              </Heading>
              <Text w={['full', '60%']}>
                Informasi seputar kontak fasilitas kesehatan di{' '}
                {province ? `Provinsi ${title}` : 'seluruh provinsi di Indonesia'} yang dikumpulkan relawan melalui
                pencarian di internet atau media sosial.
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
  )
}

export default Jumbotron
