import { Heading, TextProps, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SectionTitle: React.FC<TextProps> = ({ children, ...textProps }) => {
  return (
    <VStack align="center" spacing={4} mb={12}>
      <Heading>{children}</Heading>
      <Text color="gray.500" {...textProps}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </VStack>
  )
}

export default SectionTitle
