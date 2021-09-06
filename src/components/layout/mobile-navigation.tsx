import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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
        zIndex={20}
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
            <VStack align="start" spacing={7}>
              {navs.map(nav =>
                nav.type === 'service' ? (
                  nav.menu.map(menu => (
                    <Link key={menu.href} href={menu.href}>
                      <a>{menu.label}</a>
                    </Link>
                  ))
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
