import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from './logo'

import MobileNavigation from './mobile-navigation'

export const navs = [
  {
    href: '/',
    label: 'Beranda'
  },
  {
    href: '/hospital',
    label: 'Rumah sakit'
  },
  {
    href: '/isoman',
    label: 'Isoman'
  }
]

const NavLink = ({ href, label }) => (
  <Link href={href} passHref>
    <a>
      <Button variant="ghost" fontWeight="medium">
        {label}
      </Button>
    </a>
  </Link>
)

const TopNavigation = () => {
  return (
    <Box w="full">
      <Flex
        maxW={{ sm: 'full', xl: '6xl', '2xl': '8xl' }}
        w="full"
        mx="auto"
        justify="space-between"
        align="center"
        p={4}
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <HStack align="center" spacing={5} display={['none', null, 'flex']}>
          {navs.map(nav => (
            <NavLink key={nav.href} href={nav.href} label={nav.label} />
          ))}
        </HStack>
        <Button zIndex={20} display={['none', null, 'inline-flex']} rightIcon={<ArrowForwardIcon />} colorScheme="gray">
          Kontak Darurat
        </Button>

        <MobileNavigation />
      </Flex>
    </Box>
  )
}

export default TopNavigation
