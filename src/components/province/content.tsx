import { Stack } from '@chakra-ui/react'

import Container from '@components/layout/container'
import ControlBar from './control-bar'
import SiteItems from './site-items'

const ProvinceContent = () => {
  return (
    <Container h="full" mt={6}>
      <Stack align="start" direction={['column', 'row']} spacing={[0, 20]}>
        <ControlBar />
        <SiteItems />
      </Stack>
    </Container>
  )
}

export default ProvinceContent
