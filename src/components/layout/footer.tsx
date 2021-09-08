import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

import Logo from './logo'

const Footer = () => {
  return (
    <Box as="footer" pos="relative" w="full" mt={40} h={400}>
      <Box maxW={{ sm: 'full', xl: '6xl', '2xl': '8xl' }} w="full" mx="auto" py={8}>
        <SimpleGrid columns={[2, 3]} gap={10}>
          <VStack align="start">
            <Logo />
            <Text color="gray.500">Informasi Faskes & Alkes untuk Covid-19</Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Footer
