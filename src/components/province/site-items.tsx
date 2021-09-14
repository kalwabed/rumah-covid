import { SimpleGrid, useDisclosure, Stack, Badge, HStack, Icon, Link as ChakraLink, Text, Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { MouseEvent } from 'react'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'

import { itemsState } from 'src/store'
import ItemDrawer from './item-drawer'
import VerificationCheck from './verification-check'

const SiteItems = () => {
  const [items] = useAtom(itemsState)
  const { onOpen, isOpen, onClose } = useDisclosure()

  const handleOnClickSite = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onOpen()
  }

  return (
    <>
      <ItemDrawer isOpen={isOpen} onClose={onClose} />
      <SimpleGrid columns={[1]} w="full" gap={5}>
        {items.map((item, i) => (
          <Box
            key={item.provider + i}
            px={[4, 6]}
            py={4}
            border="1px solid"
            w={['full', '80%']}
            borderColor="gray.200"
            rounded="md"
            _hover={{ shadow: 'md' }}
          >
            <HStack align="center" justify="space-between" mb={1}>
              <ChakraLink
                onClick={e => handleOnClickSite(e)}
                href={`/provinces/${encodeURI(item.provider).concat('-', encodeURI(item.description))}`}
                color="blue.500"
                fontSize={['sm', 'lg']}
                fontWeight="bold"
                isTruncated
              >
                {item.provider}
              </ChakraLink>
              <HStack>
                {item.status && (
                  <Badge fontSize={['x-small', 'xs']} colorScheme={item.status === 'Tersedia' ? 'green' : 'red'}>
                    {item.status}
                  </Badge>
                )}
                <Badge fontSize={['x-small', 'xs']} colorScheme="orange">
                  {item.category}
                </Badge>
              </HStack>
            </HStack>
            <Stack direction={['column', 'row']} justify="space-between">
              <Text fontSize="sm" fontWeight="medium">
                {item.description}
              </Text>
              <HStack>
                <VerificationCheck verified={item.verified} />
              </HStack>
            </Stack>

            <HStack my={2}>
              <Icon as={HiPhone} />{' '}
              <ChakraLink href={`tel:${+item.phone}`} color="blue.600">
                {item.phone}
              </ChakraLink>
            </HStack>
            <HStack align="start">
              <Icon as={HiLocationMarker} /> <Text fontSize="sm">{item.address}</Text>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}

export default SiteItems
