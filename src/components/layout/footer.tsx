import { Box, Flex, SimpleGrid, Icon, HStack, Grid, GridItem, Text, VStack, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi'
import { AiOutlinePhone } from 'react-icons/ai'

import Logo from './logo'
import { navs } from './top-navigation'

const Footer = () => {
  return (
    <Box as="footer" pos="relative" w="full" mt={40} py={20} borderTop="1px solid" borderColor="gray.100">
      <Box maxW={{ sm: 'full', xl: '6xl', '2xl': '8xl' }} w="full" mx="auto" px={4}>
        <Grid templateRows={['repeat(1,1fr)', 'none']} templateColumns={['none', 'repeat(3,1fr)']} rowGap={10}>
          <GridItem colSpan={2} rowSpan={1}>
            <Flex flexDir="column" align="start">
              <Logo />
              <Text color="gray.500" mt={1} mb={4}>
                Sumber Informasi Faskes untuk Covid-19.
              </Text>

              <Text color="gray.500">&copy; 2021-present Rumah Covid </Text>
            </Flex>
          </GridItem>

          <GridItem colSpan={1} rowSpan={1}>
            <SimpleGrid columns={[1, 2]} align="start" gap={[5, 0]}>
              <VStack align="start" w="full">
                <Text fontWeight="semibold">Navigasi</Text>
                {navs.map(nav => (
                  <Link key={nav.href} href={nav.href} passHref>
                    <ChakraLink color="gray.500">{nav.label}</ChakraLink>
                  </Link>
                ))}
              </VStack>

              <VStack align="start">
                <Text fontWeight="semibold">Kontak kami</Text>
                <HStack display="inline-flex" color="gray.500">
                  <Icon as={FiMail} boxSize={5} />
                  <ChakraLink isExternal href="mailto:example@mail.com">
                    halo@rumahcovid.com
                  </ChakraLink>
                </HStack>
                <HStack display="inline-flex" color="gray.500">
                  <Icon as={AiOutlinePhone} boxSize={5} />
                  <ChakraLink isExternal href="tel:0333-212-2113">
                    0333-212-2113
                  </ChakraLink>
                </HStack>
                <HStack spacing={4} color="gray.500">
                  <ChakraLink href="#" _hover={{ color: 'blue.500' }}>
                    <Icon as={FiTwitter} boxSize={5} />
                  </ChakraLink>
                  <ChakraLink href="#" _hover={{ color: 'blue.500' }}>
                    <Icon as={FiInstagram} boxSize={5} />
                  </ChakraLink>
                  <ChakraLink href="#" _hover={{ color: 'blue.500' }}>
                    <Icon as={FiFacebook} boxSize={5} />
                  </ChakraLink>
                </HStack>
              </VStack>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
