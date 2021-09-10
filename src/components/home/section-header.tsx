import { Heading, TextProps, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SectionHeader: React.FC<TextProps> = ({ children, ...textProps }) => {
  return (
    <VStack align="start" spacing={4} mb={12}>
      <Heading fontSize="6xl" fontWeight="bold">
        {children}
      </Heading>
      <Text color="gray.500" {...textProps}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </VStack>
  )
}

export default SectionHeader
