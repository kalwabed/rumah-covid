import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Flex, HStack, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '@components/assets/logo.png'

const navs = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/contribution',
    label: 'Kontribusi'
  },
  {
    href: '/donation',
    label: 'Donasi'
  },
  {
    href: '/education',
    label: 'Edukasi'
  },
  {
    href: '/about',
    label: 'Tentang'
  }
]

const NavLink = ({ href, label }) => (
  <Link href={href} passHref>
    <ChakraLink p={4} _hover={{ bgColor: 'blue.100' }}>
      {label}
    </ChakraLink>
  </Link>
)

const TopNavigation = () => {
  return (
    <Box w="full">
      <Flex maxW={['2xl', '6xl', '8xl']} w="full" mx="auto" justify="space-between" align="center">
        <Link href="/">
          <a>
            <HStack align="center">
              <Image src={Logo} width={45} height={45} placeholder="blur" />
              <Text fontWeight="bold" fontFamily="logo" fontSize="2xl">
                CovadCovid
              </Text>
            </HStack>
          </a>
        </Link>
        <HStack align="center" h="full" spacing={2}>
          {navs.map(nav => (
            <NavLink {...nav} />
          ))}
        </HStack>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline">
          Kontak Darurat
        </Button>
      </Flex>
    </Box>
  )
}

export default TopNavigation
