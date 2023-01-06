import { useRouter } from "next/router"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../../types/project"
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import LinkComponent from "../../components/Link/LinkComponent";
import Head from "next/head";

interface IProjectData {
    name: string,
    buttonColor?: string,
    titleColor: string,
    Role: string,
    url?: string
    year: string,
    description: string,
    CompanyImage: string,
    color: string,
    id?: string,
    comingSoon?: boolean,
    workImages?: string[]

}

const WorkDetails = () => {
    const [project, setProject] = useState<IProjectData>()
    const [isHover, setHover] = useState(false)
    const [isPrevHover, setPrevHover] = useState(false)
    const [position, setSpostion] = useState(0)
    const next = () => {
        if (position < project!.workImages!.length - 1) {
            setSpostion(position + 1);
        }
    }
    const pre = () => {
        if (position > 0) {
            setSpostion(position - 1)
        }
    }
    const directionHover = {
        hover: { scale: 1.1 }
    }
    const router = useRouter()
    useEffect(() => {
        const found = projects.find(project => project.name === router.query.pid);
        setProject(found)
    }, [router.query.pid])

    const subContent = {
        init: {
            opacity: 0
        },
        whileOnView: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    const titleContainer = {
        init: {
            width: 0
        },
        animate: {
            width: "100%",
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        },
        whileonView: {
            width: "100%",
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        },
    }
    const back = () => {
        router.back()
    }

    return (
        <>
            <Head>
                <title>Work - {router.query.pid}  - Etiosa Obasuyi</title>
                <meta name="description" content="Check out my portfolio of past work as a front-end developer. From small business websites to large e-commerce platforms, 
                        I have a track record of delivering high-quality and user-friendly web experiences." />
                <meta name="og:description" content="Check out my portfolio of past work as a front-end developer. From small business websites to large e-commerce platforms, 
                        I have a track record of delivering high-quality and user-friendly web experiences." />
                <meta name="og:type" content='website' />
                <meta name="type" content="website" />
                <meta name="url" content="https://etiosaobasuyi.com/work" />
                <meta name='og:url' content='https://etiosaobasuyi.com/work' />
            </Head>
            <div className="flex flex-col items-start  p-3 w-full sm:w-9/12 m-auto relative overflow-hidden">
                <div className="relative mb-24 mt-12 w-24 cursor-pointer" onClick={back}>
                    <motion.div
                        style={{ background: project?.buttonColor }}
                        className={`w-full h-1   relative top-12 right-0 left-0 `}></motion.div>
                    <motion.span
                        style={{ color: project?.titleColor }}
                        className="relative font-bold font-Poppins text-2xl sm:text-4xl">Back</motion.span>
                </div>
                <motion.h2
                    style={{ color: project?.titleColor }}
                    className="font-bold font-Poppins text-5xl mb-10">{project?.name}</motion.h2>
                <motion.p
                    style={{ color: project?.color }}
                    className="font-Poppins  sm:w-11/12 xl:w-9/12 lg:w-10/12 ">
                    {project?.description}
                </motion.p>
                <LinkComponent link={project?.url!} name={"Visit"} backgroundColor={project?.buttonColor} />

                <div className="flex max-[700px]:flex-col mt-14  sm:mt-0 justify-evenly  w-full  gap-36 max-[700px]:gap-36  min-[701px]:gap-4">
                    <motion.div
                        variants={titleContainer} initial="init" whileInView="whileonView"
                        style={{ background: project?.buttonColor }}

                        className=" w-8/12 max-[500px]:w-full h-1 relative left-1 ">
                        <h2 style={{ color: project?.titleColor }} className="font-bold font-Poppins text-sm mb-2 mt-2">Role</h2>
                        <h5 style={{ color: project?.color }}
                            className="top-5 p-1 text-md  whitespace-nowrap ">
                            {project?.Role}
                        </h5>
                    </motion.div>
                    <motion.div
                        variants={titleContainer} initial="init" whileInView="whileonView"
                        style={{ background: project?.buttonColor }}

                        className=" w-8/12 h-1 relative left-1 max-[500px]:w-full ">
                        <h2 style={{ color: project?.titleColor }} className="font-bold font-Poppins text-sm mb-2 mt-2">Year</h2>
                        <h5 style={{ color: project?.color }}
                            className=" top-5 p-1 text-md whitespace-nowrap">
                            {project?.year}
                        </h5>
                    </motion.div>
                    <motion.div
                        variants={titleContainer} initial="init" whileInView="whileonView"
                        style={{ background: project?.buttonColor }}
                        className=" w-8/12 lg:w-full h-1  mb-14 relative left-1 max-[500px]:w-full">
                        <motion.h2
                            style={{ color: project?.titleColor }}
                            variants={subContent}
                            initial="init"
                            whileInView="whileOnView"
                            className="font-bold font-Poppins text-sm mb-2 mt-2  relative whitespace-nowrap">Tech Stack</motion.h2>
                        <motion.div className=" relative w-full   flex  text-md whitespace-nowrap">
                            <motion.span
                                style={{ color: project?.color }}
                                variants={subContent}
                                initial="init"
                                whileInView="whileOnView"
                                className=" relative p-1 whitespace-nowrap">Next JS</motion.span>
                            <motion.span
                                style={{ color: project?.color }}
                                variants={subContent}
                                initial="init"
                                whileInView="whileOnView"
                                className=" relative p-1 whitespace-nowrap">Redux</motion.span>
                            <motion.span
                                style={{ color: project?.color }}
                                variants={subContent}
                                initial="init"
                                whileInView="whileOnView"
                                className=" relative p-1 whitespace-nowrap">React</motion.span>
                            <motion.span
                                style={{ color: project?.color }}
                                variants={subContent}
                                initial="init"
                                whileInView="whileOnView"
                                className="relative p-1 whitespace-nowrap">TypeScript</motion.span>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="max-[1200px]:hidden">
                    {/* image company desktop and tablet*/}
                    <div className="flex justify-center mt-14 mb-4  w-6/12">
                        <motion.div
                            onMouseEnter={() => {
                                setPrevHover((prev) => {
                                    return !prev;
                                })
                            }}
                            onMouseLeave={() => {
                                setPrevHover((prev) => {
                                    return !prev;
                                })
                            }}
                            className="flex relative  items-center mr-24 cursor-pointer" onClick={pre} >

                            <span style={{ color: project?.titleColor }} className="font-bold text-xl">Previous</span>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: isPrevHover ? "5rem" : 0 }}
                                style={{ background: project?.buttonColor }}
                                className=" h-1 w-1 absolute  top-6  -left-1">
                            </motion.div>
                        </motion.div>
                        <motion.div
                            onMouseEnter={() => {
                                setHover((prev) => {
                                    return !prev;
                                })
                            }}
                            onMouseLeave={() => {
                                setHover((prev) => {
                                    return !prev;
                                })
                            }}
                            variants={directionHover} whileHover="hover"
                            onClick={next} className="flex  relative items-center cursor-pointer">
                            <span style={{ color: project?.titleColor }} className="font-bold text-xl">Next</span>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: isHover ? "5rem" : 0 }}
                                style={{ background: project?.buttonColor }}
                                className=" h-1 w-1 absolute  top-6  -left-1">
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="App -ml-2  ">
                        <div className="row">
                            {project?.workImages!.map((project, index) => (
                                <motion.div
                                    className="container"
                                    key={index + "_____" + project.slice(0, 2)}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{
                                        rotate: 0,
                                        left: `${(index - position) * 60 - 30}vw`,
                                        scale: index === position ? 1 : 0.8
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}>
                                    <img alt={project} key={project} src={project} className="object-contain" />
                                </motion.div>
                            ))}
                        </div>
                    </div>



                </div>
                {/* image company mobile*/}
                <div className="min-[1200px]:hidden">
                    <div className="mt-14  w-full ">
                        {project?.workImages!.map((project, index) => (
                            <div className="mb-24" key={project + "__" + index}>
                                <ImageComponent key={project + "__" + index} src={project} name={project} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}


export default WorkDetails