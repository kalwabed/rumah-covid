import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'

import Logo from './logo'
import { navs } from './top-navigation'

const MobileNavigation = ({ isWhite = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        zIndex={20}
        display={['flex', null, 'none']}
        variant="ghost"
        aria-label="open menu"
        color={isWhite ? 'white' : 'inherit'}
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer size="full" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />{' '}
          </DrawerHeader>
          <DrawerBody>
            <VStack fontSize="xl" align="start" spacing={8}>
              {navs.map(nav => (
                <Link key={nav.href} href={nav.href}>
                  <a>{nav.label}</a>
                </Link>
              ))}
              <Button variant="outline" rightIcon={<ArrowForwardIcon />}>
                Kontak Darurat
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileNavigation
