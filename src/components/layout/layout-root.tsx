import { Box, Flex } from '@chakra-ui/react'

import TopNavigation from './top-navigation'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" minH="full">
      <TopNavigation />
      <Box as="main" flex="1 1 auto">
        {children}
      </Box>
    </Flex>
  )
}

export default LayoutRoot
