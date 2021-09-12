import { ChangeEvent } from 'react'
import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'

import Container from '@components/layout/container'

interface SearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  search: string
}

const SearchBar = ({ onChange, search }: SearchBarProps) => {
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
