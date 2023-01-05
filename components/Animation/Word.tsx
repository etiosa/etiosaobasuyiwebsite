import { motion, Variants, } from "framer-motion";

interface IWordProps {
    word: string,
    className?: string,
    wordStyle?: String,
    wordColor?: string,
    index?: Number,
    currentPojectIndex?: number,
    duration?: number,
    delay?: number,
    currentporjectposition?: number
    textClassName?:string
}


const Word = ({ word,
    delay = 0,
    duration = 0.05, ...props }: IWordProps) => {

    const container: Variants = {
        hidden: {
            opacity: 0
        },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay }
        })
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };



    //split the word
    const words = word.split(" ");
    return (
        <motion.div
            className={props.className}
            variants={container}
            initial={props.index === props.currentporjectposition ? "hidden" : ""}
            animate={props.index === props.currentporjectposition ? "visible" : "hidden"}>

            {words.map((letter, index) => {
                return (
                    <motion.p className={`text-md ${props.textClassName}`}style={{ display: "inline-block", marginRight: "0.3rem" }} variants={child}
                        key={letter + '--' + index}>
                        {letter}
                    </motion.p>
                )
            })}
            </motion.div>
    )
}


export default Word;