import { ChangeEvent } from 'react'
import { HStack, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

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
      <FormControl id="provinces" w={['full', '50%']}>
        <FormLabel>Cari provinsi</FormLabel>
        <Input placeholder="" value={search} onChange={e => onChange(e)} />
      </FormControl>
    </Container>
  )
}

export default SearchBar
