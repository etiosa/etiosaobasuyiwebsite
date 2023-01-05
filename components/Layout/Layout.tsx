import { motion } from "framer-motion";
import Line from "../line/line"
import Navigation from "../Nav/Nav"
import { useRouter } from 'next/router'

function Layout({ children }: any) {
  const router = useRouter()
  return (
    <>
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
