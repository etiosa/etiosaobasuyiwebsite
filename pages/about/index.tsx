import { NextPage } from "next/types"
import { motion } from "framer-motion";

const About: NextPage = () => {
    return (
        <div className="bg-[white] h-20 w-20">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
      </div>
    )
}
export default About