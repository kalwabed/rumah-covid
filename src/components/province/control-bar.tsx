import { Box, FormControl, Button, RadioGroup, Text, Radio, Select, HStack, FormLabel, Switch } from '@chakra-ui/react'
import { FiTrash } from 'react-icons/fi'

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

export default ControlBar
