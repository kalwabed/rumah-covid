import { Heading, Text, VStack } from '@chakra-ui/react'

const SectionHeader: React.FC<{ id?: string; description: string }> = ({ children, description, id }) => {
  return (
    <VStack align="start" spacing={4} mb={12}>
      <Heading id={id} fontSize="6xl" fontWeight="bold">
        {children}
      </Heading>
      <Text color="gray.500">{description}</Text>
    </VStack>
  )
}

export default SectionHeader
