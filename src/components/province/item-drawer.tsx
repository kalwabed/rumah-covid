import {
  Drawer,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import { useAtom } from 'jotai'

import Logo from '@components/layout/logo'
import PageBreadcrumb from '@components/shared/page-breadcrumb'
import { provinceState } from 'src/store'

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
            <PageBreadcrumb navs={[{ title: 'Provinsi', url: '/provinces' }, { title: province.title }]} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus exercitationem laboriosam nesciunt
            eum adipisci quasi temporibus voluptatem architecto. Eius?
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ItemDrawer
