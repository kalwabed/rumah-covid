import { ChevronRightIcon } from '@chakra-ui/icons'
import { SimpleGrid, VStack, Text, Box, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import Link from 'next/link'

import PageContent from '@components/layout/page-content'

const Jumbotron = () => {
  return (
    <PageContent isFullWidth bgColor="gray.800" bgImage="/topography.svg" color="white" w="full" pb={14} pt={6} px={0}>
      <SimpleGrid columns={2} maxW="8xl" w="full" mx="auto" gap={10}>
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
                <BreadcrumbLink isCurrentPage>Provinsi</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <VStack spacing={4} align="start">
            <Heading as="h1" fontSize="5xl">
              Provinsi
            </Heading>
            <Text w="80%">
              Informasi seputar kontak fasilitas kesehatan di seluruh provinsi di Indonesia yang dikumpulkan relawan
              melalui pencarian di internet atau media sosial.
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </PageContent>
  )
}

export default Jumbotron
