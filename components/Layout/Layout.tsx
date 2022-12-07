import { useEffect } from "react"
import Line from "../line/line"
import Nav from "../Nav/Nav"
function Layout({ children }: any) {

    //curosor here
    useEffect(() => {
        console.log("useffetc called agai")
        const cursor = (event: any) => {
            if (mouseCurouser) {
                mouseCurouser.style.left = event.clientX + "px"
                mouseCurouser.style.top = event.clientY + "px";


            }
            if (ProjectImage) {

                ProjectImage.forEach(image => {
                    image.addEventListener('mouseover', () => {
                        outter?.classList.add("scale-[4]", "opacity-1", "bg-[#F26527]");

                        outterText?.classList.add('text-opacity');
                    })

                })

                ProjectImage.forEach(image => {
                    image.addEventListener('mouseleave', () => {
                        outter?.classList.remove("scale-[4]");
                        outterText?.classList.remove('text-opacity');
                    })

                })
            }

        }
        const mouseCurouser = document.querySelector('.cursor');
        //project-image
        const ProjectImage = document.querySelectorAll('.project-image');
        const outter = document.querySelector('.outter')
        const outterText = document.querySelector('.outterText')
        window.addEventListener("mousemove", cursor)





    })

    return (
        <>
            <Nav />
            <Line />
            <main>
                {children}
                <div


                    className='cursor fixed overflow-hidden border-2  w-14 h-14 rounded-full text-center  '>
                    <div className="outter  w-5 h-5 relative  top-4 left-4  rounded-full transition-all duration-500	 ">
                    </div>
                    <span className=' outterText relative  font-bold text-lg font-Poppins text-hide'>View</span>



                </div>
            </main>
        </>

    )
}


export default Layout
/*  <Line />*/