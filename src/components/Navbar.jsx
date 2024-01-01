"use client"
import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Link from 'next/link'
import LoginSvg from '../../public/log-in.svg'
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>
            <header className='flex w-full mx-auto h-16 shadow-lg text-[#1E487F]'>
                <nav className='flex w-full  items-center border-b justify-between lg:max-w-7xl mx-auto '>
                    <div className='ml-2 lg:ml-0'>
                        <Image src={Logo} alt='Logo Image' />
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex gap-10 font-medium text-base'>
                            <li><Link href={'#'} className='hover:text-blue-600 duration-300'>Home</Link></li>
                            <li><Link href={'#'} className='hover:text-blue-600 duration-300'>About</Link></li>
                            <li><Link href={'#'} className='hover:text-blue-600 duration-300'>Auctions</Link></li>
                            <li><Link href={'#'} className='hover:text-blue-600 duration-300'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='hidden  md:flex hover:text-blue-600 mr-2 lg:mr-0'>
                        <Image src={LoginSvg} alt='login svg' /><Link href={'#'} className='font-bold duration-300 text-base ml-2'>Login</Link>
                    </div>
                    <div className='md:hidden mr-2 lg:mr-0 cursor-pointer'>
                        {!isNavOpen ?
                            <HiOutlineBars3 className='text-3xl duration-300' onClick={() => setIsNavOpen(!isNavOpen)} />
                            :
                            <RxCross1 className='text-3xl duration-300' onClick={() => setIsNavOpen(!isNavOpen)} />
                        }
                    </div>
                </nav>

            </header>
            {
                !isNavOpen ?
                    <>
                    </>
                    :
                    <>
                        <div className='text-[#1E487F] text-center duration-300 transition-all bg-white h-screen'>
                            <div className=''>
                                <ul className='flex flex-col gap-5 mt-5 font-medium text-base'>
                                    <li><Link href={'#'} className='hover:text-blue-600 duration-300' onClick={() => setIsNavOpen(!isNavOpen)}>Home</Link></li>
                                    <li><Link href={'#'} className='hover:text-blue-600 duration-300' onClick={() => setIsNavOpen(!isNavOpen)}>About</Link></li>
                                    <li><Link href={'#'} className='hover:text-blue-600 duration-300' onClick={() => setIsNavOpen(!isNavOpen)}>Auctions</Link></li>
                                    <li><Link href={'#'} className='hover:text-blue-600 duration-300' onClick={() => setIsNavOpen(!isNavOpen)}>Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className='flex justify-center mt-5 '>
                                <Image src={LoginSvg} alt='login svg' /><Link href={'#'} className='font-bold duration-300 text-base ml-2 hover:text-blue-600'>Login</Link>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default Navbar