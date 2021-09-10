import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Footer from './footer'

import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" minH="full" pos="relative" overflow="hidden">
      <TopNavigation />
      <Box position="absolute" top={[-320, -100]} right={[-300, -180]}>
        <Image src="/hero-blob.svg" width={500} height={500} alt="Hero blob" />
      </Box>
      <Box position="absolute" display={['none', null, 'inline-block']} top={-100} left={-245}>
        <Image src="/logo-blob.svg" width={500} height={500} alt="Hero blob" />
      </Box>
      <Box as="main" flex="1 1 auto">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default LayoutRoot
