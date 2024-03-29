import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AnimatePresence mode="sync" >

        <Layout>
          <Component {...pageProps} />
        </Layout>

      </AnimatePresence>
  )
}

