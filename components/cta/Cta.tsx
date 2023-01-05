import { motion } from "framer-motion";

const Cta = () => {
    return (
        <motion.div className="text-[#2E435F] font-bold  relative mt-14">
            <motion.h1 className="text-3xl max-[500px]:text-2xl lg:text-4xl mb-5 relative uppercase"
                initial={{ opacity: 0, top: "10rem" }}
                whileInView={{ opacity: 1, top: 0 }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    duration: 1.5
                }}>Have a Project in Mind?</motion.h1>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    duration: 1
                }}
                whileHover={{
                    boxShadow: `0px 233px 93px rgba(0, 0, 0, 0.01), 0px 131px 79px rgba(0, 0, 0, 0.05), 0px 58px 58px rgba(0, 0, 0, 0.09),
                            0px 15px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)`,
                    scale: 1.1
                }}
                style={{
                    background: "linear-gradient(180deg, rgba(255, 181, 0, 0.01) 0%, rgba(0, 35, 90, 0.2) 100%)"
                }}
                className=" rounded-full w-52  h-52 m-auto relative mt-10 cursor-pointer mb-10">

                <motion.h1
                    initial={{
                        opacity: 0,
                        top: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        top: "5rem"
                    }}
                    transition={{
                        type: "spring",
                        damping: 12,
                        stiffness: 200,
                        duration: 1
                    }}
                    className="absolute  whitespace-nowrap  text-[#626f8a]  capitalize  -left-[0.6rem]  text-5xl">Let's Talk</motion.h1>
            </motion.div>
        </motion.div>
    )
}


export default Cta;