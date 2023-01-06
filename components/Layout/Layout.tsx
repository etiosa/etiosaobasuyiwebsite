import { motion } from "framer-motion";
import Line from "../line/line"
import Navigation from "../Nav/Nav"
import { useRouter } from 'next/router'
import Head from "next/head";

function Layout({ children }: any) {
  const router = useRouter()
  return (
    <>
    <Head>
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='android-chrome' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
          <link rel='android-chrome' type='image/png' sizes='512x512' href='/android-chrome-192x192.png' />

    </Head>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 2.1,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "circle(0.2% at 0 0)",
          },
          animateState: {
            opacity: 1,
            clipPath: "circle(200% at 0 0)",
          },
          exitState: { opacity: 1, },
        }}>
          {router.pathname ==="/work/[pid]"?null: <Navigation />}
       
        <Line />
        <main>
          {children}
        </main>
      </motion.div>
    </>



  )
}

export default Layout
