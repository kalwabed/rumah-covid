import { Box, BoxProps } from '@chakra-ui/react'

const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box pos="relative" maxW={{ sm: 'full', xl: '6xl', '2xl': '8xl' }} w="full" px={4} mx="auto" {...props}>
      {children}
    </Box>
  )
}

export default Page
