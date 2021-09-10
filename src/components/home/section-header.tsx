import { Heading, TextProps, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SectionHeader: React.FC<TextProps & { description: string }> = ({ children, description, ...textProps }) => {
  return (
    <VStack align="start" spacing={4} mb={12}>
      <Heading fontSize="6xl" fontWeight="bold">
        {children}
      </Heading>
      <Text color="gray.500" {...textProps}>
        {description}
      </Text>
    </VStack>
  )
}

export default SectionHeader
