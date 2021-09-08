import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from './logo'

import MobileNavigation from './mobile-navigation'

export const navs = [
  {
    href: '/',
    label: 'Beranda'
  },
  {
    type: 'service',
    label: 'Pelayanan',
    menu: [
      {
        href: '/hospital',
        label: 'Rumah sakit'
      },
      {
        href: '/ambulans',
        label: 'Ambulans'
      },
      {
        href: '/oxygen',
        label: 'Info oksigen'
      }
    ]
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
    <a>
      <Button variant="ghost">{label}</Button>
    </a>
  </Link>
)

const MenuNavLink = ({ href, label }) => (
  <MenuItem>
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </MenuItem>
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
        <HStack align="center" spacing={2} display={['none', null, 'flex']}>
          {navs.map(nav =>
            nav.type === 'service' ? (
              <Menu key={nav.href} isLazy closeOnBlur closeOnSelect>
                <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                  {nav.label}
                </MenuButton>
                <MenuList>
                  {nav.menu.map(item => (
                    <MenuNavLink key={item.href} {...item} />
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <NavLink key={nav.href} href={nav.href} label={nav.label} />
            )
          )}
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
