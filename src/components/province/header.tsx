import { useState } from 'react'
import { HStack, Text } from '@chakra-ui/react'

import SearchBar from '@components/provinces/search-bar'
import Container from '@components/layout/container'

const ProvinceHeader = () => {
  const [search, setSearch] = useState('')

  return (
    <Container mt={8}>
      <HStack w="full" spacing={8}>
        <Text fontWeight="bold" fontSize="2xl" minW="360px" borderRight="1px solid #E2E8F0">
          Menemukan 50 rumah sakit
        </Text>
        <SearchBar search={search} onChange={e => setSearch(e.target.value)} type="province" />
      </HStack>
    </Container>
  )
}

export default ProvinceHeader
