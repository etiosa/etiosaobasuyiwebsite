import { NextPage } from "next/types"

const Contact: NextPage = () => {
    function submitForm() {
        //use gmail api

        console.log("submit")
    }
    return (
        <div className="relative  flex flex-col w-full  font-Poppins  items-center justify-items-center">
            <div className="w-96  lg:w-5/12 p-3 text-sm text-[#2E435F] mb-12 leading-6	 md:w-6/12">
                <p >I'm always open to new creative collaborations
                    and would love to talk about potential projects you have in mind.</p>
            </div>
            <div className="w-96 p-3 text-sm font-Poppins leading-6 lg:w-5/12  md:w-6/12 text-[#2E435F]">
                <p >Don't hesitate to get in touch, even if it's just say hello. I'm  always happy to help</p>
            </div>
            <div className="w-80 md:w-6/12 lg:w-5/12">
                <form onSubmit={submitForm}>
                    <div className={`flex   mt-12    w-full`}>
                        <div className=" peer flex flex-col relative w-full">
                            <input
                                required name="Name" title="Name"
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
                                required name="Email" title="Email"
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
                    <button style={{
                        boxShadow: "0px 58px 23px rgba(121, 113, 234, 0.01), 0px 32px 19px rgba(121, 113, 234, 0.05), 0px 14px 14px rgba(121, 113, 234, 0.09), 0px 4px 8px rgba(121, 113, 234, 0.1), 0px 0px 0px rgba(121, 113, 234, 0.1)"
                    }} className="  bg-[#576E92] h-14 w-52 mb-24 mt-5 "><span className="font-Poppins text-white">
                            Submit</span></button>


                </form>

            </div>


        </div>
    )
}
export default Contact

