import { motion } from "framer-motion"
type Data={
    color:string,
    link:string
}

interface IButton{
    data:Data
}
export const Button = ({data}:IButton) => {


    return (
        <motion.button
            whileHover={{
                skewY: 3,
                scale: 1.1,
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

            }} className="    h-12 w-32 p-3 "><span className="font-Poppins text-white">View</span></motion.button>
    )
}