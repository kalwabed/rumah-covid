import {
  Drawer,
  VStack,
  Heading,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Button,
  Text
} from '@chakra-ui/react'
import { useAtom } from 'jotai'

import Logo from '@components/layout/logo'
import PageBreadcrumb from '@components/shared/page-breadcrumb'
import { provinceState } from 'src/store'
import ItemDetail from './item-detail'
import { HiExclamation } from 'react-icons/hi'

interface ItemDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const ItemDrawer: React.FC<ItemDrawerProps> = ({ isOpen, onClose }) => {
  const [province] = useAtom(provinceState)
  const size = useBreakpointValue({ base: 'full', md: 'xl' })

  return (
    <>
      <Drawer size={size} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <PageBreadcrumb
              navs={[
                { title: 'Provinsi', url: '/provinces' },
                { title: province.title, url: province.url },
                { title: 'RSUD Percontohan' }
              ]}
            />
            <VStack align="start" my={4}>
              <Heading>RSUD Percontohan</Heading>
              <Text fontSize="sm" mt={4}>
                Informasi RSUD Percontohan - Rumah sakit rujukan covid-19 di Surabaya, Jawa Timur yang dikumpulkan
                relawan melalui pencarian di internet atau media sosial.
              </Text>
            </VStack>
            <ItemDetail />

            <Button size="sm" variant="outline" colorScheme="red" leftIcon={<HiExclamation />}>
              Laporkan kesalahan
            </Button>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose}>Tutup</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ItemDrawer
