import Link from 'next/link';
import { useRouter } from "next/router";
import { motion } from "framer-motion"
import MobileNav from './MobileNav';
function Nav() {
  //TODO: Animations 
  //bounce animation here
  const router = useRouter();

  return (
    <>
    <MobileNav/>
    <nav className="max-[500px]:hidden w-scren justify-center	flex mb-14">

      <ul style={{  }}
        className="bg-{#DCE0E6]   text-[#78797A]  font-Poppins h-14 md:h-20 mt-10 relative z-40  w-96  md:w-11/12 flex items-center  justify-evenly	 ">
        
          <li>
            <Link href="#">Etioa Obasuyi</Link>
          </li>
         
          <li>
            <Link href="#">Work</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Experiments</Link>
          </li>

      </ul>
    </nav>
    </>

  )
}

export default Nav
/* 


<div className="flex w-6/12 items-center">
          <li className="p-5 sm:text-lg md:text-lg font-Poppins font-bold text-[#0B1727] whitespace-nowrap	 ">
            <Link href="/">

              <span>E</span>
              <span>T</span>
              <span>I</span>
              <span>O</span>
              <span>S</span>
              <span>A  </span>

              <span>O</span>
              <span>B</span>
              <span>A</span>
              <span>S</span>
              <span>U</span>
              <span>Y</span>
              <span>I</span>


            </Link>

          </li>
        </div>
        <div className="flex max-[500px]:hidden">
          <li className={` relative p-5 text-sm ${router.pathname === "/work" ? "text-active flex justify-center text-sm" : ""}`}>
            <Link href="/work" className={router.pathname === "/work" ? "font-bold" : ""} >Work</Link>
            {router.pathname === "/work" ?
              <div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-20 h-1.5 absolute  bottom-6'></div> :
              null}
          </li>
          <li className={` relative p-5 text-sm ${router.pathname === "/about" ? "text-active flex justify-center" : ""}`}>
            <Link href="/about" className={router.pathname === "/about" ? "font-bold" : ""} >About</Link>
            {router.pathname === "/about" ?
              <div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-20 h-1.5 absolute bottom-6'></div> :
              null}
          </li>
          <li className={` relative p-5 text-sm ${router.pathname === "/blog" ? "text-active flex justify-center" : ""}`}>
            <Link href="/blog" className={router.pathname === "/blog" ? "font-bold" : ""} >Blog</Link>
            {router.pathname === "/blog" ?
              <div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-20 h-1.5 absolute bottom-6'></div> :
              null}
          </li>
          <li className={` relative p-5 text-sm ${router.pathname === "/contact" ? "text-active flex justify-center" : ""}`}>
            <Link href="/contact" className={router.pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
            {router.pathname === "/contact" ?
              <div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-20 h-1.5 absolute bottom-6'></div> :
              null}
          </li>
          <li className={` relative p-5 text-sm ${router.pathname === "/experiments" ? "text-active flex justify-center" : ""}`}>
            <Link href="/experiments" className={router.pathname === "/experiments" ? "font-bold" : ""}>Experiments</Link>
            {router.pathname === "/experiments" ?
              <div style={{ boxShadow: "0px 4px 4px rgba(121, 113, 234, 0.41)" }} className='bg-activebg w-20 h-1.5 absolute bottom-6'></div> :
              null}
          </li>
        </div>



<motion.div animate={{ rotate: 180 }}
transition={{ type: 'spring', damping: 300 }}
          
>
  <h1>
    Try frame motion
  </h1>
</motion.div>*/