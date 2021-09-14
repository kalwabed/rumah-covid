import {
  Drawer,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import Logo from '@components/layout/logo'

interface ItemDrawerProps {
  isOpen: boolean
  onClose: () => void
}

// TODO: here
const ItemDrawer: React.FC<ItemDrawerProps> = ({ isOpen, onClose }) => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus exercitationem laboriosam nesciunt
            eum adipisci quasi temporibus voluptatem architecto. Eius?
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ItemDrawer
