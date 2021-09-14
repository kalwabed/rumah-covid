import { useDisclosure } from '@chakra-ui/hooks'

export default function useItemDrawer() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return { isOpen, onClose, onOpen }
}
