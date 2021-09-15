import { Box, Icon, Text, VStack, HStack } from '@chakra-ui/react'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const EmptyState = () => {
  return (
    <Box w={['full', '50%']} mx="auto" rounded="md" p={4}>
      <VStack>
        <Icon as={HiOutlineInformationCircle} boxSize={10} color="gray.500" />
        <Text fontWeight="semibold">Provinsi tidak ditemukan</Text>
        <Text color="gray.500">Silakan gunakan kata kunci pencarian lainnya.</Text>
      </VStack>
    </Box>
  )
}

export default EmptyState
