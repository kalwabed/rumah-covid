import {
  Box,
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

const Hero = () => {
  return (
    <Flex justify="space-between">
      <Flex w={['full', null, '50%']} align="center">
        <VStack align="start" spacing={10}>
          <Box pos="relative">
            <Heading as="h1" zIndex={40} fontSize="6xl" fontWeight="extrabold">
              Informasi Faskes untuk{' '}
              <chakra.span bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
                COVID-19
              </chakra.span>
            </Heading>
            <Text color="gray.500" fontSize="medium" mt={2}>
              Kami membantu anda dalam mencari rumah sakit rujukan untuk perawatan, dan tempat isolasi mandiri pilihan
              di kota anda.
            </Text>
          </Box>
          <Box w={['full', '75%']}>
            <InputGroup size="md">
              <Input size="lg" pr="5rem" placeholder="Cari berdasarkan provinsi" />
              <InputRightElement w="6rem" h="full">
                <Button leftIcon={<SearchIcon />} size="md" colorScheme="blue">
                  Cari
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </VStack>
      </Flex>
      <Box zIndex={20} display={['none', null, 'inline-block']}>
        <Image src={HeroImage} alt="Hero image" placeholder="blur" />
      </Box>
    </Flex>
  )
}

export default Hero
