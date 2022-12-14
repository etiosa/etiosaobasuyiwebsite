import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import {AnimatePresence, motion} from "framer-motion"
import { useState, useEffect} from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const container = {
    initial: {
      opacity: 0,
      clipPath: `circle(1.1% at 49% 100%)`,
      transition: {
        duration: 2,
        staggerChildren: 0.05
      }
    },
    animate: {
      opacity: 1,
      clipPath: `circle(2000% at 49% 100%)`,
      transition: {
        duration: 2,
        staggerChildren: 0.05
      }

    },
    exit: {
      opacity: 0,
      clipPath: `circle(1.1% at 49% 100%)`,
      transition: {
        duration: 1,
        staggerChildren: 0.05
      }
    },

  };

  
  return( 
    <AnimatePresence mode="wait">
  <Layout>
    <motion.div 
    style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)", height: '100vh' }}
    key={router.route}
    variants={container}
    initial="initial:"
    animate="animate"
    exit="exit"
    
    >
  <Component {...pageProps} />
  </motion.div>
   </Layout>
  
  </AnimatePresence>
  )
}

