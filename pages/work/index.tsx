import { NextPage } from "next/types"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap";
import { projects } from "../../types/project"
import AnimatedText from "./AnimatedText";
import Text from "../../components/Animation/Text";
import Word from "../../components/Animation/Word";



gsap.registerPlugin(ScrollTrigger);


const Work: NextPage = () => {
    //box shadow when you over it 
    const [position, setPosition] = useState(0)
    const [replay, setReplay] = useState(true);
    const [scrollposition, setScrollPosition] = useState(0)
    const paraRef = useRef<HTMLDivElement>(null) as any
    const placeholderText = [
        { type: "heading1", text: "Framer Motion" },
        {
            type: "heading2",
            text: "Animating responsive text!"
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };


    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
            setReplay(true);
        }, 600);
    };


    const nextMove = () => {
        if (position < projects.length - 1) {
            setPosition(position + 1)
        }
    }
    const prevMove = () => {
        if (position > 0) {
            setPosition(position - 1)
        }
    }
    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#first",
            start: "top top",
            onEnter: () => {
                setScrollPosition(0)
            },
        })
        ScrollTrigger.create({
            trigger: "#second",
            start: "top top",
            onEnter: () => {
                setScrollPosition(1)
            },
        })
        ScrollTrigger.create({
            trigger: "#third",
            start: "top top",
            onEnter: () => {
                setScrollPosition(2)
            },
        })
    })

    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

    const Hover = {
        image: {
          skewY: 1,
          scale: 1.05,
      
          filter: `drop-shadow(0px 354px 142px rgba(32, 37, 42, 0.02)) drop-shadow(0px 199px 119px rgba(32, 37, 42, 0.05)) `
      
      
      
        },
      
      }

    return (
        <>
          

            <div className=" flex items-center flex-col max-[1000px]:hidden relative   ">


                <motion.div
                    initial={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    animate={{
                        background: projects[position].backdrop
                    }}
                    transition={{
                        type: "spring",

                        stiffness: 200,
                        damping: 20
                    }}

                    className="fixed  h-screen left-0 right-0 " ></motion.div>


                {projects.map((data, index) => {
                    return (
                        <motion.div
                            initial={{
                                position: index !== position ? "absolute" : "relative",
                                opacity: index !== position ? 0 : 1,
                                zIndex: index != position ? -1 : 1,

                            }}
                            animate={{
                                position: index === position ? "relative" : 'absolute',
                                opacity: index === position ? 1 : 0,
                                zIndex: index == position ? 1 : -1,


                            }}
                            transition={{
                                easings: [0.1, 1, 0.1, 1]
                            }}
                            className="grid grid-cols-2  place-items-center  mt-2 w-11/12">

                            <div className=" ">
                                <Text index={index} currentporjectposition={position} text={data.name} className="text-4xl font-bold font-Poppins" titlecolor={data.titleColor} />
                                <Text index={index} currentporjectposition={position} text={data.Role} className="font-Poppins  text-sm font-bold mt-2" titlecolor={data.color} />
                                <Text index={index} currentporjectposition={position} text={data.year} className="font-Poppins text-xs mt-2" titlecolor={data.color} />
                             
                                <div className={`flex font-Poppins w-10/12 mt-2`} style={{ color: data.color }}>
                                
                                <Word index={index} word={data.description} currentporjectposition={position}/>
                                    
                                 
                                </div>


                                <motion.button
                                    whileHover={{
                                        skewY: 3,
                                        scale: 1.1,
                                        boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                                    }}
                                    initial={{
                                        background: data.color,
                                        left: index===position?"-100vw":""
                                    }}
                                    animate={{
                                        background: data.color,
                                        left: index===position?0:"-100vw",
                                    }}
                                    transition={{
                                       type:"spring",
                                       damping: 8,
                                       stiffness: 50

                                    }}

                                    style={{

                                    }} className="   relative  h-12 w-40 p-3  mt-14"><span className="font-Poppins  text-white">View</span></motion.button>

                            </div>
                            <motion.div className=""
                            variants={Hover}
                                whileHover="image"
                               initial={{
                                translateZ:'20rem',
                                opacity:0,
                          
                               }}
                               animate={index === position?
                                     { WebkitMaskImage: visibleMask, maskImage: visibleMask, opacity:1}
                                   : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                               }
                               transition={{ duration:index !== position?0.4:0.5, delay: index !== position?0.3:0.2 }}
                            >
                                <Image src={data.CompanyImage} alt="aurora" width={800} height={100} className="  object-cover md:object-cover h-auto w-auto " quality={100} priority />
                            </motion.div>
                        </motion.div>
                    )
                })}
































                {/* nav*/}

                <div className="flex justify-center items-center  w-full mt-20 relative">
                    <motion.div
                        initial={{
                            background: projects[position].background,
                        }}
                        animate={{
                            background: projects[position].background
                        }}

                        className="cursor-pointer bg-[red] h-8 w-8 rounded-l-full" onClick={prevMove}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 left-1">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                        </svg>
                    </motion.div>

                    <div className="flex  relative ">
                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                                background: projects[position].color
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                left: `${position === 0 ? 30 : position * +100 + 60}}px`,
                                background: projects[position].color


                            }}
                            transition={{
                                type: "spring",

                                stiffness: 200,
                                damping: 20
                            }}
                            className={`absolute  right-0 left-0 -bottom-[70px] }] h-3 w-24`} style={{ boxShadow: ' 0px 39px 16px rgba(0, 0, 0, 0.01), 0px 22px 13px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}  ></motion.div>

                        <div className="flex justify-between items-center  w-full	 cursor-pointer " >
                            {projects.map((src, index) => (

                                <motion.div
                                    onClick={() => setPosition(index)}

                                    animate={{
                                        background: index === position ?
                                            src.background : ' conic-gradient(from 192.62deg at 61.19% 50%, rgba(255, 255, 255, 0.5) -120deg, #FFFFFF 114.18deg, rgba(255, 255, 255, 0.5) 240deg, #FFFFFF 474.18deg)',
                                    }}
                                    transition={{

                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20,


                                    }}
                                    key={src.url} className=" w-20 h-20 rounded-full  ml-7 m-auto text-center">
                                    <Image src={src.url} alt="auor" width={50} height={50} className="aspect-square m-auto mt-4" />
                                    <motion.h3
                                        initial={{
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            opacity: index === position ? 1 : 1,
                                            scale: index === position ? 1 : 0,

                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20
                                        }}

                                        className={`mt-4 relative font-Poppins font-bold text-[${src.color}] text-xs text-center`}>{src.name}</motion.h3>

                                </motion.div>
                            ))}




                        </div>

                    </div>
                    <motion.div
                        initial={{
                            background: projects[position].background,
                        }}
                        animate={{
                            background: projects[position].background
                        }}

                        className="cursor-pointer h-8 w-8 rounded-r-full relative left-5" onClick={nextMove}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 right-0 ">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                        </svg>

                    </motion.div>
                </div>

            </div>



            {/* cchange the position as you are scroll*/}
            <div className="min-[1000px]:hidden relative p-5">
                <motion.div
                    initial={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    animate={{
                        background: projects[scrollposition].backdrop
                    }}
                    transition={{
                        type: "spring",

                        stiffness: 200,
                        damping: 20
                    }}

                    className="absolute bottom-0 h-full left-0 right-0 " ></motion.div>
                <div className="flex flex-wrap justify-between  relative">
                    <div className="w-full md:w-full ">
                        <div


                            className="  m-auto relative">
                            <Image src="/companies/Aisle.png" alt="aurora" width={700} height={100} className="lg:aspect-square  max-sm:aspect-square p-5   object-cover md:object-contain" priority />
                        </div>
                        <div className="ml-5 md:ml-14 ">
                            <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins mb-2 ">ALSLE ROCKET</h2>
                            <p className="font-Poppins text-[#6983B7]">Front End Developer</p>
                            <motion.button whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></motion.button>

                        </div>
                    </div>
                    <div className="w-full md:w-full mt-14" id="first">
                        <motion.div
                            style={{ originY: 0 }}
                            ref={paraRef}
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: 200

                            }}
                            whileInView={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.5,
                                type: "spring"
                            }}
                            className="  m-auto relative">
                            <Image src="/companies/Aisle.png" alt="aurora" width={700} height={100} className="lg:aspect-square  max-sm:aspect-square p-5   object-cover md:object-contain" priority />
                        </motion.div>
                        <div className="ml-5 md:ml-14 ">
                            <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins mb-2 ">ALSLE ROCKET</h2>
                            <p className="font-Poppins text-[#6983B7]">Front End Developer</p>
                            <motion.button whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></motion.button>

                        </div>
                    </div>


                    <div className="w-full md:w-full mt-14    " id="second">
                        <motion.div
                            style={{ originY: 0 }}
                            ref={paraRef}
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: 200

                            }}
                            whileInView={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.5,
                                type: "spring"
                            }}



                            className="  m-auto relative">
                            <Image src="/companies/Aisle.png" alt="aurora" width={700} height={100} className="lg:aspect-square  max-sm:aspect-square p-5   object-cover md:object-contain" priority />
                        </motion.div>
                        <div className="ml-5 md:ml-14 ">
                            <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins mb-2 ">ALSLE ROCKET</h2>
                            <p className="font-Poppins text-[#6983B7]">Front End Developer</p>
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                                }}
                                className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></motion.button>

                        </div>
                    </div>

                    <div className="w-full md:w-full  mt-14   " id="third">
                        <motion.div
                            style={{ originY: 0 }}
                            ref={paraRef}
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: 200

                            }}
                            whileInView={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.5,
                                type: "spring"
                            }}
                            className="  m-auto relative">
                            <Image src="/companies/Aisle.png" alt="aurora" width={700} height={100} className="lg:aspect-square  max-sm:aspect-square p-5   object-cover md:object-contain" priority />
                        </motion.div>
                        <div className="ml-5 md:ml-14 ">
                            <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins mb-2 ">ALSLE ROCKET</h2>
                            <p className="font-Poppins text-[#6983B7]">Front End Developer</p>
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                                }}
                                className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></motion.button>

                        </div>
                    </div>

                    <div className="w-full md:w-full  mt-14  ">
                        <motion.div
                            style={{ originY: 0 }}
                            ref={paraRef}
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: 200

                            }}
                            whileInView={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.5,
                                type: "spring"
                            }}
                            className="  m-auto relative">
                            <Image src="/companies/Aisle.png" alt="aurora" width={700} height={100} className="lg:aspect-square  max-sm:aspect-square p-5   object-cover md:object-contain" priority />
                        </motion.div>
                        <div className="ml-5 md:ml-14 ">
                            <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins mb-2 ">ALSLE ROCKET</h2>
                            <p className="font-Poppins text-[#6983B7]">Front End Developer</p>
                            <motion.button whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></motion.button>

                        </div>
                    </div>


                </div>





            </div>
        </>
    )
}
export default Work
