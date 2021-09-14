import { Box, BoxProps } from '@chakra-ui/react'
import { MobileControlBarButton } from '@components/province/control-bar'

const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box pos="relative" {...props}>
      {children}
      <MobileControlBarButton />
    </Box>
  )
}

export default Page
