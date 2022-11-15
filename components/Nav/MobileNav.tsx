import Link from 'next/link';

function MobileNav() {

    return (
        <nav className="min-[500px]:hidden w-scren justify-center	flex mb-14">
            <ul style={{ boxShadow: "0px 55px 22px rgba(23, 25, 28, 0.01), 0px 31px 19px rgba(23, 25, 28, 0.05), 0px 14px 14px rgba(23, 25, 28, 0.09), 0px 3px 8px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1);" }}
                className="bg-{#DCE0E6]   text-[#78797A]  font-Poppins h-16 md:h-20 mt-10 relative z-40  w-96  md:w-11/12 flex items-center  justify-evenly	 ">
                <li>
                    <Link href="#"  className="flex font-bold text-[#0B1727] text-2xl">
                        <div className='mr-1'>
                        <span className="text-[#2C7BE5]">E</span>
                        <span>T</span>
                        <span>I</span>
                        <span>O</span>
                        <span>S</span>
                        <span>A</span>
                        </div>
                        <div>
                        <span>O</span>
                        <span>B</span>
                        <span>A</span>
                        <span>S</span>
                        <span>U</span>
                        <span>Y</span>
                        <span className="text-[#E63757] relative" >I
                            <div className='absolute -top-2  -left-1 w-3 h-3 bg-[#E63757] rounded-lg'></div>
                        </span>
                        </div>


                        </Link>
                </li>
                <li>
                    <Link href="#"><div style={{boxShadow:' 0px 14px 6px rgba(23, 25, 28, 0.01), 0px 8px 5px rgba(23, 25, 28, 0.05), 0px 4px 4px rgba(23, 25, 28, 0.09), 0px 1px 2px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1)'}} 
                    className="h-2 w-16 mb-1 relative bg-[#7971EA]"></div>
                    <div  style={{boxShadow:" 0px 14px 6px rgba(23, 25, 28, 0.01), 0px 8px 5px rgba(23, 25, 28, 0.05), 0px 4px 4px rgba(23, 25, 28, 0.09), 0px 1px 2px rgba(23, 25, 28, 0.1), 0px 0px 0px rgba(23, 25, 28, 0.1);"}} 
                    className="h-2 w-16 bg-[#7971EA]"></div>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default MobileNav