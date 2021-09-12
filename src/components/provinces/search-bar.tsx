import { ChangeEvent } from 'react'
import { Flex, HStack, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

import Container from '@components/layout/container'

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  search: string
  type?: 'province' | 'provinces'
}

const SearchBar = ({ onChange, search, type }: SearchBarProps) => {
  if (type === 'province') {
    return (
      <HStack w="full">
        <FormControl id="province" w="80%">
          <Input placeholder="Cari berdasarkan penyedia, dan keterangan" value={search} onChange={e => onChange(e)} />
        </FormControl>
        <Button colorScheme="blue">Cari</Button>
      </HStack>
    )
  }

  return (
    <Container mt={10}>
      <Flex align="center" justify="center">
        <FormControl id="provinces" w={['full', '50%']}>
          <FormLabel>Pencarian</FormLabel>
          <Input placeholder="Cari provinsi" value={search} onChange={e => onChange(e)} />
        </FormControl>
      </Flex>
    </Container>
  )
}

export default SearchBar
