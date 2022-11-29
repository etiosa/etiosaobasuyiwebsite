import { motion } from "framer-motion";
import Image from "next/image"
import { useState } from "react";
import { projects } from "../../../types/project"
import { useSwipeable } from "react-swipeable";

export default function Page() {

    const [position, setSpostion] = useState(0)

    {/*  sssss*/ }
    const next = () => {
        if (position < projects.length - 1) {
            setSpostion(position + 1);

        }
    }
    const pre = () => {
        if (position > 0) {
            setSpostion(position - 1)

        }
    }

    return (
        <>
            <div className="flex flex-col items-start  p-3 w-full sm:w-9/12 m-auto">
                <h2 className="text-[#A7123C] font-bold font-Poppins text-4xl mb-10">ALSLE ROCKET</h2>

                <p className="font-Poppins text-[#772406]  sm:w-8/12 ">Advantix provides SmartSIM connectivity and technology expense management (TEM) solutions to midsize and large business
                    enterprises.</p>
                <motion.button
                    whileHover={{
                        skewY: 3,
                        scale: 1.1,
                        boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                    }}


                    style={{

                    }} className="   bg-[red] h-12 w-40   mt-5  mb-14 "><span className="font-Poppins text-white">View</span></motion.button>
                <div className="grid mt-14  sm:mt-0 justify-evenly   grid-cols-2 sm:grid-cols-3  gap-14 sm:gap-24">
                    <div className="bg-[red] w-24 h-1 relative left-1 ">
                        <h2 className="font-bold font-Poppins text-sm mb-2 mt-2">Role</h2>
                        <h5 className="top-5 text-xs whitespace-nowrap ">
                            Front- End Developer
                        </h5>
                    </div>
                    <div className="bg-[red] w-24 h-1 relative left-1">
                        <h2 className="font-bold font-Poppins text-sm mb-2 mt-2">Year</h2>
                        <h5 className=" top-5 text-xs whitespace-nowrap">
                            Front- End Developer
                        </h5>
                    </div>
                    <div className="bg-[red] w-24 h-1 mt-14 sm:mt-0 mb-14 relative left-1">

                        <h2 className="font-bold font-Poppins text-sm mb-2 mt-2">Tech Stack</h2>
                        <div className=" relative grid grid-cols-12  gap-12  text-xs whitespace-nowrap">
                            <span>Next JS</span>
                            <span>Redux</span>
                            <span>React</span>
                            <span>Typescript</span>
                        </div>

                    </div>

                </div>
                <div className="max-[1200px]:hidden">
                {/* image company desktop and tablet*/}
               
                <div className="flex justify-center mt-14  w-6/12">
                    <div className="flex  items-center mr-24 cursor-pointer"  onClick={pre} >
                    

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                     className="w-10 h-10  ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Previous</span>
                    </div>

                    <div onClick={next} className="flex items-center cursor-pointer">
                    <span >Next</span>

                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  
                    </div>

                </div>
                <div className="App -ml-2 ">

                    <div className="row">
                        {projects.map((project, index) => (
                            <motion.div
                                className="container"
                                key={index}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                    rotate: 0,
                                    left: `${(index - position) * 60 - 30}vw`,
                                    scale: index === position ? 1 : 0.8,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                }}
                            >
                                <img src={project.CompanyImage} className="object-contain"></img>
                            </motion.div>
                        ))}
                    </div>
                </div>
                </div>



                {/* image company mobile*/}
                <div className="min-[1200px]:hidden">
                    <div className="mt-14  w-full ">
                        <Image src="/companies/Aisle.png" alt="aurora" width={800} height={100} className="  h-auto w-auto" quality={100} priority />


                    </div>
                    <div className="mt-14  w-full">
                        <Image src="/companies/Aisle.png" alt="aurora" width={800} height={100} className=" h-auto w-auto " quality={100} priority />


                    </div>
                    <div className="mt-14  w-full">
                        <Image src="/companies/Aisle.png" alt="aurora" width={800} height={100} className=" h-auto w-auto " quality={100} priority />


                    </div>
                    <div className="mt-14  w-full">
                        <Image src="/companies/Aisle.png" alt="aurora" width={800} height={100} className=" h-auto w-auto " quality={100} priority />


                    </div>
                </div>
                <div className="flex justify-center items-center bg-black">
                    <div>Next Project</div>
                    <div>Prev Project</div>
                    
                </div>

            </div>
        </>

    )
}


/* 

 <motion.div 
                        initial={{
                            scale:0, 
                            
                           
                        }}
                        animate={{
                            scale:1,
                           
                        
                        }}
                        transition={{
                            type:"spring",
                            stiffness:200,
                            damping:15

                        }}
                        className="w-[70vw]   absolute	bg-[red] flex  overflow-hidden">
                         {projects.map(project=>{
                            return (
                        <Image src={project.CompanyImage} alt="aurora" width={800} height={100} className="  object-contain		  h-auto w-auto"  priority quality={100} />

                            )
                        })}

                    </motion.div>*/