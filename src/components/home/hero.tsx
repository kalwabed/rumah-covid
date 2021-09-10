import {
  Box,
  HStack,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  chakra
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'

import HeroImage from '@components/assets/hero-image.png'
import PageContent from '@components/layout/page-content'

const Hero = () => {
  return (
    <PageContent>
      <Flex justify="space-between">
        <Flex w={['full', null, '50%']} align="center">
          <VStack align="start" spacing={10}>
            <Box pos="relative">
              <Heading as="h1" zIndex={40} fontSize="6xl" fontWeight="extrabold">
                Sumber Informasi Faskes untuk{' '}
                <chakra.span bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
                  COVID-19
                </chakra.span>
              </Heading>
              <Text color="gray.500" fontSize="medium" mt={2}>
                Kami membantu anda dalam mencari rumah sakit rujukan untuk perawatan, dan tempat isolasi mandiri pilihan
                di kota anda.
              </Text>
            </Box>
            <HStack spacing={4}>
              <Button colorScheme="purple" size="lg">
                Telusuri sekarang
              </Button>
            </HStack>
          </VStack>
        </Flex>
        <Box zIndex={20} display={['none', null, 'inline-block']}>
          <Image src={HeroImage} alt="Hero image" placeholder="blur" />
        </Box>
      </Flex>
    </PageContent>
  )
}

export default Hero
