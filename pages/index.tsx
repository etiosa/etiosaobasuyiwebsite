import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Word from '../components/Animation/Word';
import { projects } from "../types/project"
import ProjectImage from '../components/ProjectImage/ProjectImage';
import { useRouter } from "next/router";
import { Logo } from "../types/project"
import { Button } from '../components/Button/Button';
import LogoComponent from '../components/Logos/Logos';
import Cta from '../components/cta/Cta';


export default function Home() {
  const router = useRouter()
  return (
    <motion.div>
      <div className={styles.container}>
        <Head>
          <title>Etiosa Obasuyi | Front - End Developer & UI/UX designer </title>
          <meta name="description" content="A DEVELOPER WITH AN EYE FOR PRODUCT AND USER EXPERIENCE. 
          I will help you design a Minimalistic, and intuitive user interface that will enthrall and  engage your users" />
          <meta name="keyword" content="portfolio, javascript, developer, react, react js, user interface, user experience, UI/UX, UI, UX, Java, Full Stack Developer,
                    Node Js, Front-end developer, Front End developer, Product, Html, Css, Material UI  design, Vue.Js, Flutter,User interface design, User experience design
                    Responsive design,Mobile development,Agile development,Git,NPM,Bootstrap,Semantic UI,Cypress, tailwind css,User research,
                    User testing,Prototyping,Wireframing,Interaction design,User experience design,User interface design,Typography,Human-centered design,
                    User stories,User journey,User flow,Google Cloud,GraphQL,Client-side development"/>
          <meta name="og:description" content="A DEVELOPER WITH AN EYE FOR PRODUCT AND USER EXPERIENCE. 
          I will help you design a Minimalistic, and intuitive user interface that will enthrall and  engage your users" />
          <meta name="og:type" content='website' />
          <meta name='og:url' content='https://etiosaobasuyi.com/' />
          <meta name="og:title" content='Etiosa Obasuyi | Front - End Developer & UI/UX designer' />
        </Head>
        <div className={styles.main}>
          <div className='flex flex-col w-80 sm:w-96 md:w-10/12 md:items-center relative mt-14 min-[500px]:mt-24'>
            <div>
              <div className="relative">
                <Word className="font-Poppins leading-[3.5rem]	 text-[#2E435F] font-bold text-4xl" word='A DEVELOPER WITH AN EYE FOR PRODUCT AND USER EXPERIENCE' />
              </div>
              <div className=" mt-4 md:w-10/12 sm:w-96 ">
                <Word className="font-Poppins leading-8 mt-14 text-[#2E435F] text-sm" word='I will help you design a Minimalistic, and intuitive user interface that will enthrall and  engage your users' />
              </div>
            </div>

            <div className="flex flex-col items-start md:flex-row md:mt-32">
              <motion.button
                onClick={() => {
                  router.push("/work")
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 0.5
                }}
                style={{
                  boxShadow: "0px 58px 23px rgba(121, 113, 234, 0.01), 0px 32px 19px rgba(121, 113, 234, 0.05), 0px 14px 14px rgba(121, 113, 234, 0.09), 0px 4px 8px rgba(121, 113, 234, 0.1), 0px 0px 0px rgba(121, 113, 234, 0.1)",
                }}
                whileHover={{
                  skewY: 3,
                  scale: 1.1,
                  boxShadow: "0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)"
                }} className="bg-[#F5803E] h-14 w-52 mb-24 mt-20 md:mt-0 md:mb-0 md:mr-32"><span className="font-Poppins text-white">View My Work</span></motion.button>
              <motion.button
                onClick={() => {
                  router.push("/contact")
                }}
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.5
                }}
                animate={{ opacity: 1 }}
                whileHover={{
                  skewY: 3,
                  scale: 1.1,
                  boxShadow: "0px 87px 35px rgba(11, 23, 39, 0.01), 0px 49px 29px rgba(11, 23, 39, 0.05), 0px 22px 22px rgba(11, 23, 39, 0.09), 0px 5px 12px rgba(11, 23, 39, 0.1), 0px 0px 0px rgba(11, 23, 39, 0.1)"
                }}
                className="border bg-transparent border-[#0B1727] h-14 w-52">
                <span className='text-[#0B1727] font-Poppins'>Let's Talk</span></motion.button>
            </div>
          </div>
          <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:w-7/12 sm:w-6/12 mt-48 flex flex-col justify-center items-center max-[500px]:items-start">
            <Word textClassName='max-[600px]:text-sm' className="font-Poppins text-lg max-[500px]:text-xl text-[#2E435F] leading-12"
              word={`I am passionate about Technology and obsessed with learning.  I love working at the intersection of creativity and User-friendly interfaces.`} />
            <Button onClick={() => {
            }} className="bg-[#324670]" color='' Title={'About Me'} />
          </div>
          <div className="mt-3 mb-24 ">
            <motion.h2
              initial={{ top: '15rem', opacity: 0 }}
              whileInView={{ top: 0, opacity: 1 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 300,
                duration: 1
              }}
              className='relative  text-6xl max-[500px]:text-4xl font-bold font-Poppins text-[#0B1727] uppercase'>Latest Project</motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='bg-[#576E92]  h-[0.2rem] top-1 relative'></motion.div>
          </div>
          <section className="w-full h-full   justify-center items-center " >
            <div className="relative ">
              {projects.slice(0, 3).map((project, index) => {
                return (<ProjectImage key={project.name + "__" + project.year} ProjectName={project.name}
                  index={index}
                  hoverImage={project.hoverImages}
                  buttonColor={project.buttonColor}
                  reverse={index % 2 === 0 ? true : false}
                  titleColor={project.titleColor} Role={project.Role} Year={project.year} Description={project.description}
                  CompanyImage={project.CompanyImage}
                  color={project.color} />
                )
              })}
            </div>
          </section>
          <Button onClick={() => {
            router.push("/work")
          }} color={''} className="h-14 w-52 p-3  bg-[#F26527]" Title={'View More'} />

          <motion.div className='flex flex-col items-center mb-14'
            transition={{ staggerChildren: 0.05 }}>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-3xl lg:text-4xl mb-1 relative text-[#2E435F] font-bold mt-14 ">Happy clients</motion.h1>

            <motion.div className='grid lg:grid-cols-6 lg:gap-14 gap-2 p-5 grid-cols-3   place-items-center place-content-center'>

              {Logo.map((logo, index) => {
                return (<LogoComponent key={logo.companyName + "___" + index + logo.logo} companyName={logo.companyName} url={logo.logo} id={index} />)
              })}
            </motion.div>
          </motion.div>
          <Cta />
        </div>
      </div>

    </motion.div>
  )
}


