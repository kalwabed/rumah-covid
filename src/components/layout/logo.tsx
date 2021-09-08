import { Box, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

import LogoImg from '@components/assets/logo.png'

const Logo = () => {
  return (
    <HStack align="center">
      <Box zIndex={40}>
        <Image src={LogoImg} width={45} height={45} placeholder="blur" alt="Logo" />
      </Box>
      <Text zIndex={40} fontWeight="bold" fontFamily="logo" fontSize="2xl">
        RumahCovid
      </Text>
    </HStack>
  )
}

export default Logo
