import { chakra, Heading, HStack } from '@chakra-ui/react'

const SectionTitle: React.FC = ({ children }) => {
  return (
    <HStack align="center" spacing={5} mb={6}>
      <chakra.span w="full" h="1px" bgColor="gray.200" />
      <Heading>{children}</Heading>
      <chakra.span w="full" h="1px" bgColor="gray.200" />
    </HStack>
  )
}

export default SectionTitle
