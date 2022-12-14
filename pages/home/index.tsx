import { NextPage } from "next/types"
import { motion } from "framer-motion"

const Home: NextPage = () => {
  console.log("Home")
    return (
        <div className='flex flex-col w-80 sm:w-96 md:w-10/12 md:items-center'>
        <div>
          <div className="relative">
            <motion.div 
          
            
            style={{boxShadow:"0px 4px 4px rgba(121, 113, 234, 0.41)"}} className='w-24  h-24 bg-[#F5803E] absolute -top-2'></motion.div>
          <h3 className="font-Poppins leading-8	 text-[#0B1727] font-bold text-2xl">A DEVELOPER WITH AN EYE FOR PRODUCT AND USER EXPERIENCE</h3>
          </div>
          <div className="w-80 mt-4 md:w-10/12 sm:w-96">
          <p className="font-Poppins leading-5 text-[#2E435F] text-sm">I will help you design a Minimalistic, and intuitive user interface that will enthrall and engage your users. </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:mt-32">
      <button style={{
        boxShadow:"0px 58px 23px rgba(121, 113, 234, 0.01), 0px 32px 19px rgba(121, 113, 234, 0.05), 0px 14px 14px rgba(121, 113, 234, 0.09), 0px 4px 8px rgba(121, 113, 234, 0.1), 0px 0px 0px rgba(121, 113, 234, 0.1)"
      }} className="  bg-[#576E92] h-14 w-52 mb-24 mt-20 md:mt-0 md:mb-0 md:mr-32"><span className="font-Poppins text-white">View My Work</span></button>

      <button  className="  bg-[#DCE0E6] h-14 w-52" style={{boxShadow:'0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)'}}>
        <span className='text-[#0B1727] font-Poppins'>Contact Me</span></button>
      </div>
      </div>

   
    )
}
export default Home