import { Box, Flex, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface ContactCardProps {
  provider: string
  description: string
  image: StaticImageData
}

const ContactCard = (props: ContactCardProps) => {
  const { description, image, provider } = props

  return (
    <Flex
      flexDir="column"
      maxW="md"
      border="1px solid"
      borderColor="gray.100"
      rounded="md"
      shadow="md"
      fontSize={['sm', 'md']}
    >
      <Flex p={4} justify="center">
        <Image src={image} alt={provider} placeholder="blur" width={300} height={150} objectFit="scale-down" />
      </Flex>
      <Box flex="1 1 0%" p={4} h={0}>
        <Text mb={2} color="gray.500">
          {provider}
        </Text>
        <Text fontWeight="medium">{description}</Text>
      </Box>
      <Box p={4} w="full" justifyContent="center">
        <Button size="sm" mt="auto" isFullWidth colorScheme="purple">
          Cek sekarang
        </Button>
      </Box>
    </Flex>
  )
}

export default ContactCard
