import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  ...ChakraTheme.fonts,
  body: 'Inter, sans-serif',
  get heading() {
    return this.body
  },
  logo: 'Averia Serif Libre, cursive'
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const theme = extendTheme({
  fonts,
  breakpoints
})

export default theme
