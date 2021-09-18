import { useMemo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import Head from 'next/head'

import { MobileControlBarButton } from '@components/province/control-bar'
import { pathState } from 'src/store'

const Page: React.FC<BoxProps | { title: string }> = ({ children, title, ...props }) => {
  const [path] = useAtom(pathState)

  const isProvincePage = useMemo(() => path.split('/')[2], [path])

  return (
    <Box pos="relative" {...props}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      {isProvincePage && <MobileControlBarButton />}
    </Box>
  )
}

export default Page
