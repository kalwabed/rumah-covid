import { Box, BoxProps, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import Footer from './footer'
import TopNavigation from './top-navigation'

const MotionBox = motion<BoxProps>(Box)
const animateVariants = {
  initial: { opacity: 0, y: -10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
}

const LayoutRoot: React.FC = ({ children }) => {
  const { asPath } = useRouter()

  return (
    <Flex flexDir="column" minH="full" pos="relative" overflow="hidden">
      <TopNavigation />
      <AnimatePresence exitBeforeEnter>
        <MotionBox
          key={asPath}
          as="main"
          flex="1 1 auto"
          mt={20}
          animate="enter"
          exit="exit"
          initial="initial"
          variants={animateVariants}
        >
          {children}
        </MotionBox>
      </AnimatePresence>
      <Footer />
    </Flex>
  )
}

export default LayoutRoot
