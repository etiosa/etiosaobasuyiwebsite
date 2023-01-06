import { motion } from "framer-motion";
import Image from 'next/image'

interface ILogoProps {
    companyName: string;
    url: string;
    id: number;
}

const LogoComponent = (Props: ILogoProps) => {
    return (
        <motion.div
            className='relative'
            initial={{ opacity: 0, top: "10rem" }}
            whileInView={{ opacity: 1, top: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
                type: 'spring',
                damping: 12,
                stiffness: 200,
                duration: 0.7
            }}
            key={Props.id + "__" + Props.companyName}>
            <Image  width={150} height={90} src={Props.url} alt={Props.companyName} loading="lazy" />
        </motion.div>
    )

}

export default LogoComponent;