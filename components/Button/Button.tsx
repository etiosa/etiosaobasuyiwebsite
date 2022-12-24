import { motion } from "framer-motion"

interface IButtonProps {
    color: string,
    link?: string,
    className?: string
    Title: string,
    TitleClassName?: string,
    onClick?: Function,
    backgroundColor?: string
}
export const Button = (props: IButtonProps) => {


    return (
        <motion.button
            style={{
                backgroundColor: props.backgroundColor
            }}
            whileHover={{
                skewY: 3,
                scale: 1.1,
                boxShadow: "0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)"
            }}
            whileInView={{
                opacity: 1
            }}
            initial={{
                opacity: 0,
                left: "-100vw"
            }}
            animate={{
                left: 0,
            }}
            transition={{
                type: "spring",
                duration: 0.5
            }}
            className={` ${props.className} relative  h-14 w-52 p-3  mt-14 mb-24`}><span className="font-Poppins  text-white uppercase">{props.Title}</span></motion.button>
    )
}