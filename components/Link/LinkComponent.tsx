import { motion } from "framer-motion"
import Link from "next/link"

interface ILinkComponentProps {
    link: string,
    name: string,
    className?: string,
    backgroundColor?: string

}
const LinkComponent = (props: ILinkComponentProps) => {
    return (
        <motion.a
            href={props.link}
            rel="noopener noreferrer" target="_blank"
            style={{ background: props.backgroundColor }}
            whileHover={{
                skewY: 3, scale: 1.1,
                boxShadow: "0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)"
            }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, left: "-100vw" }}
            animate={{ left: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative  h-14 w-52 p-3  mt-14 mb-24 text-center cursor-pointer`}>
            <span className="font-Poppins  relative top-1  text-white uppercase">{props.name}</span>
        </motion.a>


    )

}


export default LinkComponent
