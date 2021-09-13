import { Text, Icon } from '@chakra-ui/react'
import { HiBadgeCheck, HiOutlineBadgeCheck } from 'react-icons/hi'

const VerificationCheck = ({ verified = '' }) => {
  if (verified) {
    return (
      <>
        <Text fontSize="xs" color="gray.500">
          {verified}
        </Text>
        <Icon as={HiBadgeCheck} color="green.400" boxSize={5} />
      </>
    )
  }

  return (
    <>
      <Text fontSize="xs" color="gray.500">
        Belum terverifikasi
      </Text>
      <Icon as={HiOutlineBadgeCheck} color="gray.400" boxSize={5} />
    </>
  )
}

export default VerificationCheck
