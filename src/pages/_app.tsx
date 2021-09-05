import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import LayoutRoot from '@components/layout/layout-root'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;
          500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </ChakraProvider>
  )
}

export default MyApp
