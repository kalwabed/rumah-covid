import { Box, HStack, Text, Image } from '@chakra-ui/react'

const whiteLogo = '/assets/white-logo.png'
const blackLogo = '/assets/black-logo.png'

const Logo = ({ isWhite = false }) => {
  return (
    <HStack align="center">
      <Box zIndex={40}>
        <Image src={isWhite ? whiteLogo : blackLogo} width={12} height={12} alt="Logo" />
      </Box>
      <Text zIndex={40} fontWeight="bold" fontFamily="logo" fontSize="2xl" color={isWhite ? 'white' : 'black'}>
        RumahCovid
      </Text>
    </HStack>
  )
}

export default Logo
