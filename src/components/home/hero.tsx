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
import Image from 'next/image'

import HeroImage from '@components/assets/hero-image.png'

const Hero = () => {
  return (
    <Flex justify="space-between">
      <Flex w={['full', null, '50%']} align="center">
        <VStack align="start" spacing={10}>
          <Box pos="relative">
            <Heading as="h1" zIndex={40} fontSize="6xl">
              Informasi Faskes & Alkes untuk{' '}
              <chakra.span bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
                COVID-19
              </chakra.span>
            </Heading>
            <Text color="gray.500" fontSize="medium" mt={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni veritatis enim quasi dolor cupiditate
              placeat voluptate? Temporibus numquam ea perferendis?
            </Text>
          </Box>
          <Box w={['full', '75%']}>
            <InputGroup size="md">
              <Input pr="4.5rem" placeholder="Cari berdasarkan provinsi" />
              <InputRightElement w="4rem">
                <Button colorScheme="blue">Cari</Button>
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
