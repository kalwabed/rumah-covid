import { useState } from 'react'
import { HStack, Text } from '@chakra-ui/react'
import { useAtom } from 'jotai'

import SearchBar from '@components/provinces/search-bar'
import Container from '@components/layout/container'
import { provinceState } from 'src/store'

const ProvinceHeader = () => {
  const [province] = useAtom(provinceState)
  const [search, setSearch] = useState('')

  return (
    <Container mt={8}>
      <HStack w="full" spacing={8}>
        <Text fontWeight="bold" fontSize={['sm', 'md']} minW="360px" borderRight={['none', '1px solid #E2E8F0']}>
          Menemukan 50 rumah sakit di {province.title}
        </Text>
        <SearchBar search={search} onChange={e => setSearch(e.target.value)} type="province" />
      </HStack>
    </Container>
  )
}

export default ProvinceHeader
