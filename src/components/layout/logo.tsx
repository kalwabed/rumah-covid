import { Box, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

import BlackLogo from '@components/assets/black-logo.png'
import WhiteLogo from '@components/assets/white-logo.png'

const Logo = ({ isWhite = false }) => {
  return (
    <HStack align="center">
      <Box zIndex={40}>
        <Image src={isWhite ? WhiteLogo : BlackLogo} width={45} height={45} placeholder="blur" alt="Logo" />
      </Box>
      <Text zIndex={40} fontWeight="bold" fontFamily="logo" fontSize="2xl" color={isWhite ? 'white' : 'black'}>
        RumahCovid
      </Text>
    </HStack>
  )
}

export default Logo
