import { LinkBox, VStack, HStack, Avatar, Text, LinkOverlay, Button } from '@chakra-ui/react'
import Link from 'next/link'

interface NewsCardProps {
  news: { title: string; authorName: string; description: string; date: string }
  index: number
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  const { authorName, date, description, title } = news

  return (
    <LinkBox key={title} bgImage={`url('/news-${index + 1}-bg.jpg')`} bgPos="top" p={[4, 8]} rounded="md" shadow="md">
      <VStack
        align="start"
        flexDir="column"
        w="full"
        h="full"
        p={8}
        spacing={4}
        bgColor="gray.900"
        color="white"
        rounded="md"
        shadow="lg"
      >
        <HStack align="center" justify="start">
          <Avatar size="sm" name={authorName} src={`https://randomuser.me/api/portraits/men/${index + 18}.jpg`} />
          <Text fontWeight="medium" fontSize={['sm', 'md']}>
            {authorName}
          </Text>
        </HStack>
        <Link href="#" passHref>
          <LinkOverlay fontSize={['xl', '2xl']} fontWeight="bold">
            {title}
          </LinkOverlay>
        </Link>
        <Text fontSize="sm">{description.slice(0, 128) + ' ...'}</Text>
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
      </VStack>
    </LinkBox>
  )
}

export default NewsCard
