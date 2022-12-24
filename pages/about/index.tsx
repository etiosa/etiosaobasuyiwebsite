import { NextPage } from "next/types"
import { motion } from "framer-motion";
import { Steps } from "../../types/Steps";
import Word from "../../components/Animation/Word";
import Text from "../../components/Animation/Text";


const About: NextPage = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          top: "20rem",

        }}
        animate={{
          opacity: 1,
          top: 0,

        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 300,
          duration: 2
        }}
        className="absolute w-[100wv] h-[100vh] left-0 right-0  " style={{
          backgroundImage: "url(../companies/vector.svg)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "top 1% center",
          backgroundSize: "90%"
        }}>


      </motion.div>
      <div className="flex flex-col  items-center  w-full justify-center relative mt-32 overflow-hidden">
        <div className=" w-11/12  sm:w-7/12 md:w-9/12 lg:w-7/12 relative block   items-center mb-14 ">
          <Word className="text-[#2E435F] font-bold text-[1.6rem]  md:text-[2.7rem]  lg:text-[3rem] lg:leading-[4rem] font-Poppins leading-[3rem]  relative" word="Helping Companies To Build Clean Modern and Initutive User Interface." />
          <Word className="text-[#2E435F] mt-4 " word="A developer with a passion for design" />
        </div>
        <div className="w-11/12  sm:w-7/12 md:w-9/12 lg:w-7/12  relative font-Poppins  text-[#2E435F] flex p-3 sm:p-0   mt-14 leading-[2rem] mb-24">
          <Word className="w-full xl:w-8/12 sm:w-11/12" word=" My design philosophy is to minimize distractions for what's truly valuable or essential.  To ensure that I can deliver a 
          high-quality and unique product to my client, I follow a clear defined steps"/>
        </div>

        {/* process role tablet and up*/}

        <div className="w-7/12 md:w-8/12   lg:w-7/12 flex  max-[700px]:hidden">

          <motion.div
            initial={{
              opacity: 0,
              left: "20rem",
              scale: 0
            }}
            animate={{
              opacity: 1,
              left: 0,
              scale: 1
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 300,
              duration: 1.5
            }}


            className="bg-[#2E435F]   h-[1900px]  w-1 relative ">
            <>
              {Steps.map(data => {
                return (
                  <motion.div className="flex relative  mb-96 mt-24 " key={data.Title}>
                    <motion.span
                      style={{ color: data.TitleColor }}
                      initial={{
                        opacity: 0
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      transition={{ duration: 1 }}

                      className="absolute font-bold right-10 uppercase top-[4.6rem]">{data.Title}</motion.span>
                    <motion.div className={`rounded-full  w-8 h-8 -ml-[14px]  absolute top-16`}
                      initial={{
                        scale: 0,

                      }}

                      whileInView={{
                        scale: 1,
                      }}
                      transition={{
                        type: "spring",
                        damping: 12,
                        stiffness: 200,
                        duration: 1
                      }}
                      style={{
                        boxShadow: ` 0px 9px 4px rgba(32, 37, 42, 0.01), 
                        0px 5px 3px rgba(32, 37, 42, 0.05), 0px 2px 2px rgba(32, 37, 42, 0.09), 0px 1px 1px rgba(32, 37, 42, 0.1), 
                      0px 0px 0px rgba(32, 37, 42, 0.1)`, background: data.backgroundColor
                      }}></motion.div>

                    <motion.div
                      initial={{
                        left: "15rem",
                        opacity: 0
                      }}

                      whileInView={{
                        left: "3.5rem",
                        opacity: 1
                      }}

                      transition={{
                        type: "spring",
                        damping: 12,
                        stiffness: 200,
                        duration: 2
                      }}
                      whileHover={{
                        boxShadow: ' 0px 233px 93px rgba(0, 0, 0, 0.01), 0px 131px 79px rgba(0, 0, 0, 0.05), 0px 58px 58px rgba(0, 0, 0, 0.09), 0px 15px 32px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
                        scale: 1.1
                      }}
                      className={`h-40 p-6 font-Poppins text-sm absolute w-[35rem]	left-14 `}
                      style={{ background: data.backgroundColor }}
                    >
                      <motion.p
                        style={{ color: data.TextColor }}>{data.Description}</motion.p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </>
          </motion.div>
        </div>

        {/* process role mobile*/}
        <motion.div className="flex  overflow-hidden flex-col w-full justify-center items-center min-[700px]:hidden">
          {Steps.map(step => {
            return (

              <div className="flex flex-col items-center mb-24" >

                <div className="flex  justify-start w-11/12  text-[#2E435F] font-Poppins uppercase items-center  mt-10">
                  <motion.div
                    initial={{
                      scale: 0,

                    }}

                    whileInView={{
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      duration: 1
                    }}
                    className="rounded-full bg-[#2E435F] w-8 h-8 relative top-1"
                    style={{
                      boxShadow: `0px 9px 4px rgba(32, 37, 42, 0.01), 
                      0px 5px 3px rgba(32, 37, 42, 0.05), 0px 2px 2px rgba(32, 37, 42, 0.09), 0px 1px 1px rgba(32, 37, 42, 0.1), 
                     0px 0px 0px rgba(32, 37, 42, 0.1)`, background: step.backgroundColor
                    }}></motion.div>
                  <motion.span
                    initial={{
                      opacity: 0
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1
                    }}
                    className="text-lg relative top-2 left-3" style={{ color: step.TitleColor }}>{step.Title}</motion.span>
                </div>
                <motion.div

                  initial={{
                    left: "15rem",
                    opacity: 0
                  }}
                  whileInView={{
                    left: 0,
                    opacity: 1
                  }}

                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    duration: 1
                  }}
                  style={{ background: step.backgroundColor }}
                  className="w-11/12 h-54 p-6 font-Poppins text-sm mt-5 relative">
                  <motion.p className="text-[#EDF3FB]">{step.Description}</motion.p>
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        <motion.div className="text-[#2E435F] font-bold  relative mt-14">
          <motion.h1 className="text-3xl lg:text-5xl mb-5 relative"
            initial={{
              opacity: 0,

              top: "10rem"
            }}
            whileInView={{

              opacity: 1,
              top: 0
            }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 200,
              duration: 1.5
            }}

          >Have a Project in Mind?</motion.h1>
          <motion.div
            initial={{
              scale: 0
            }}
            whileInView={{
              scale: 1
            }}
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
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(242, 101, 39, 0.25) 100%)"
            }}
            className=" rounded-full w-52  h-52 m-auto relative mt-10 cursor-pointer">

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
              className="absolute  whitespace-nowrap  text-[#A74B20]  capitalize  -left-[0.6rem]  text-5xl">Let's Talk</motion.h1>

          </motion.div>


        </motion.div>

      </div>

    </>
  )
}
export default About
