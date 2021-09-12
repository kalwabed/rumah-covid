import { HStack } from '@chakra-ui/react'

import Container from '@components/layout/container'
import ControlBar from './control-bar'

const ProvinceContent = () => {
  return (
    <Container h="full" mt={6}>
      <HStack>
        <ControlBar />
      </HStack>
    </Container>
  )
}

export default ProvinceContent
