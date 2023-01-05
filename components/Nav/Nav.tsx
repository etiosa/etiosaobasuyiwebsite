import Link from 'next/link';
import { useRouter } from "next/router";
import { motion } from "framer-motion"
import MobileNav from './MobileNav';
function Nav() {

  const router = useRouter();

  return (
    <>
      <MobileNav />
      <nav className="max-[800px]:hidden w-scren justify-center	flex mb-14">

        <motion.ul
          className="bg-{#DCE0E6]   text-[#78797A]  font-Poppins   mt-10 relative z-40  w-96  md:w-11/12 flex items-center  justify-evenly	 ">
          <motion.li>
            <Link href="/" className="flex font-bold text-[#0B1727] text-2xl relative">
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
                {router.pathname === "/" ?
                  <motion.div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-full h-1.5 absolute  left-0 top-8'></motion.div> :
                  null}
              </div>
            </Link>
          </motion.li>
          <motion.li className={` relative p-5 text-sm ${router.pathname === "/work" ? "text-active text-lg flex justify-center text-sm" : ""}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/work" ? "text-[#7971EA]" : "text-[#2E435F]"}`}>01/</span>

            <Link href="/work" className={router.pathname === "/work" ? "font-bold" : ""} ><span className='text-lg'>Work</span></Link>
            {router.pathname === "/work" ?
              <motion.div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-full h-1.5 absolute  bottom-3'></motion.div> :
              null}
          </motion.li>

          <motion.li className={` relative p-5 text-sm ${router.pathname === "/about" ? "text-active text-lg flex justify-center" : ""}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/about" ? "text-[#7971EA]" : "text-[#2E435F]"}`}>02/</span>

            <Link href="/about" className={router.pathname === "/about" ? "font-bold" : ""} >About</Link>
            {router.pathname === "/about" ?
              <motion.div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-full h-1.5 absolute bottom-3'></motion.div> :
              null}
          </motion.li>
          <motion.li className={` relative p-5 text-sm ${router.pathname === "/contact" ? "text-active  text-lg flex justify-center" : ""}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/contact" ? "text-[#7971EA]" : "text-[#2E435F]"}`}>03/</span>

            <Link href="/contact" className={router.pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
            {router.pathname === "/contact" ?
              <motion.div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-full h-1.5 absolute bottom-3'></motion.div> :
              null}
          </motion.li>
          <motion.li className={` relative p-5 text-sm ${router.pathname === "/blog" ? "text-active  text-lg flex justify-center" : ""}`}>
            <span className={`absolute -top-1 text-xs ${router.pathname === "/blog" ? "text-[#7971EA]" : "text-[#2E435F]"}`}>04/</span>

            <Link href="/blog" className={router.pathname === "/blog" ? "font-bold" : ""}>Blog</Link>
            {router.pathname === "/blog" ?
              <motion.div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-full h-1.5 absolute bottom-3'></motion.div> :
              null}
          </motion.li>
        </motion.ul>
      </nav>
    </>

  )
}

export default Nav
