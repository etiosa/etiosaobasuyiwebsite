import { motion } from "framer-motion";
import { useEffect, useRef } from "react"
import Line from "../line/line"
import Nav from "../Nav/Nav"
import { useRouter } from 'next/router'

function Layout({ children }: any) {
    const router = useRouter()

    const cursors = useRef(null);

    //curosor here
    useEffect(() => {
        const cursor = (event: any) => {
            console.log()
            if (mouseCurouser) {
                mouseCurouser.style.left = event.clientX + "px"
                mouseCurouser.style.top = event.clientY + "px";


            }
            if (ProjectImage) {

                ProjectImage.forEach(image => {
                    image.addEventListener('mouseover', () => {
                        // outter?.classList.add("scale-[4]", "opacity-1", "bg-[#F26527]");

                        // outterText?.classList.add('text-opacity');
                    })

                })

                ProjectImage.forEach(image => {
                    image.addEventListener('mouseleave', () => {
                        outter?.classList.remove("scale-[4]");
                        outterText?.classList.remove('text-opacity');
                    })

                })
            }

        }
        const mouseCurouser = document.querySelector<HTMLElement>('.cursor');
        //project-image
        const ProjectImage = document.querySelectorAll('.project-image');
        const outter = document.querySelector('.outter')
        const outterText = document.querySelector('.outterText')
        window.addEventListener("mousemove", cursor)





    })
    const container = {
        initial: {
            opacity: 0,
              clipPath: "circle(0.2% at 0 0)",
          transition: {
            duration: 1.5,
            staggerChildren: 0.06
          }
        },
        animate: {
            opacity: 1,
            clipPath: "circle(141.1% at 0 0)",
          transition: {
            duration: 1.5,
            staggerChildren: 0.06
          }
    
        },
        exit: {
            opacity:1,

        
          transition: {
            duration: 1,
            staggerChildren: 0.05
          }
        },
    
      };

    return (
        <> <motion.div 
        
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
              clipPath: "circle(141.1% at 0 0)",
            },
            exitState: {
                opacity:1,
            
            },
          }}
        
        >
            <Nav />
            <Line />
            <main >
                {children}

            </main>

</motion.div>
        </>



    )
}


export default Layout
/*  <Line />

 variants={{
            initialState: {
              opacity: 0,
              clipPath: "circle(0.2% at 0 0)",
            },
            animateState: {
              opacity: 1,
              clipPath: "circle(141.1% at 0 0)",
            },
            exitState: {
                opacity:1,
            
            },
          }}


          

linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)
<div


                    className='cursor fixed overflow-hidden border-2  w-14 h-14 rounded-full text-center  '>
                    <div ref={cursors} className="outter  w-5 h-5 relative  top-4 left-4  rounded-full transition-all duration-500	 ">
                    </div>
                    <span className=' outterText relative  font-bold text-lg font-Poppins text-hide'>View</span>



                </div>

*/