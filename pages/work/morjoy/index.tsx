import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../../../types/project"
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import LinkComponent from "../../../components/Link/LinkComponent";



interface IProjectProps {
    name: string,
    buttonColor?: string,
    titleColor: string,
    Role: string,
    year: string,
    description: string,
    CompanyImage: string,
    color: string,
    id?: string,
    comingSoon?: boolean,
    workImages?: string[]

}
export default function MorJoy() {
    const [project, setProject] = useState<IProjectProps>()

    const [position, setSpostion] = useState(0)


    const next = () => {
        if (position < project?.workImages.length - 1) {
            setSpostion(position + 1);

        }
    }
    const pre = () => {
        if (position > 0) {
            setSpostion(position - 1)
        }
    }

    useEffect(() => {
        const found = projects.find(project => project.name === "MORJOY CANDLES");
        setProject(found)
    }, [])

const sendEmail=()=>{
    console.log("send Email")
  
   
}

    return (
        <>
         <button onClick={sendEmail}>send email</button>
            <div className="flex flex-col items-start  p-3 w-full sm:w-9/12 m-auto relative">


                <motion.h2
                    style={{ color: project?.titleColor }}
                    className="font-bold font-Poppins text-5xl mb-10">{project?.name}</motion.h2>
                <motion.p
                    style={{ color: project?.color }}
                    className="font-Poppins  sm:w-8/12 ">
                    {project?.description}
                </motion.p>
                <LinkComponent link={"https://www.morjoycandles.com"}  name={"Visit"} backgroundColor={project?.buttonColor} />

                <div className="grid mt-14  sm:mt-0 justify-evenly   grid-cols-2 md:grid-cols-3  gap-32 sm:gap-32">
                    <motion.div
                        style={{ background: project?.buttonColor }}
                        className="w-24 h-1 relative left-1 ">
                        <motion.h2
                            style={{ color: project?.titleColor }}
                            className="font-bold font-Poppins text-xl mb-2 mt-2 ">Role</motion.h2>
                        <h5 className="top-5 text-sm w-96 ">
                            {project?.Role}
                        </h5>
                    </motion.div>
                    <motion.div
                        style={{ background: project?.buttonColor }}
                        className="w-24 h-1 relative left-1">
                        <motion.h2
                            style={{ color: project?.titleColor }}
                            className="font-bold font-Poppins text-xl mb-2 mt-2">Year</motion.h2>
                        <h5 className=" top-5 text-sm whitespace-nowrap">
                            {project?.year}
                        </h5>
                    </motion.div>
                    <motion.div
                        style={{ background: project?.buttonColor }}
                        className="w-24 h-1 mt-14 sm:mt-0 mb-14 relative left-1">

                        <motion.h2
                            style={{ color: project?.titleColor }}
                            className="font-bold font-Poppins text-xl mb-2 mt-2 whitespace-nowrap">Tech Stack</motion.h2>
                        <div className="  relative grid grid-cols-12  md:grid-cols-3   gap-16  text-md">
                            <span className="block">Shopify</span>
                            <span className="block ml-3">CSS</span>
                            <span className="block">HTML</span>
                        </div>

                    </motion.div>

                </div>
                <div className="max-[1200px]:hidden">
                    {/* image company desktop and tablet*/}
                    <div className="flex justify-center mt-14  w-6/12">
                        <div className="flex  items-center mr-24 cursor-pointer" onClick={pre} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="w-10 h-10  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Previous</span>
                        </div>
                        <div onClick={next} className="flex items-center cursor-pointer">
                            <span >Next</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="App -ml-2 ">
                        <div className="row">
                            {project?.workImages.map((project, index) => (
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
                                    <img alt="morjoy" src={project} className="object-contain"></img>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* image company mobile*/}
                <div className="min-[1200px]:hidden">
                    <div className="mt-14  w-full ">
                        {project?.workImages.map((project, index) => (
                            <div className="mb-24" key={project + "___" + index}>
                                <ImageComponent src={project} name={"ALSLE ROCKET"} index={index} />
                            </div>))}
                    </div>
                </div>
               

            </div>
        </>

    )
}

