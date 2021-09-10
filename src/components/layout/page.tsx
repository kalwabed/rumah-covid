import { Box, BoxProps } from '@chakra-ui/react'

const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box pos="relative" {...props}>
      {children}
    </Box>
  )
}

export default Page
