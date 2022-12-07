import { NextPage } from "next/types"
import { motion } from "framer-motion";

const About: NextPage = () => {
  //5xl
  //leading 4re
  return (
    <>
      <div className="flex flex-col  items-center  w-10/12 justify-start relative mt-32">
        <div className=" w-full relative flex justify-center items-center mb-24 max-[500px]:flex-col ">

          <h2 className="text-[#2E435F] font-bold text-xl  max-[500px]:text-xl font-Poppins leading-[2rem]  w-full relative"> 
            Helping Companies To Build Clean, Modern and Initutive User Interface.
            <p className="absolute text-sm font-normal">A developer with a passion for design</p>
          </h2>
          <div className="bg-[blue] w-14  block"></div>

        </div>


        <div className="w-7/12 relative font-Poppins  text-[#2E435F] flex   mt-24 leading-[2rem] justify-between">
          <p className="w-7/12"> My design philosophy is to minimize distractions for what's truly valuable or essential.  To ensure that I can deliver a
            high-quality and unique product to my client, I follow a clear defined steps</p>
          <div className="bg-[red] w-1  block"></div>
        </div>

        {/* process role*/}

      </div>
  
    </>
  )
}
export default About

/* 

       <div className="w-[100vw] ">
        <div className="bg-[red] w-5 h-[4000px] ">
          <div className="bg-[blue] w-14 h-14 rounded-full relative mb-24">
            <span className="absolute">Discover</span>
          <div className="bg-[green]  absolute top-2 left-16 w-[600px] p-10 h-[120px]"><p className="font-poppins">
          In this initial phase the goal is to learn as much as
possible about what makes your business unique
            </p></div>
            </div>

            <div className="bg-[blue] w-14 h-14 rounded-full relative mb-24 mt-24">
            <span className="absolute">Discover</span>
          <div className="bg-[green]  absolute top-2 left-16 w-[600px] p-10 h-[120px]"><p className="font-poppins">
          In this initial phase the goal is to learn as much as
possible about what makes your business unique
            </p></div>
            </div>


            <div className="bg-[blue] w-14 h-14 rounded-full relative mb-24 mt-24">
            <span className="absolute">Discover</span>
          <div className="bg-[green]  absolute top-2 left-16 w-[600px] p-10 h-[120px]"><p className="font-poppins">
          In this initial phase the goal is to learn as much as
possible about what makes your business unique
            </p></div>
            </div>
        </div>


        
        </div>

*/