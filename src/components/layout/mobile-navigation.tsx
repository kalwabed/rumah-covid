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

import { navs } from './top-navigation'

const MobileNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={['flex', 'none']}
        variant="outline"
        aria-label="open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu Utama</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={10}>
              {navs.map(nav =>
                nav.type === 'service' ? (
                  ''
                ) : (
                  <Link key={nav.href} href={nav.href}>
                    <a>{nav.label}</a>
                  </Link>
                )
              )}
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
