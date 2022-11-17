import { NextPage } from "next/types"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const imUrl = [
    {
        url: "/companies/Malith_AB Logo (1)-01 (2) 2.png ",
        color: "#D9B191",
        name: 'MORJOY CANDLES',
        CompanyImage: "/companies/MorJoy_Candles.png",
        Role: "Front-End Developer",
        description: "",
        year: "2022",
        titleColor: "",

        backdrop: ' linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(217, 177, 145, 0.2) 100%)',
        background: 'conic-gradient(from 197.57deg at 60% 50%, rgba(255, 255, 255, 0.78) -92.78deg, rgba(216, 177, 146, 0.2) 116.53deg, rgba(255, 255, 255, 0.78) 267.22deg, rgba(216, 177, 146, 0.2) 476.53deg)'
    },
    {
        url: "/companies/aurox.png",
        color: "#324670",
        name: "AUROX",
        year: "2022",
        CompanyImage: "/companies/aurox_home.png",
        Role: "Front-End Developer",
        description: "",
        titleColor: "",

        backdrop: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(62, 81, 119, 0.1) 100%)",
        background: " conic-gradient(from 12.23deg at 54.33% 52.5%, #FFFFFF -142.11deg, rgba(40, 58, 94, 0.2) 120.95deg, #FFFFFF 217.89deg, rgba(40, 58, 94, 0.2) 480.95deg)"
    },
    {
        url: "/companies/ARS_Logo_Primary_Gradient_Transparent_Vertical_BlackType 2.png",
        color: "#ED284C",
        background: "conic-gradient(from 186.4deg at 55.15% 54.06%, #FFFFFF -153.3deg, rgba(241, 88, 46, 0.2) 63.75deg, #FFFFFF 206.7deg, rgba(241, 88, 46, 0.2) 423.75deg)",
        name: "ALSLE ROCKET",
        year: "2022",
        titleColor: "#F26527",
        CompanyImage: "/companies/Aisle.png",
        Role: "Front-End Developer",
        description: "",
        backdrop: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(242, 101, 39, 0.1) 100%)",

    },






]

const Work: NextPage = () => {
    //box shadow when you over it 
    const [position, setPosition] = useState(0)
    const [scrollposition, setScrollPosition] = useState(0)
    const paraRef = useRef<HTMLDivElement>(null) as any

    const nextMove = () => {
        console.log("next")
        // setPosition(position+1)

        if (position < imUrl.length - 1) {
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
            //markers:true,
            onEnter: () => {

                setScrollPosition(0)

            },

        })
        ScrollTrigger.create({
            trigger: "#second",
            start: "top top",
            //markers:true,
            onEnter: () => {

                setScrollPosition(1)


            },


        })
        ScrollTrigger.create({
            trigger: "#third",
            start: "top top",
            //markers:true,
            onEnter: () => {

                setScrollPosition(2)

            },

        })

    })
    /*     position: absolute;
    top: 0;

       <div className="relative z-50" onClick={nextMove}>next</div>
                <div className="relative z-50" onClick={prevMove}>prev</div>
    bottom: 80px;
    z-index: -1;  use this*/

    return (
        <>

            <div className=" flex items-center flex-col max-[900px]:hidden relative   ">


                <motion.div
                    initial={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    animate={{
                        background: imUrl[position].backdrop
                    }}
                    transition={{
                        type: "spring",

                        stiffness: 200,
                        damping: 20
                    }}

                    className="absolute  h-screen left-0 right-0 " ></motion.div>


                {imUrl.map((data, index) => {
                    return (
                        <motion.div
                            initial={{
                                position: index !== position ? "absolute" : "relative",
                                opacity: index !== position ? 0 : 1,
                                zIndex: index != position ? -1 : 1
                            }}
                            animate={{
                                position: index === position ? "relative" : 'absolute',
                                opacity: index === position ? 1 : 0,
                                zIndex: index == position ? 1 : -1

                            }}
                            transition={{
                                easings: [0.1, 1, 0.1, 1]
                            }}
                            className="grid grid-cols-2  place-items-center  max-[1180px]:mt-5 mt-20">

                            <div className="ml-5 md:ml-14 ">
                                <h2 className="text-4xl text-[#060D1C] font-bold font-Poppins">{data.name}</h2>
                                <p className="font-Poppins text-[#6983B7]">{data.Role}</p>
                                <p className="font-Poppins text-[#6983B7]">{data.year}</p>
                                <div className="flex w-[100%]  ">
                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",

                                            stiffness: 200,
                                            damping: 6
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                        <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                                    </motion.svg>

                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",

                                            stiffness: 200,
                                            damping: 6
                                        }}

                                        xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                        <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                                    </motion.svg>


                                </div>


                                <motion.button
                                    whileHover={{
                                        boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                                    }}
                                    initial={{
                                        background: data.color
                                    }}
                                    animate={{
                                        background: data.color
                                    }}
                                    transition={{
                                        easings: [0.1, 1, 0.1, 1]

                                    }}

                                    style={{

                                    }} className="    h-14 w-52 "><span className="font-Poppins text-white">View</span></motion.button>

                            </div>
                            <div className="bg-slate-600">
                                <Image src={data.CompanyImage} alt="aurora" width={800} height={100} className="  object-cover md:object-cover h-auto w-auto " quality={100} priority />
                            </div>
                        </motion.div>
                    )
                })}

































                {/* nav*/}
                <div className="flex justify-center items-center  w-full mt-20 relative">
                    <div className="flex  relative ">
                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                                background: imUrl[position].color
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                left: `${position * +150}px`,
                                background: imUrl[position].color


                            }}
                            transition={{
                                type: "spring",

                                stiffness: 200,
                                damping: 20
                            }}
                            className={`absolute  right-0 left-0 -bottom-[70px] }] h-3 w-20`} style={{ boxShadow: ' 0px 39px 16px rgba(0, 0, 0, 0.01), 0px 22px 13px rgba(0, 0, 0, 0.05), 0px 10px 10px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}  ></motion.div>

                        <div className="flex justify-between items-center  w-96  ">
                            {imUrl.map((src, index) => (

                                <motion.div


                                    animate={{
                                        background: index === position ?
                                            src.background : ' conic-gradient(from 192.62deg at 61.19% 50%, rgba(255, 255, 255, 0.5) -120deg, #FFFFFF 114.18deg, rgba(255, 255, 255, 0.5) 240deg, #FFFFFF 474.18deg)',
                                        // boxShadow: index === position ? src.background : "none"
                                    }}
                                    transition={{

                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20,


                                    }}
                                    key={src.url} className=" w-20 h-20 rounded-full  text-center">
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

                                        className={`mt-4 relative font-Poppins font-bold text-[${src.color}] text-md text-center`}>{src.name}</motion.h3>

                                </motion.div>
                            ))}




                        </div>


                    </div>
                </div>
            </div>



            {/* cchange the position as you are scroll*/}
            <div className="min-[900px]:hidden relative p-5">
                <motion.div
                    initial={{
                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    animate={{
                        background: imUrl[scrollposition].backdrop
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
                            <button style={{
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>

                        </div>
                    </div>
                    <div className="w-full md:w-full mt-14   " id="first">
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
                            <button style={{
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>

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
                            <button style={{
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>

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
                            <button style={{
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>

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
                            <button style={{
                                boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                            }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>

                        </div>
                    </div>


                </div>





            </div>
        </>
    )
}
export default Work





/* 

<div className="absolute  h-1/6 left-0 right-0 bottom-0" style={{ background: ' linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(62, 81, 119, 0.2) 100%)' }}></div>

  <div className=" relative flex flex-col-reverse     items-start  ">
                    <div className="ml-5 md:ml-14 ">
                        <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins mb-2 ">ALSLE ROCKET</h2>
                        <p className="font-Poppins text-[#6983B7]">Front End Developer</p>
                        <button style={{
                            boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                        }} className="  bg-[#324670] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>

                    </div>
                    <div className="  m-auto relative">
                        <Image src="/companies/auro_home.png" alt="aurora" width={700} height={100} className="lg:aspect-square  max-sm:aspect-square p-5   object-cover md:object-contain" priority />
                    </div>


                </div>

                      <div className="  relative flex flex-col-reverse    w-full justify-center  items-start ">
                    <div className="ml-5 md:ml-14">
                        <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins">ALSLE ROCKET</h2>
                        <p className="font-Poppins text-[#F26527]">Front End Developer</p>
                        <button style={{
                            boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                        }} className="  bg-[#F26527] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>
                    </div>
                    <div className="  m-auto relative">
                        <Image src="/companies/Aisel.png" alt="aurora" width={700} height={500} className=" lg:aspect-square  max-sm:aspect-square  p-5 object-cover md:object-contain"  priority/>
                    </div>


                </div>

                      <div className="  relative flex flex-col-reverse    w-full justify-center  items-start  ">
                    <div className="ml-5 md:ml-14">
                        <h2 className="text-3xl text-[#060D1C] font-bold font-Poppins">ALSLE ROCKET</h2>
                        <p className="text-[#dd8944]">Front End Developer</p>
                        <button style={{
                            boxShadow: "0px 66px 27px rgba(23, 25, 28, 0.01), 0px 37px 22px rgba(23, 25, 28, 0.05), 0px 17px 17px rgba(23, 25, 28, 0.09), 0px 4px 9px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)"
                        }} className="  bg-[#D9B191] h-14 w-52 mt-12 mb-32"><span className="font-Poppins text-white">View</span></button>                </div>
                    <div className="   m-auto relative">
                        <Image src="/companies/MorJoy_Candles.png" alt="aurora" width={700} height={100} className="  max-sm:aspect-square  object-cover md:object-contain" priority/>
                    </div>


                </div>

*/









/* 


                <div className="grid grid-cols-1  lg:grid-cols-2   place-items-center">
                    <div>Company name</div>
                    <div className=" w-[90vw]   aspect-auto h-[35vh]   lg:w-[50vw]  lg:h-[70vh] md:w-[90vw] md:h-[50vh] relative">
                        <Image src="/companies/auro_home.png" alt="aurora" fill />
                    </div>
                </div>
             
                <div className="grid grid-cols-1  md:grid-cols-2 place-items-center">
                <div className="  w-[50vw] h-[50vh] relative">
                        <Image src="/companies/auro_home.png" alt="aurora"  fill />
                    </div>
                    <div>Company name</div>
                  
                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 place-items-center">
                    <div>Company name</div>
                    <div className=" w-[50vw] h-[70vh] relative">
                        <Image src="/companies/auro_home.png" alt="aurora" fill />
                    </div>
                </div>


   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center   	">

                    <div style={{
                        background: "conic-gradient(from 12.23deg at 54.33% 52.5%, #FFFFFF -142.11deg, rgba(40, 58, 94, 0.2) 120.95deg, #FFFFFF 217.89deg, rgba(40, 58, 94, 0.2) 480.95deg)",
                        boxShadow: ' 0px 185px 74px rgba(32, 37, 42, 0.01), 0px 104px 62px rgba(32, 37, 42, 0.05), 0px 46px 46px rgba(32, 37, 42, 0.09), 0px 12px 25px rgba(32, 37, 42, 0.1), 0px 0px 0px rgba(32, 37, 42, 0.1)'

                    }}
                        className=" border-[0.1px]	border-[#0b172773] h-[320px] w-[320px]  md:h-[320px] md:w-[320px] ">
                        <Image src="/companies/aurox.png" alt="Aurox" width={200} height={200} className="block m-auto mt-20" quality={100} />
                    </div>
                    <div className="  relative border-[0.1px]	border-[#0b172773] h-[320px] w-[320px]   md:h-[320px] md:w-[320px] ">

                        <div className="flex justify-center flex-col items-center relative mt-12">
                            <h3 className="text-[#060D1C] uppercase font-Poppins font-bold text-2xl">aurox</h3>
                            <p className=" text-[#6983B7] font-Poppins text-[14px] mt-5">Front-End Developer</p>

                            <div className="flex mt-5 w-[100%] justify-evenly pr-2 pl-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                    <path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                    <path d="M15.092 22.146c-0.015 0.030-0.030 0.054 0 0zM27.548 17.796c-1.006-0-1.998 0.23-2.9 0.675-0.295-0.595-0.6-1.115-0.65-1.505-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.715-0.335s-1.2 0.125-1.265 0.295c-0.114 0.311-0.203 0.63-0.265 0.955-0.115 0.585-1.289 2.675-1.954 3.765-0.22-0.425-0.405-0.8-0.445-1.1-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.714-0.335s-1.2 0.125-1.265 0.295c-0.065 0.17-0.135 0.57-0.265 0.955s-1.695 3.865-2.104 4.77c-0.21 0.46-0.39 0.83-0.52 1.080-0.020 0.040-0.035 0.065-0.045 0.085 0.015-0.025 0.025-0.050 0.025-0.040-0.11 0.215-0.175 0.335-0.175 0.335v0.005c-0.085 0.16-0.18 0.305-0.225 0.305-0.030 0-0.095-0.42 0.015-0.995 0.235-1.21 0.79-3.090 0.785-3.155-0.005-0.035 0.105-0.36-0.365-0.535-0.455-0.165-0.62 0.11-0.66 0.11s-0.070 0.1-0.070 0.1c0 0 0.505-2.12-0.97-2.12-0.92 0-2.2 1.010-2.829 1.925-0.395 0.215-1.25 0.68-2.15 1.175-0.345 0.19-0.7 0.385-1.035 0.57-0.025-0.025-0.045-0.050-0.070-0.075-1.79-1.91-5.094-3.26-4.954-5.825 0.050-0.935 0.375-3.39 6.354-6.37 4.9-2.44 8.817-1.77 9.492-0.28 0.97 2.125-2.095 6.080-7.183 6.65-1.94 0.215-2.959-0.535-3.214-0.815-0.265-0.295-0.305-0.31-0.405-0.255-0.165 0.090-0.060 0.35 0 0.505 0.15 0.395 0.775 1.095 1.84 1.445 0.935 0.305 3.209 0.475 5.958-0.59 3.089-1.19 5.494-4.505 4.788-7.28-0.718-2.82-5.394-3.745-9.815-2.175-2.635 0.935-5.484 2.405-7.533 4.32-2.435 2.28-2.824 4.265-2.664 5.095 0.57 2.945 4.629 4.865 6.253 6.285-0.080 0.045-0.155 0.085-0.225 0.125-0.815 0.405-3.909 2.025-4.684 3.735-0.875 1.94 0.145 3.33 0.814 3.52 2.090 0.58 4.229-0.465 5.379-2.18s1.010-3.955 0.48-4.975c-0.005-0.015-0.015-0.025-0.020-0.040 0.21-0.125 0.425-0.25 0.64-0.375 0.415-0.245 0.82-0.47 1.175-0.665-0.2 0.54-0.345 1.19-0.42 2.13-0.090 1.1 0.365 2.525 0.955 3.085 0.26 0.245 0.574 0.25 0.77 0.25 0.69 0 1-0.57 1.345-1.25 0.425-0.83 0.8-1.795 0.8-1.795s-0.47 2.61 0.815 2.61c0.47 0 0.94-0.605 1.15-0.915v0.005c0 0 0.010-0.020 0.035-0.060 0.050-0.075 0.075-0.12 0.075-0.12v-0.015c0.19-0.325 0.605-1.070 1.23-2.3 0.81-1.59 1.584-3.575 1.584-3.575 0.075 0.436 0.179 0.867 0.31 1.29 0.14 0.475 0.435 0.995 0.67 1.5-0.19 0.26-0.305 0.41-0.305 0.41 0 0.004 0.002 0.007 0.005 0.010-0.15 0.2-0.32 0.415-0.495 0.625-0.639 0.76-1.4 1.63-1.5 1.88-0.12 0.295-0.090 0.515 0.14 0.685 0.17 0.13 0.47 0.15 0.785 0.125 0.575-0.040 0.98-0.18 1.175-0.27 0.36-0.129 0.699-0.307 1.010-0.53 0.625-0.46 1.005-1.12 0.97-1.99-0.020-0.48-0.175-0.96-0.365-1.41 0.055-0.080 0.115-0.165 0.17-0.25 0.989-1.445 1.755-3.031 1.755-3.031 0.075 0.436 0.178 0.867 0.31 1.29 0.12 0.405 0.355 0.85 0.57 1.285-0.93 0.755-1.505 1.63-1.704 2.205-0.37 1.065-0.080 1.545 0.465 1.655 0.245 0.050 0.595-0.065 0.855-0.175 0.386-0.129 0.75-0.316 1.079-0.555 0.625-0.46 1.23-1.105 1.189-1.98-0.015-0.395-0.125-0.79-0.27-1.17 0.785-0.33 1.805-0.51 3.105-0.36 2.784 0.325 3.329 2.065 3.224 2.79s-0.69 1.13-0.885 1.25c-0.195 0.12-0.255 0.165-0.24 0.255 0.025 0.13 0.115 0.125 0.28 0.095 0.23-0.040 1.46-0.59 1.515-1.935 0.080-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-0.92 1.005-2.209 1.385-2.764 1.065-0.595-0.346-0.36-1.825 0.774-2.896 0.69-0.65 1.58-1.25 2.17-1.62 0.135-0.080 0.33-0.2 0.57-0.345 0.040-0.025 0.060-0.035 0.060-0.035 0.045-0.030 0.095-0.055 0.145-0.085 0.414 1.52 0.015 2.86-0.955 3.915zM12.807 20.461c-0.32 0.785-0.994 2.785-1.405 2.68-0.35-0.090-0.565-1.615-0.070-3.115 0.25-0.755 0.78-1.655 1.095-2.005 0.505-0.565 1.060-0.745 1.19-0.52 0.175 0.295-0.61 2.47-0.81 2.96zM18.357 23.111c-0.135 0.070-0.26 0.115-0.32 0.080-0.045-0.025 0.055-0.12 0.055-0.12s0.695-0.745 0.97-1.085c0.16-0.2 0.345-0.435 0.545-0.695 0 0.025 0.005 0.050 0.005 0.080-0.006 0.895-0.866 1.5-1.256 1.74zM22.637 22.136c-0.1-0.070-0.085-0.305 0.25-1.035 0.13-0.285 0.43-0.765 0.95-1.225 0.059 0.174 0.091 0.356 0.095 0.54-0.005 1.125-0.81 1.545-1.295 1.72z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                    <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#324670">
                                    <path d="M4 2l2.181 24.738 9.819 3.262 9.819-3.262 2.181-24.738zM23.569 7l-0.3 2.956-7.225 3.087h6.969l-0.8 9.163-6.137 1.794-6.175-1.825-0.4-4.619h3.056l0.2 2.394 3.287 0.831 3.419-0.962 0.231-3.85-10.406-0.031-0.225-2.894 7.413-3.087h-7.681l-0.363-2.956z" />
                                </svg>


                            </div>


                            <button className="mt-12 bg-[#324670] w-36 h-auto p-1 text-white">Visit</button>

                        </div>
                        <h2 className=" text-3xl text-[#111A2E] absolute left-5 bottom-2">01</h2>

                    </div>



                    <div style={{
                        background: "conic-gradient(from 186.4deg at 55.15% 54.06%, #FFFFFF -153.3deg, rgba(241, 88, 46, 0.2) 63.75deg, #FFFFFF 206.7deg, rgba(241, 88, 46, 0.2) 423.75deg)"
                    }}
                        className=" border-[0.1px]	border-[#0b172773] h-[320px] w-[320px]    md:h-[320px] md:w-[320px]">
                        <Image src="/companies/ARS_Logo_Primary_Gradient_Transparent_Vertical_BlackType 2.png" alt="ALSLE ROCKET" width={200} height={200} className="block m-auto mt-20" quality={100} />
                    </div>
                    <div className="  relative border-[0.1px] 	border-[#0b172773] h-[320px] w-[320px]   md:h-[320px] md:w-[320px] ">

                        <div className="flex justify-center flex-col items-center relative mt-12">
                            <h3 className="text-[#060D1C] uppercase font-Poppins font-bold text-2xl">ALSLE ROCKET</h3>
                            <p className=" text-[#6983B7] font-Poppins text-sm mt-5">Front-End Developer</p>
                            <div className="flex mt-5 w-[100%] justify-evenly pr-2 pl-2 mb-2">

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#F26527">
                                    <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#F26527">
                                    <path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#F26527">
                                    <path d="M0 0h32v32h-32zM29.38 24.37c-0.234-1.464-1.188-2.688-4.005-3.833-0.979-0.458-2.073-0.781-2.396-1.521-0.12-0.438-0.141-0.677-0.063-0.938 0.203-0.865 1.219-1.12 2.021-0.88 0.521 0.161 1 0.557 1.302 1.198 1.38-0.901 1.38-0.901 2.339-1.5-0.359-0.557-0.536-0.802-0.781-1.036-0.839-0.943-1.958-1.422-3.776-1.38l-0.943 0.12c-0.901 0.219-1.76 0.698-2.281 1.339-1.516 1.719-1.078 4.719 0.76 5.964 1.818 1.359 4.479 1.656 4.823 2.938 0.318 1.563-1.161 2.063-2.625 1.88-1.078-0.24-1.677-0.781-2.339-1.781l-2.438 1.401c0.276 0.641 0.599 0.917 1.078 1.479 2.318 2.339 8.12 2.219 9.161-1.339 0.036-0.12 0.318-0.943 0.099-2.198zM17.401 14.708h-2.995c0 2.583-0.016 5.151-0.016 7.74 0 1.641 0.083 3.151-0.182 3.615-0.443 0.917-1.573 0.802-2.089 0.641-0.526-0.26-0.797-0.62-1.104-1.141-0.089-0.141-0.151-0.26-0.172-0.26l-2.432 1.5c0.406 0.839 1 1.563 1.766 2.021 1.141 0.682 2.672 0.901 4.276 0.542 1.042-0.302 1.943-0.922 2.411-1.88 0.682-1.24 0.536-2.76 0.531-4.464 0.016-2.74 0-5.479 0-8.24z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#F26527">
                                    <path d="M4 2l2.181 24.738 9.819 3.262 9.819-3.262 2.181-24.738zM23.569 7l-0.3 2.956-7.225 3.087h6.969l-0.8 9.163-6.137 1.794-6.175-1.825-0.4-4.619h3.056l0.2 2.394 3.287 0.831 3.419-0.962 0.231-3.85-10.406-0.031-0.225-2.894 7.413-3.087h-7.681l-0.363-2.956z" />
                                </svg>


                            </div>


                            <button className="mt-12 bg-[#F26527] w-36 h-auto p-1 text-white">Visit</button>
                        </div>
                        <h2 className=" text-3xl text-[#F1582F] absolute left-5 bottom-2">02</h2>

                    </div>



                    <div
                        style={{

                        }}
                        className="  border-[0.1px]	border-[#0b172773]  h-[320px] w-[320px]   md:h-[320px] md:w-[320px]">


                    </div>
                    <div
                        style={{
                            background: "conic-gradient(from 197.57deg at 60% 50%, rgba(255, 255, 255, 0.78) -92.78deg, rgba(216, 177, 146, 0.2) 116.53deg, rgba(255, 255, 255, 0.78) 267.22deg, rgba(216, 177, 146, 0.2) 476.53deg)"

                        }}
                        className=" border-[0.1px]	border-[#0b172773] h-[320px] w-[320px]   md:h-[320px] md:w-[320px]">
                        <Image src="/companies/Malith_AB Logo (1)-01 (2) 2.png" alt="MorJoy Candles" width={200} height={200} className="block m-auto mt-20" quality={100} />

                    </div>
                    <div className=" relative border-[0.1px]	border-[#0b172773] h-[320px] w-[320px]    md:h-[320px] md:w-[320px] ">
                        <div className="flex	justify-center flex-col  	 items-center relative mt-12">
                            <h3 className="text-[#060D1C] uppercase font-Poppins font-bold text-2xl">Onye</h3>
                            <p className=" text-[#6983B7] font-Poppins text-sm mt-1">Front-End Developer/UI/UX</p>
                            <div className="  w-full flex flex-wrap  	 mt-1 pt-1  pr-5 pl-5 mb-2">
                                <div className="basis-10"><svg   xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32" fill="#389B98">
                                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                                </svg></div>
                                <div className=" basis-10"><svg   xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32" fill="#389B98">
                                    <path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z" />
                                </svg></div>
                                <div className="basis-10">  <svg   xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32" fill="#389B98">
                                    <path d="M15.092 22.146c-0.015 0.030-0.030 0.054 0 0zM27.548 17.796c-1.006-0-1.998 0.23-2.9 0.675-0.295-0.595-0.6-1.115-0.65-1.505-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.715-0.335s-1.2 0.125-1.265 0.295c-0.114 0.311-0.203 0.63-0.265 0.955-0.115 0.585-1.289 2.675-1.954 3.765-0.22-0.425-0.405-0.8-0.445-1.1-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.714-0.335s-1.2 0.125-1.265 0.295c-0.065 0.17-0.135 0.57-0.265 0.955s-1.695 3.865-2.104 4.77c-0.21 0.46-0.39 0.83-0.52 1.080-0.020 0.040-0.035 0.065-0.045 0.085 0.015-0.025 0.025-0.050 0.025-0.040-0.11 0.215-0.175 0.335-0.175 0.335v0.005c-0.085 0.16-0.18 0.305-0.225 0.305-0.030 0-0.095-0.42 0.015-0.995 0.235-1.21 0.79-3.090 0.785-3.155-0.005-0.035 0.105-0.36-0.365-0.535-0.455-0.165-0.62 0.11-0.66 0.11s-0.070 0.1-0.070 0.1c0 0 0.505-2.12-0.97-2.12-0.92 0-2.2 1.010-2.829 1.925-0.395 0.215-1.25 0.68-2.15 1.175-0.345 0.19-0.7 0.385-1.035 0.57-0.025-0.025-0.045-0.050-0.070-0.075-1.79-1.91-5.094-3.26-4.954-5.825 0.050-0.935 0.375-3.39 6.354-6.37 4.9-2.44 8.817-1.77 9.492-0.28 0.97 2.125-2.095 6.080-7.183 6.65-1.94 0.215-2.959-0.535-3.214-0.815-0.265-0.295-0.305-0.31-0.405-0.255-0.165 0.090-0.060 0.35 0 0.505 0.15 0.395 0.775 1.095 1.84 1.445 0.935 0.305 3.209 0.475 5.958-0.59 3.089-1.19 5.494-4.505 4.788-7.28-0.718-2.82-5.394-3.745-9.815-2.175-2.635 0.935-5.484 2.405-7.533 4.32-2.435 2.28-2.824 4.265-2.664 5.095 0.57 2.945 4.629 4.865 6.253 6.285-0.080 0.045-0.155 0.085-0.225 0.125-0.815 0.405-3.909 2.025-4.684 3.735-0.875 1.94 0.145 3.33 0.814 3.52 2.090 0.58 4.229-0.465 5.379-2.18s1.010-3.955 0.48-4.975c-0.005-0.015-0.015-0.025-0.020-0.040 0.21-0.125 0.425-0.25 0.64-0.375 0.415-0.245 0.82-0.47 1.175-0.665-0.2 0.54-0.345 1.19-0.42 2.13-0.090 1.1 0.365 2.525 0.955 3.085 0.26 0.245 0.574 0.25 0.77 0.25 0.69 0 1-0.57 1.345-1.25 0.425-0.83 0.8-1.795 0.8-1.795s-0.47 2.61 0.815 2.61c0.47 0 0.94-0.605 1.15-0.915v0.005c0 0 0.010-0.020 0.035-0.060 0.050-0.075 0.075-0.12 0.075-0.12v-0.015c0.19-0.325 0.605-1.070 1.23-2.3 0.81-1.59 1.584-3.575 1.584-3.575 0.075 0.436 0.179 0.867 0.31 1.29 0.14 0.475 0.435 0.995 0.67 1.5-0.19 0.26-0.305 0.41-0.305 0.41 0 0.004 0.002 0.007 0.005 0.010-0.15 0.2-0.32 0.415-0.495 0.625-0.639 0.76-1.4 1.63-1.5 1.88-0.12 0.295-0.090 0.515 0.14 0.685 0.17 0.13 0.47 0.15 0.785 0.125 0.575-0.040 0.98-0.18 1.175-0.27 0.36-0.129 0.699-0.307 1.010-0.53 0.625-0.46 1.005-1.12 0.97-1.99-0.020-0.48-0.175-0.96-0.365-1.41 0.055-0.080 0.115-0.165 0.17-0.25 0.989-1.445 1.755-3.031 1.755-3.031 0.075 0.436 0.178 0.867 0.31 1.29 0.12 0.405 0.355 0.85 0.57 1.285-0.93 0.755-1.505 1.63-1.704 2.205-0.37 1.065-0.080 1.545 0.465 1.655 0.245 0.050 0.595-0.065 0.855-0.175 0.386-0.129 0.75-0.316 1.079-0.555 0.625-0.46 1.23-1.105 1.189-1.98-0.015-0.395-0.125-0.79-0.27-1.17 0.785-0.33 1.805-0.51 3.105-0.36 2.784 0.325 3.329 2.065 3.224 2.79s-0.69 1.13-0.885 1.25c-0.195 0.12-0.255 0.165-0.24 0.255 0.025 0.13 0.115 0.125 0.28 0.095 0.23-0.040 1.46-0.59 1.515-1.935 0.080-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-0.92 1.005-2.209 1.385-2.764 1.065-0.595-0.346-0.36-1.825 0.774-2.896 0.69-0.65 1.58-1.25 2.17-1.62 0.135-0.080 0.33-0.2 0.57-0.345 0.040-0.025 0.060-0.035 0.060-0.035 0.045-0.030 0.095-0.055 0.145-0.085 0.414 1.52 0.015 2.86-0.955 3.915zM12.807 20.461c-0.32 0.785-0.994 2.785-1.405 2.68-0.35-0.090-0.565-1.615-0.070-3.115 0.25-0.755 0.78-1.655 1.095-2.005 0.505-0.565 1.060-0.745 1.19-0.52 0.175 0.295-0.61 2.47-0.81 2.96zM18.357 23.111c-0.135 0.070-0.26 0.115-0.32 0.080-0.045-0.025 0.055-0.12 0.055-0.12s0.695-0.745 0.97-1.085c0.16-0.2 0.345-0.435 0.545-0.695 0 0.025 0.005 0.050 0.005 0.080-0.006 0.895-0.866 1.5-1.256 1.74zM22.637 22.136c-0.1-0.070-0.085-0.305 0.25-1.035 0.13-0.285 0.43-0.765 0.95-1.225 0.059 0.174 0.091 0.356 0.095 0.54-0.005 1.125-0.81 1.545-1.295 1.72z" />
                                </svg></div>
                                <div className=" basis-10">   <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32" fill="#389B98">
                                    <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z" />
                                </svg></div>
                                <div className=" basis-10">  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32" fill="#389B98">
                                    <path d="M4 2l2.181 24.738 9.819 3.262 9.819-3.262 2.181-24.738zM23.569 7l-0.3 2.956-7.225 3.087h6.969l-0.8 9.163-6.137 1.794-6.175-1.825-0.4-4.619h3.056l0.2 2.394 3.287 0.831 3.419-0.962 0.231-3.85-10.406-0.031-0.225-2.894 7.413-3.087h-7.681l-0.363-2.956z" />
                                </svg></div>
                                <div className="basis-10 "><svg   fill="#389B98" xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32">
                                    <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
                                </svg></div>
                                <div   className=" basis-10 "> <svg  fill="#389B98" xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32">
                                    <path d="M16 16c0-7.109 10.667-7.109 10.667 0s-10.667 7.109-10.667 0zM5.333 26.667c0-2.948 2.385-5.333 5.333-5.333h5.333v5.333c0 7.109-10.667 7.109-10.667 0zM16 0v10.667h5.333c7.109 0 7.109-10.667 0-10.667zM5.333 5.333c0 2.948 2.385 5.333 5.333 5.333h5.333v-10.667h-5.333c-2.948 0-5.333 2.385-5.333 5.333zM5.333 16c0 2.948 2.385 5.333 5.333 5.333h5.333v-10.667h-5.333c-2.948 0-5.333 2.385-5.333 5.333z" />
                                </svg></div>
                                <div className=" basis-10">   <svg  fill="#389B98" xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32">
                                    <path d="M22.177 22.005c1.161-0.099 2.057-1.12 2-2.339-0.063-1.219-1.063-2.197-2.276-2.197h-0.084c-1.255 0.041-2.239 1.099-2.197 2.359 0.041 0.641 0.301 1.156 0.661 1.536-1.401 2.719-3.495 4.715-6.677 6.396-2.135 1.115-4.391 1.537-6.588 1.235-1.839-0.255-3.276-1.077-4.156-2.396-1.319-2-1.439-4.151-0.339-6.312 0.801-1.557 2-2.699 2.796-3.256-0.197-0.52-0.437-1.395-0.557-2.057-5.916 4.235-5.312 10.032-3.515 12.767 1.339 2 4.072 3.276 7.067 3.276 0.803 0 1.641-0.057 2.459-0.261 5.199-1 9.131-4.115 11.385-8.708zM29.307 17.011c-3.093-3.636-7.651-5.636-12.843-5.636h-0.683c-0.333-0.735-1.115-1.197-1.995-1.197h-0.057c-1.26 0-2.24 1.083-2.199 2.339 0.043 1.197 1.057 2.197 2.276 2.197h0.1c0.9-0.041 1.677-0.599 2-1.401h0.739c3.079 0 5.991 0.901 8.652 2.657 2.031 1.337 3.495 3.099 4.312 5.197 0.719 1.713 0.677 3.396-0.063 4.797-1.135 2.192-3.057 3.353-5.588 3.353-1.599 0-3.156-0.5-3.959-0.859-0.479 0.396-1.281 1.057-1.86 1.459 1.761 0.796 3.537 1.255 5.256 1.255 3.896 0 6.792-2.193 7.891-4.312 1.197-2.396 1.099-6.433-1.959-9.891zM8.651 22.724c0.043 1.197 1.057 2.197 2.281 2.197h0.079c1.281-0.041 2.255-1.099 2.197-2.359 0-1.199-1.036-2.199-2.255-2.199h-0.084c-0.077 0-0.197 0-0.301 0.043-1.656-2.797-2.355-5.797-2.095-9.032 0.157-2.437 0.959-4.552 2.396-6.312 1.199-1.495 3.453-2.24 4.995-2.276 4.313-0.084 6.115 5.296 6.251 7.432l2 0.599c-0.464-6.552-4.536-9.989-8.432-9.989-3.656 0-7.032 2.656-8.391 6.552-1.855 5.199-0.636 10.188 1.64 14.188-0.197 0.255-0.317 0.719-0.281 1.156z" />
                                </svg></div>
                                <div className=" basis-10 ">   <svg  fill="#389B98" xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 32 32">
                                    <path d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z" />
                                </svg></div>
                        


                            </div>



                            <button style={{ boxShadow: "0px 53px 21px rgba(0, 0, 0, 0.01), 0px 30px 18px rgba(0, 0, 0, 0.05), 0px 13px 13px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)" }}
                                className="mt-2  bg-[#324670] w-36 h-auto p-1 text-white">Visit</button>

                        </div>
                        <h2 className=" text-3xl text-[#389B98] absolute left-5 bottom-2">03</h2>



                    </div>
                    <div
                        style={{

                            background: "conic-gradient(from 42.99deg at 53.57% 53.1%, rgba(255, 255, 255, 0.87) -92.78deg, rgba(56, 155, 152, 0.2) 104.38deg, rgba(255, 255, 255, 0.87) 267.22deg, rgba(56, 155, 152, 0.2) 464.38deg)"
                        }}
                        className="  border-[0.1px]	border-[#0b172773] h-[320px] w-[320px]  md:h-[320px] md:w-[320px] ">
                        <Image src="/companies/onye_logo_Colour-Full 3.png" alt="Aurox" width={200} height={200} className="block m-auto mt-20" quality={100} />

                    </div>

                </div>


    <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 32 32" fill="#389B98">
                                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                                </svg>
                                


                              
                             
                              
                                
                               
                             
                             


*/