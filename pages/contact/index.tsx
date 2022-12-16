import { NextPage } from "next/types"
import { motion } from "framer-motion"
import { useState} from "react"

import { addDoc, collection, firestore, serverTimestamp } from "../util/firebase"

const Contact: NextPage = () => {
    const [isDone, setDone] = useState(false)
    const [isSend, setSend] = useState(false)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const sendContact = async (e: any) => {
        e.preventDefault();
        if (email.length > 0 && name.length > 0 || message.length > 0) {
            setSend(true)
            const form = document.getElementById('form');
            try {
                await addDoc(collection(firestore, 'CONTACT'), {
                    name: name,
                    email: email,
                    message: message,
                    time: serverTimestamp()
                }).then(data => {
                    setSend(false)
                    form?.reset()
                    setDone(true)
                })
            } catch (e) {
                setDone(true)
            }
        }

    }
    return (

        <>
            {isDone ?
                <div className="m-auto block w-full mt-96 relative text-center text-4xl uppercase font-bold text-[#0B1727] whitespace-nowrap">
                    <span>Thank your inquries!</span></div> :
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        type: "spring",
                        duration: 4
                    }}
                    className="relative  flex flex-col w-full  font-Poppins  items-center justify-items-center mt-32">
                    <div className="w-96  lg:w-5/12 p-3 text-sm text-[#2E435F] mb-12 leading-6	 md:w-6/12">
                        <p>I'm always open to new creative collaborations and would love to talk about potential projects you have in mind.</p>
                    </div>
                    <div className="w-96 p-3 text-sm font-Poppins leading-6 lg:w-5/12  md:w-6/12 text-[#2E435F]">
                        <p >Don't hesitate to get in touch, even if it's just say hello. I'm  always happy to help</p>
                    </div>
                    <div className="w-80 md:w-6/12 lg:w-5/12">
                        <form onSubmit={sendContact} id="form">
                            <div className={`flex   mt-12    w-full`}>
                                <div className=" peer flex flex-col relative w-full">
                                    <input
                                        required={true}
                                        onChange={(e) => { setName(e.target.value) }}
                                        name="Name" title="Name"
                                        placeholder="Name"
                                        className={`peer  p-2 bg-transparent placeholder-transparent  focus:outline-none  border-t-0 border-l-0 border-r-0  border border-[#576E92]`} />
                                    <label htmlFor='Name'
                                        className=" transition-all absolute left-2   text-sm text-gray opacity-50 -top-3 peer-focus:-top-3.5 peer-focus:text-xs
                                      peer-placeholder-shown:top-2   peer-placeholder-shown:text-red">
                                        Name
                                    </label>
                                </div>
                            </div>
                            <div className="flex   mt-12    w-full">
                                <div className=" peer flex flex-col relative w-full">
                                    <input
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        required={true}
                                        name="Email" title="Email"
                                        type="email"
                                        placeholder="Email"
                                        className={`peer  p-2 bg-transparent placeholder-transparent  focus:outline-none  border-t-0 border-l-0 border-r-0  border border-[#576E92]`} />
                                    <label htmlFor='Email'
                                        className="transition-all absolute left-2   text-sm text-gray opacity-50 -top-3 peer-focus:-top-3.5 peer-focus:text-xs
                                          peer-placeholder-shown:top-2   peer-placeholder-shown:text-red">Email</label>
                                </div>
                            </div>

                            <div className="flex mt-12">
                                <div className="flex flex-col relative w-full">
                                    <textarea
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        name="Message"
                                        className="peer  p-2 focus:ring-0 bg-transparent text-sm w-full placeholder-transparent  focus:outline-none  border-t-0 border-l-0 border-r-0  border border-[#576E92]"
                                        title="Message"
                                        placeholder="Message"
                                        rows={4}
                                        cols={50} />
                                    <label
                                        htmlFor="Message"
                                        className=" transition-all absolute left-2 text-sm   text-gray opacity-50 -top-3  
                                     peer-focus:-top-3.5 peer-focus:text-xs
                                     peer-placeholder-shown:top-2 ">
                                        Mesage
                                    </label>
                                </div>
                            </div>
                            <button onClick={sendContact} style={{
                                boxShadow: "0px 58px 23px rgba(121, 113, 234, 0.01), 0px 32px 19px rgba(121, 113, 234, 0.05), 0px 14px 14px rgba(121, 113, 234, 0.09), 0px 4px 8px rgba(121, 113, 234, 0.1), 0px 0px 0px rgba(121, 113, 234, 0.1)"
                            }} className="  bg-[#576E92] h-14 w-52 mb-24 mt-5  relative">

                                {isSend ?
                                    <span className="font-Poppins text-white text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12 animate-spin h-6 w-6 mr-3 absolute">
                                            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                                        </svg> Sending</span> :
                                    <span className="font-Poppins text-white" >Submit</span>
                                }
                            </button>
                        </form>
                    </div>

                </motion.div>

            }

        </>
    )
}
export default Contact

