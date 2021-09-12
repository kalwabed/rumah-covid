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
import { ArrowRightIcon, SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'

import HeroImage from '@components/assets/hero-image.png'
import Container from '@components/layout/container'

const Hero = () => {
  return (
    <Container>
      <Flex justify="space-between">
        <Flex w={['full', null, '50%']} align="center">
          <VStack align={['center', 'start']} spacing={[10]}>
            <Box pos="relative" textAlign={['center', 'start']}>
              <Heading as="h1" zIndex={40} fontSize={['4xl', '6xl']} fontWeight="extrabold">
                Sumber Informasi Faskes untuk{' '}
                <chakra.span bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
                  COVID-19
                </chakra.span>
              </Heading>
              <Text color="gray.600" fontSize="xl" mt={[10, 6]}>
                Kami membantu anda dalam mencari rumah sakit rujukan untuk perawatan, dan tempat isolasi mandiri pilihan
                di kota anda.
              </Text>
            </Box>
            <HStack spacing={4}>
              <Button colorScheme="purple" size="lg" rightIcon={<ArrowRightIcon />}>
                Telusuri sekarang
              </Button>
            </HStack>
          </VStack>
        </Flex>
        <Box zIndex={20} display={['none', null, 'inline-block']}>
          <Image src={HeroImage} alt="Hero image" placeholder="blur" />
        </Box>
      </Flex>
    </Container>
  )
}

export default Hero
