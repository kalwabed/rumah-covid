import { Box, Flex, Heading, VStack, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'

import TeleImg from '@components/assets/telemedicine.png'
import Container from '@components/layout/container'

const Telemedicine = () => {
  return (
    <Container mt={40}>
      <Flex
        pos="relative"
        align="center"
        justify="space-between"
        bgColor="blue.500"
        bgGradient="linear(to-l, blue.500, blue.300)"
        p={10}
        rounded="md"
        shadow="sm"
      >
        <Box pos="absolute" display={['none', 'block']} bottom={-1.5} left={0}>
          <Image src={TeleImg} width={220} height={300} alt="Telemedicine illustration" placeholder="blur" />
        </Box>
        <VStack w={['full', '50%']} align={['start', null, 'center']} mx="auto" color="white" spacing={5}>
          <Heading as="h3" fontSize="5xl">
            Telemedicine GRATIS
          </Heading>
          <Text>Konsultasi medis khusus pasien COVID-19 yang sedang isolasi mandiri (isoman)</Text>
          <Button colorScheme="green">Cek sekarang</Button>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Telemedicine
