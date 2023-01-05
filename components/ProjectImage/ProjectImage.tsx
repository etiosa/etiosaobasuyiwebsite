import { motion } from "framer-motion"
import Image from 'next/image'
import { useRouter } from "next/router";
import { useState } from "react"


interface ProjectImageProps {
    ProjectName: string,
    index: Number,
    buttonColor?: string,
    titleColor: string,
    Role: string,
    Year: string,
    Description: string,
    CompanyImage: string,
    color: string,
    reverse?: boolean,
    hoverImage?: string[]
    id?: string,
    comingSoon?: boolean,
    comingSoonUrl?: string
}
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const Hover = {
    image: {
        skewY: 0.8,
        scale: 1.05,
        opacity: 1,
        filter: `drop-shadow(0px 354px 142px rgba(32, 37, 42, 0.02)) drop-shadow(0px 199px 119px rgba(32, 37, 42, 0.05)) `
    },
    transition: {
        type: 'spring',
        when: 'beforeChildren'
    }
}
const popImage = {
    image: {
        zIndex: 9999,
        x: 50,
        y: -50,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
            duration: 1,
        }
    },
}
const onView = {
    whileOnView: {
        left: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
            duration: 1,
        },
    },
    init: {
        left: "15rem",
        opacity: 0
    },
}

const ProjectImage = (props: ProjectImageProps) => {
    const router = useRouter()
    const [hoverImage, setHoverImage] = useState('')
    const [hoverIndex, setHoverIndex] = useState(-1)
    return (
        <div key={props.ProjectName + '__' + props.index} className="flex w-full justify-center items-center mt-14 overflow-hidden  lg:flex-row" id={props.id}>
            <div key={props.ProjectName + "__" + props.Role + "__" + props.Year} className={`flex max-[1020px]:flex-col    
                justify-center items-center mt-14 mb-24 ${props.reverse ? "flex-row-reverse" : "flex-row"}`} >
                <motion.div
                    key={props.ProjectName}
                    initial={{ opacity: 0, WebkitMaskImage: hiddenMask }}

                    whileInView={{ WebkitMaskImage: visibleMask, opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden" variants={Hover} whileHover="image">
                    <motion.div
                        key={props.Role}
                        initial={{ opacity: 1 }}

                        animate={{ opacity: hoverImage.length ? 0.5 : 1 }}
                        onHoverEnd={() => {
                            setHoverImage('')
                            setHoverIndex(() => {
                                return -1;
                            })
                        }}
                        onHoverStart={() => {
                            setHoverIndex(() => {
                                return 0;
                            })
                        }}

                        whileHover={{ opacity: 0.5 }}
                        className="relative" style={{ opacity: 0.5 }}>

                        {props.comingSoon ?
                            <Image style={{ height: "auto", width: "auto" }}
                                src={"/companies/coming.png"} alt={props.ProjectName} width={800} height={100} className={`object-cover p-2  relative z-88 `} quality={100} priority />
                            :
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, scale: hoverImage.length > 0 ? 1.1 : 1 }}
                                transition={{ duration: 0.5 }}>
                                <Image style={{ height: "auto", width: "auto" }} src={hoverImage ? hoverImage : props.CompanyImage} alt={props.ProjectName} width={800} height={100}
                                    className="project-image object-cover p-2  relative z-88 " quality={100} priority />
                            </motion.div>}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: hoverIndex === -1 ? 0 : 1 }}
                        animate={{ opacity: hoverIndex !== -1 ? 1 : 0 }}
                        key={props.index + "__" + props.ProjectName} className="relative  max-[600px]:hidden">
                        {props.hoverImage ? props.hoverImage.map((image, index) => {
                            const top = (180 + index) + (index * 50);
                            const left = (400 * index) + (index * 2)

                            return (
                                <motion.div
                                    onHoverStart={() => {
                                        setHoverImage(image)
                                        setHoverIndex(() => {
                                            return index;
                                        })
                                    }}
                                    style={{ left: left + "px", top: -top + "px", height: "7rem" }}
                                    key={image + "__" + index}
                                    variants={popImage} initial={{ opacity: 0, scale: 1 }}
                                    animate={{ opacity: hoverIndex === index ? 1 : 0.8 }}
                                    transition={{
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 200,
                                        duration: 1,
                                    }}
                                    whileHover={{ scale: hoverIndex === index ? 2 : 1, opacity: hoverIndex === index ? 1 : 0.9 }}
                                    className={`absolute  -z-10 bottom-0  w-[200px] h-[200px]`}>
                                    <Image
                                        style={{ height: "auto", width: "auto" }}
                                        src={props.comingSoon ? "/companies/coming.png" : image} alt={props.ProjectName} width={800} height={100} className={`   object-cover p-2  relative z-88 `} quality={100} priority />
                                </motion.div>
                            )
                        }) : null}
                    </motion.div>
                </motion.div>
                <motion.div
                    key={props.ProjectName + "__" + props.Year}
                    className='max-[1200px]:overflow-hidden   p-5 left-3  max-[900px]:w-[100vw]  lg:w-10/12 xl:w-4/12 relative' variants={onView}>
                    <motion.h3
                        variants={onView}
                        initial="init"
                        whileInView="whileOnView"
                        className='relative text-4xl font-bold ' style={{ color: props.titleColor }}>{props.ProjectName}</motion.h3>
                    <motion.h5
                        variants={onView}
                        initial="init"
                        whileInView="whileOnView"
                        className='relative' style={{ color: props.color }}>{props.Role}</motion.h5>
                    <motion.span
                        variants={onView}
                        initial="init"
                        whileInView="whileOnView"
                        className="relative" style={{ color: props.color }}>{props.Year}</motion.span>
                    <motion.p
                        variants={onView}
                        initial="init"
                        whileInView="whileOnView"

                        className='relative lg:w-full md:w-10/12 leading-7 mt-5 sm:text-lg' style={{ color: props.color }}>{props.Description}</motion.p>
                    <motion.button
                    onClick={()=>
                        router.push(`/work/${props.ProjectName}`)

                    }
                        disabled={props.comingSoon}
                        style={{ cursor: props.comingSoon ? "not-allowed" : "pointer", }}

                        whileHover={{
                            skewY: 3,
                            scale: 1.1,
                            boxShadow: "0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)"
                        }}
                        initial={{ background: props.buttonColor, left: "-100vw" }}
                        animate={{ left: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative  h-12 w-40 p-3  mt-14"><span className="font-Poppins  text-white">{props.comingSoon ? "In-Development" : "View"}</span></motion.button>
                </motion.div>
            </div>
        </div>
    )
}


export default ProjectImage;