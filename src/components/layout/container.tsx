import { Box, BoxProps } from '@chakra-ui/react'

interface PageContentProps extends BoxProps {
  isFullWidth?: boolean
}

const Container: React.FC<PageContentProps> = ({ isFullWidth, ...props }) => {
  return (
    <Box
      pos="relative"
      as="section"
      maxW={isFullWidth ? 'full' : { sm: 'full', xl: '6xl', '2xl': '8xl' }}
      px={4}
      mx="auto"
      w="full"
      {...props}
    >
      {props.children}
    </Box>
  )
}

export default Container
