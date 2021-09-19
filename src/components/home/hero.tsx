import { Box, HStack, Button, Flex, Heading, Text, VStack, chakra, Image } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

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
              <Link href="/provinces">
                <a>
                  <Button colorScheme="purple" size="lg" rightIcon={<ArrowRightIcon />}>
                    Telusuri sekarang
                  </Button>
                </a>
              </Link>
            </HStack>
          </VStack>
        </Flex>
        <Box zIndex={20} display={['none', null, 'inline-block']}>
          <Image src="/assets/hero-image.png" alt="Hero image" htmlHeight={580} htmlWidth={580} />
        </Box>
      </Flex>
    </Container>
  )
}

export default Hero
