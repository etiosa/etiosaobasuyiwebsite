import Link from 'next/link';
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";


function MobileNav() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false)

  const handleMobileMenu = () => {

    setOpen((prev) => {
      if (prev) {
        document.body.style.overflow = "auto"
      }
      else {
        document.body.style.overflow = "hidden"
      }
      return !prev;
    })
  }

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className='relative '>
      <nav className="min-[800px]:hidden w-scren justify-center	flex mb-14 relative">
        <motion.ul style={{ boxShadow: "0px 55px 22px rgba(23, 25, 28, 0.01), 0px 31px 19px rgba(23, 25, 28, 0.05), 0px 14px 14px rgba(23, 25, 28, 0.09), 0px 3px 8px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)" }}
          className=" p-5 min-[700px]:p-10 bg-{#DCE0E6]   text-[#78797A]  font-Poppins h-24 md:h-20 mt-10 relative z-40  w-96  md:w-11/12 flex items-center  justify-between	 ">
          <motion.li>
            <Link href="/" className="flex font-bold text-[#0B1727] text-2xl">
              <div className='mr-1'>
                <span className="text-[#2C7BE5]">E</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>S</span>
                <span>A</span>
              </div>
              <div>
                <span>O</span>
                <span>B</span>
                <span>A</span>
                <span>S</span>
                <span>U</span>
                <span>Y</span>
                <span className="text-[#E63757] relative" >I
                  <div className='absolute -top-2  -left-1 w-3 h-3 bg-[#E63757] rounded-lg'></div>
                </span>
              </div>
            </Link>
          </motion.li>
          <div onClick={handleMobileMenu} className="cursor-pointer">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 150 : 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                duration: 2
              }}
              style={{ boxShadow: ' 0px 14px 6px rgba(23, 25, 28, 0.01), 0px 8px 5px rgba(23, 25, 28, 0.05), 0px 4px 4px rgba(23, 25, 28, 0.09), 0px 1px 2px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)' }}
              className="h-2 w-16 mb-1 relative bg-[#7971EA]"></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? -150 : 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                duration: 2,
              }}
              style={{ boxShadow: " 0px 14px 6px rgba(23, 25, 28, 0.01), 0px 8px 5px rgba(23, 25, 28, 0.05), 0px 4px 4px rgba(23, 25, 28, 0.09), 0px 1px 2px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)" }}
              className="h-2 w-16 bg-[#7971EA]"></motion.div>
          </div>
        </motion.ul>
      </nav>
      <motion.div
        initial={{ opacity: 0, top: "-100rem" }}
        animate={{ opacity: 1, top: isOpen ? '10rem' : "-70rem" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
          duration: 2,
          staggerChildren: 1
        }}
        className='flex min-[800px]:hidden bg-[#EFF1F3]  absolute w-full  h-screen justify-start  z-[900]  flex-col items-center'
        style={{ boxShadow: "0px 55px 22px rgba(23, 25, 28, 0.01), 0px 31px 19px rgba(23, 25, 28, 0.05), 0px 14px 14px rgba(23, 25, 28, 0.09), 0px 3px 8px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)" }}
      >
        <motion.ul className='p-24'>
          <motion.li className={` mb-12 relative p-5 ${router.pathname === "/work" ? "text-active text-lg flex justify-center text-sm" : "text-[#2e435f59]"}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/work" ? "text-[#7971EA]" : "text-[#2e435f59]"}`}>01/</span>
            <Link href="/work" className={router.pathname === "/work" ? "font-bold" : ""} ><span className='text-3xl'>Work</span></Link>
          </motion.li>
          <motion.li className={`mb-12 relative p-5 text-sm ${router.pathname === "/about" ? "text-active text-lg flex justify-center text-sm" : "text-[#2e435f59]"}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/about" ? "text-[#7971EA]" : "text-[#2e435f59]"}`}>02/</span>
            <Link href="/about" className={router.pathname === "/about" ? "font-bold" : ""} ><span className='text-3xl'>About</span></Link>
          </motion.li>
          <motion.li className={` mb-12 relative p-5 text-sm ${router.pathname === "/contact" ? "text-active text-lg flex justify-center text-sm" : "text-[#2e435f59]"}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/contact" ? "text-[#7971EA]" : "text-[#2e435f59]"}`}>03/</span>
            <Link href="/contact" className={router.pathname === "/contact" ? "font-bold" : ""} ><span className='text-3xl'>Contact</span></Link>
          </motion.li>
          <motion.li className={`mb-12 relative p-5 text-sm ${router.pathname === "/blog" ? "text-active text-lg flex justify-center text-sm" : "text-[#2e435f59]"}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/blog" ? "text-[#7971EA]" : "text-[#2e435f59]"}`}>04/</span>
            <Link href="/blog" className={router.pathname === "/blog" ? "font-bold" : ""} ><span className='text-3xl'>Blog</span></Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  )
}

export default MobileNav

