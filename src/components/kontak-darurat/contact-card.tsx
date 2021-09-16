import { Box, Flex, Button, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface ContactCardProps {
  provider: string
  description: string
  image: StaticImageData
}

const ContactCard = (props: ContactCardProps) => {
  const { description, image, provider } = props

  return (
    <Box maxW="md" bgColor="gray.100" rounded="md" shadow="md">
      <Flex flexDir="column">
        <Box p={4}>
          <Image src={image} alt={provider} height={120} placeholder="blur" />
        </Box>
        <Box flex="1 1 0%" align="start" p={4} h={0}>
          <Text mb={2} color="gray.500" fontWeight="medium">
            {provider}
          </Text>
          <Text>{description}</Text>
        </Box>
        <Box p={4} w="full" justifyContent="center">
          <Button mt="auto" isFullWidth colorScheme="purple">
            Cek sekarang
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default ContactCard
