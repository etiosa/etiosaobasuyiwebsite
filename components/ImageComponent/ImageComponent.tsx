import Image from 'next/image'
import { motion } from "framer-motion"


interface IImageComponentProps {
    src: string,
    index?: number,
    name: string

}

const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;

const ImageComponent = (props: IImageComponentProps) => {

    return (
        <motion.div
            key={props.name + "__" + props.index}
            initial={{
                opacity: 0,
                WebkitMaskImage: hiddenMask
            }}
            whileInView={{
                WebkitMaskImage: visibleMask, opacity: 1
            }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4
            }}
        >
            <Image src={props.src} alt={props.name} width={800} height={100} className=" h-auto w-auto" quality={100} priority />
        </motion.div>
    )
}



export default ImageComponent