import { useEffect, useMemo, useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'

import Logo from './logo'
import MobileNavigation from './mobile-navigation'
import { pathState } from 'src/store'

export const navs = [
  {
    href: '/',
    label: 'Beranda'
  },
  {
    href: '/provinces?kebutuhan=rumah%20sakit',
    label: 'Rumah sakit'
  },
  {
    href: '/provinces?kebutuhan=isoman',
    label: 'Isoman'
  }
]

const NavLink = ({ href, label, colorScheme }) => (
  <Link href={href} passHref>
    <a>
      <Button variant="ghost" fontWeight="medium" colorScheme={colorScheme}>
        {label}
      </Button>
    </a>
  </Link>
)

const TopNavigation = () => {
  const [isHeightOffset, setIsHeightOffset] = useState(false)
  const { asPath } = useRouter()
  const [, setPath] = useAtom(pathState)

  const isHomePage = useMemo(() => {
    setPath(asPath)
    return asPath.replace('#kontak-darurat', '') === '/'
  }, [asPath])

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsHeightOffset(true)
      } else {
        setIsHeightOffset(false)
      }
    })
    return document.removeEventListener('scroll', () => {
      return null
    })
  }, [])

  return (
    <Box
      w="full"
      as="header"
      pos="fixed"
      top={0}
      bgColor={isHeightOffset ? 'white' : isHomePage ? 'transparent' : 'gray.800'}
      zIndex={42}
      shadow={isHeightOffset ? 'md' : 'none'}
      transition="ease-in-out"
      transitionDuration="250ms"
      transitionProperty="background-color"
    >
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
            <Logo isWhite={!isHeightOffset && !isHomePage} />
          </a>
        </Link>
        <HStack align="center" spacing={5} display={['none', null, 'flex']}>
          {navs.map(nav => (
            <NavLink
              key={nav.href}
              colorScheme={isHeightOffset && isHomePage ? 'gray' : !isHeightOffset && !isHomePage && 'whiteAlpha'}
              href={nav.href}
              label={nav.label}
            />
          ))}
        </HStack>
        <Link href="/#kontak-darurat">
          <a>
            <Button zIndex={20} display={['none', null, 'inline-flex']} rightIcon={<ArrowForwardIcon />}>
              Kontak Darurat
            </Button>
          </a>
        </Link>

        <MobileNavigation isWhite={!isHeightOffset && !isHomePage} />
      </Flex>
    </Box>
  )
}

export default TopNavigation
