import { Heading, HStack, Text, VStack } from '@chakra-ui/react'

const SectionTitle: React.FC = ({ children }) => {
  return (
    <VStack align="center" spacing={4} mb={12}>
      <Heading>{children}</Heading>
      <Text color="gray.500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </VStack>
  )
}

export default SectionTitle
