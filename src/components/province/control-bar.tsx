import {
  Box,
  IconButton,
  FormControl,
  Button,
  RadioGroup,
  Text,
  Radio,
  Select,
  HStack,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  FormLabel,
  useDisclosure,
  Switch
} from '@chakra-ui/react'
import { FiTrash } from 'react-icons/fi'
import { HiFilter } from 'react-icons/hi'

import { encodeSlug } from 'src/utils/slug-converter'

const categories = ['Semua', 'Rumah sakit', 'Isoman']
const cities = [
  'Banyuwangi',
  'Genteng',
  'Batu',
  'Jember',
  'Blitar',
  'Bondowoso',
  'Situbondo',
  'Jombang',
  'Malang',
  'Bangkalan',
  'Mojokerto',
  'Magetan'
]

const ControlBar = () => {
  return (
    <Box
      as="aside"
      display={['none', 'block']}
      h="full"
      minW="316px"
      border="1px solid"
      borderColor="gray.300"
      rounded="sm"
      shadow="sm"
    >
      <HStack py={2} px={4} justify="space-between" borderBottom="2px solid" borderBottomColor="gray.300" mb={4}>
        <Text fontWeight="semibold">Filter pencarian</Text>
        <Button leftIcon={<FiTrash />} variant="ghost" colorScheme="blue" size="sm">
          Reset
        </Button>
      </HStack>

      <FormControl px={4}>
        <FormLabel>Tampilkan berdasarkan</FormLabel>
        <RadioGroup defaultValue="1">
          <HStack spacing={4}>
            <Radio value="1">Paling Relevan</Radio>
            <Radio value="2">Paling baru</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <FormControl id="cities" px={4} mt={4}>
        <FormLabel>Lokasi</FormLabel>
        <Select defaultValue="semua">
          <option value="semua">Semua</option>
          {cities.map(city => (
            <option key={city} value={encodeSlug(city)}>
              {city}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl id="categories" px={4} mt={4}>
        <FormLabel>Kategori</FormLabel>
        <Select defaultValue="semua">
          {categories.map(cat => (
            <option key={cat} value={encodeSlug(cat)}>
              {cat}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl display="flex" alignItems="center" px={4} my={4}>
        <FormLabel htmlFor="verification" mb="0">
          Terverifikasi
        </FormLabel>
        <Switch id="verification" />
      </FormControl>
    </Box>
  )
}

export const MobileControlBarButton = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal onClose={onClose} size="full" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" alignItems="center">
            <Button leftIcon={<FiTrash />} variant="ghost" colorScheme="blue" size="xs">
              Reset
            </Button>
            <Text ml={10}>Filter pencarian</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Tampilkan berdasarkan</FormLabel>
              <RadioGroup defaultValue="1">
                <HStack spacing={4}>
                  <Radio value="1">Paling Relevan</Radio>
                  <Radio value="2">Paling baru</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl id="cities" mt={4}>
              <FormLabel>Lokasi</FormLabel>
              <Select defaultValue="semua">
                <option value="semua">Semua</option>
                {cities.map(city => (
                  <option key={city} value={encodeSlug(city)}>
                    {city}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl id="categories" mt={4}>
              <FormLabel>Kategori</FormLabel>
              <Select defaultValue="semua">
                {categories.map(cat => (
                  <option key={cat} value={encodeSlug(cat)}>
                    {cat}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl display="flex" alignItems="center" my={4}>
              <FormLabel htmlFor="verification" mb="0">
                Terverifikasi
              </FormLabel>
              <Switch id="verification" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Tutup</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box p={4} pos="fixed" bottom={0} right={0}>
        <IconButton
          aria-label="Filter provinces"
          display={['inline-flex', 'none']}
          size="lg"
          colorScheme="purple"
          icon={<HiFilter />}
          onClick={onOpen}
        />
      </Box>
    </>
  )
}

export default ControlBar
