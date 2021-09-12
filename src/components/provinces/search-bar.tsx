import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'

import Container from '@components/layout/container'

const SearchBar = () => {
  return (
    <Container mt={10}>
      <Flex align="center" justify="center">
        <FormControl id="provinces" w={['full', '50%']}>
          <FormLabel>Pencarian</FormLabel>
          <Input placeholder="Cari provinsi" />
        </FormControl>
      </Flex>
    </Container>
  )
}

export default SearchBar
