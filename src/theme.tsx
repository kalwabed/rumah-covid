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

const scrollbarStyles = {
  html: {
    '--scrollbarBg': '#CFD8DC',
    '--thumbBg': '#90A4AE'
  },
  'body::-webkit-scrollbar': {
    width: '14px'
  },
  body: {
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--thumbBg) var(--scrollbarBg)'
  },
  'body::-webkit-scrollbar-track': {
    background: 'var(--scrollbarBg)'
  },
  'body::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--thumbBg)',
    borderRadius: '6px',
    border: '3px solid var(--scrollbarBg)'
  },
  'body::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#818b94'
  }
}

const theme = extendTheme({
  fonts,
  breakpoints,
  styles: { global: scrollbarStyles }
})

export default theme
