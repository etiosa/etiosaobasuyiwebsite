import { NextPage } from "next/types"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap";
import { projects } from "../../types/project"
import Text from "../../components/Animation/Text";
import Word from "../../components/Animation/Word";
import { useRouter } from "next/router";
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

const offset = 180;
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Work: NextPage = () => {
    const router = useRouter()
    const [position, setPosition] = useState(0)
    const [scrollposition, setScrollPosition] = useState(0)
    const [distance, setDistance] = useState(-10)

    const setActivePosition = (index: number) => {
        let moveDistance = index * offset;
        setPosition(() => {
            return index;
        })
        setDistance(() => {
            return moveDistance;
        })
        if (index === 0) {
            setDistance(() => {
                return 10;
            })
        }
    }

    const nextMove = () => {
        if (position < projects.length - 1) {
            let moveDistance = position * offset + 180;
            setPosition((prev) => {
                return position + 1;
            })
            setDistance(() => {
                return moveDistance;
            })

        }
        if (position === 0) {
            setDistance(() => {
                return 160;
            })
        }
    }
    const prevMove = () => {
        if (position > 0) {
            let moveDistance = position * offset - 180;
            setPosition((prev) => {
                return position - 1;
            })
            setDistance(() => {
                return moveDistance;
            })

        }
    }
    useEffect(() => {
        projects.forEach((project, index) => {
            ScrollTrigger.create({
                trigger: `#${project.id}`,
                start: "top top",
                onEnter: () => {
                    setScrollPosition(index)
                },
            })
        }, [])

    })



    const Hover = {
        image: {
            skewY: 1,
            scale: 1.05,
            filter: `drop-shadow(0px 354px 142px rgba(32, 37, 42, 0.02)) drop-shadow(0px 199px 119px rgba(32, 37, 42, 0.05))`
        },
    }

    return (
        <motion.div>
            <Head>
                <title>Work -  Etiosa Obasuyi</title>
                <meta name="description" content="Check out my portfolio of past work as a front-end developer. From small business websites to large e-commerce platforms, 
                        I have a track record of delivering high-quality and user-friendly web experiences." />
                <meta name="og:description" content="Check out my portfolio of past work as a front-end developer. From small business websites to large e-commerce platforms, 
                        I have a track record of delivering high-quality and user-friendly web experiences." />
                <meta name="og:type" content='website' />
                <meta name="type" content="website" />
                <meta name="url" content="https://etiosaobasuyi.com/work" />
                <meta name='og:url' content='https://etiosaobasuyi.com/work' />
            </Head>

            <div className=" flex items-center flex-col max-[1024px]:hidden relative ">
                <motion.div
                    initial={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)" }}
                    animate={{ background: projects[position].backdrop }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                    className="fixed  h-screen left-0 right-0 " ></motion.div>
                {projects.map((data, index) => {
                    return (
                        <motion.div
                            key={data.name + '__' + data.name + "___" + data.Role}
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

                            <div>
                                <Text index={index} currentporjectposition={position} text={data.name} className="text-4xl font-bold font-Poppins" titlecolor={data.titleColor} />
                                <Text index={index} currentporjectposition={position} text={data.Role} className="font-Poppins  text-sm font-bold mt-2" titlecolor={data.color} />
                                <Text index={index} currentporjectposition={position} text={data.year} className="font-Poppins text-xs mt-2" titlecolor={data.color} />
                                <motion.div className={`flex font-Poppins w-10/12 mt-2`} style={{ color: data.color }}>
                                    <Word index={index} word={data.description} currentporjectposition={position} />
                                </motion.div>
                                <motion.button
                                    onClick={() => {
                                        router.push(`/work/${data.name}`)
                                    }}
                                    style={{ cursor: data.comingSoon ? "not-allowed" : "pointer", }}
                                    disabled={data.comingSoon}
                                    whileHover={{
                                        skewY: data.comingSoon ? 0 : 3,
                                        scale: data.comingSoon ? 1 : 1.1,
                                        boxShadow: data.comingSoon ?
                                            "" : `0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 
                                                0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)`
                                    }}
                                    initial={{
                                        background: data.buttonColor,
                                        left: index === position ? "-100vw" : 0
                                    }}
                                    animate={{ background: data.buttonColor, left: index === position ? 0 : "-100vw" }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                    className="relative  h-12 w-40 p-3  mt-14"><span className="font-Poppins  text-white">{data.comingSoon ? "In-Development" : "View"}</span></motion.button>
                            </div>
                            <motion.div
                                key={index + "___" + data.comingSoon + "___" + data.name}
                                className=""
                                variants={Hover}
                                initial={{ opacity: 0 }}
                                animate={index === position ?
                                    { WebkitMaskImage: visibleMask, maskImage: visibleMask, opacity: 1 }
                                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                                }
                                transition={{ duration: index !== position ? 0.4 : 0.5, delay: index !== position ? 0.3 : 0.2 }}>
                                <Image src={data.comingSoon ? "/companies/coming.png" : data.CompanyImage} alt={data.name} width={800} height={100} className={`   
                                 object-cover md:object-cover  `} quality={100} priority />
                            </motion.div>
                        </motion.div>
                    )
                })}

                {/* nav*/}
                <div className="flex justify-center items-center  w-full mt-12 relative p-8">
                    <motion.div
                        initial={{
                            opacity: 0,
                            background: projects[position].background,
                        }}
                        animate={{
                            opacity: 1,
                            background: projects[position].background
                        }}

                        className="cursor-pointer  h-8 w-8 rounded-l-full" onClick={prevMove}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 left-1">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                        </svg>
                    </motion.div>

                    <div className="flex  relative">
                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                                left: `${distance}px`,
                                background: projects[position].color
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                left: `${distance}px`,
                                background: projects[position].color
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                            className={`absolute   left-[40px] -bottom-[45px] }] h-3 w-32`} style={{ boxShadow: ' 0px 39px 16px rgba(0, 0, 0, 0.01), 0px 22px 13px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}  ></motion.div>

                        <motion.div>
                        </motion.div>

                        <div className="grid grid-cols-6 gap-20 items-center  place-content-center place-items-center w-full	 cursor-pointer  relative" >
                            {projects.map((src, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ scale: 0 }}
                                    onClick={() => setActivePosition(index)}

                                    animate={{ scale: 1, }}
                                    transition={{
                                        type: "spring",
                                        damping: 8,
                                        stiffness: 50
                                    }}
                                    key={src.id + "___" + src.Role + "____" + src.name} className=" relative  m-auto text-center">
                                    <Image priority  src={src.logo} alt={src.name} width={100} height={60} className=" m-auto mt-1" />

                                    <motion.div
                                        key={src + "__" + index}
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                            background: projects[position].color
                                        }}
                                        animate={{
                                            scale: index === position ? 1 : 0,
                                            opacity: index === position ? 1 : 0,
                                            background: projects[position].color
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20,
                                            duration: 0.7
                                        }}
                                        className="w-2 h-2  -top-5   left-10 m-auto  z-1 rounded-full absolute">
                                    </motion.div>
                                    <motion.h3
                                        initial={{
                                            scale: 0, opacity: 0
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
                                        className={`mt-1 whitespace-nowrap absolute  left-0 right-0 font-Poppins font-bold text-[${src.color}] text-xs text-center`}>{src.name}</motion.h3>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            background: projects[position].background,
                        }}
                        animate={{
                            opacity: 1,
                            background: projects[position].background
                        }}

                        className="cursor-pointer h-8 w-8 rounded-r-full relative left-5" onClick={nextMove}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1 right-0 ">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                        </svg>
                    </motion.div>
                </div>
            </div>



            {/* change the position as you scroll*/}
            <div className="min-[1025px]:hidden relative p-5">
                <motion.div
                    initial={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)" }}
                    animate={{
                        background: projects[scrollposition].backdrop
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}

                    className="absolute bottom-0 h-full left-0 right-0 " ></motion.div>
                <section className="w-full h-full   justify-center items-center " >
                    <div className="relative ">
                        {projects.map((project, index) => {
                            return (
                                <ProjectImage key={project.name + "__" + project.year} ProjectName={project.name}
                                    index={index}
                                    comingSoon={project.comingSoon}
                                    id={project.id}
                                    hoverImage={project.hoverImages}
                                    buttonColor={project.buttonColor}
                                    reverse={index % 2 === 0 ? true : false}
                                    titleColor={project.titleColor} Role={project.Role} Year={project.year} Description={project.description}
                                    CompanyImage={project.CompanyImage}
                                    color={project.color} />
                            )
                        })}
                    </div>
                </section>
            </div>
        </motion.div>
    )
}
export default Work


