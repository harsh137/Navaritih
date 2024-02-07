"use client"
import { useState } from "react"
import Link from 'next/link'
import {usePathname} from "next/navigation";


import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {

    const [menuIcon,setMenuIcon]=useState(false)
    // const [selected,setSelected]=useState("home" )  //default selected page is home

    const handleSamllScreenNavi=()=>{
        setMenuIcon( !menuIcon);
    }
    const currentRoute=usePathname();

    const NavItemStyle='font-Roboto hover:text-[#CEFF00] text-white'
    const NavItemStyleActive='font-Roboto text-[#CEFF00] '

    return (
        <header className="bg-[#02256B] w-[100%] ease-in duration-500 fixed top-0 left-0 z-10 mb-10 nav">
            <nav className="max-w-7xl mx-auto h-24 flex justify-between  items-center p-4">

                <div>
                    <Link href="/" onClick={handleSamllScreenNavi}>
                        
                        <img src="/Logo/trans.png" className="m-3 h-20 w-5/6 md:h-20 md:w-5/6 xl:h-20 xl:w-5/6" alt="logo"/>
                    </Link>
                </div>
                {/* Large Screen Navi */}
                <div>
  
                <ul className='hidden md:flex uppercase mt-3 font-bold lg:text-[15px] '>
                    <li className='mr-4 lg:mr-8  ' >
                        <Link href="/" className={currentRoute === "/" ? NavItemStyleActive : NavItemStyle}>
                         HOME
                        </Link>
                    </li>
                    <li className="mr-4 lg:mr-8 ">
                        <Link href="/about" className={currentRoute === "/about" ? NavItemStyleActive : NavItemStyle}>
                         ABOUT
                        </Link>
                    </li>
                    {/* <li className="mr-4 lg:mr-8  hover:text-[#CEFF00]">
                        <Link href="/department" className='font-Roboto'>
                         Departments
                        </Link>
                    </li> */}
                    
                    <li className="mr-4 lg:mr-8 ">
                        <Link href="/ourTeam" className={currentRoute === "/ourTeam" ? NavItemStyleActive : NavItemStyle}>
                         Our Team
                        </Link>
                    </li>
                    
                    <li className="mr-4">
                        <Link href="/contact" className={currentRoute === "/contact" ? NavItemStyleActive : NavItemStyle}>
                         Contact Us
                        </Link>
                    </li>
                    <li>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLScjD6NLDGZoR5nWfCgg3jNibcviFqw4GLJKZETGENeq2FRYNA/viewform">
                            <button className="mr-5 -mt-3  text-white bg-blue-500 hover:bg-blue-700  rounded-full uppercase font-bold px-8 py-2 font-Roboto "> Join Now </button>
                        </Link>
                
                    </li>
                </ul>
                
                </div>

                

                {/* Small Screen Navi ICON */}
                {/* onClick change the Icon*/}
                <div onClick={handleSamllScreenNavi} className="flex md:hidden">
                    {
                        menuIcon ? 
                        <AiOutlineClose size={25} className="text-[#CEFF00]"/> 
                        :
                        <AiOutlineMenu size={25} className="text-[#CEFF00]"/>
                    }
                </div>

                {/* Small Screen Navi */}
                <div className={menuIcon?
                "md:hidden absolute top-[98px] right-0 bottom-0 left-0 flex justify-center items-center w-[100%] h-screen bg-opacity-100 bg-slate-700 text-black text-center ease-in duration-300"
                :
                "md:hidden absolute top-[98px] right-0 left-[-100%] flex justify-center items-center w-[100%] h-screen bg-inherit  text-black text-center ease-in duration-300"}>

                    {/* SMALLER NAVBAR LINKS */}
                   <div children='w-full '>
                        
                        <ul className="uppercase font-bold text-2xl -mt-44">
                            <li onClick={handleSamllScreenNavi} className=" py-5 hover:text-[#c3bebe] cursor-pointer">
                                <Link href='/'>Home</Link>

                            </li>
                            <li onClick={handleSamllScreenNavi} className=" py-5 hover:text-[#c3bebe] cursor-pointer">
                                <Link href='/about'>About</Link>

                            </li>
                            
                            <li onClick={handleSamllScreenNavi} className=" py-5 hover:text-[#c3bebe] cursor-pointer">
                                <Link href='/ourTeam'>Our Teams</Link>

                            </li>
                            
                            <li onClick={handleSamllScreenNavi} className=" py-5 hover:text-[#c3bebe] cursor-pointer">
                                <Link href='/contact'>Contact Us</Link>

                            </li>
                            
                        </ul>
                        <div className="flex flex-col justify-center items-center mt-16">
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScjD6NLDGZoR5nWfCgg3jNibcviFqw4GLJKZETGENeq2FRYNA/viewform">
                                <button className=" bg-[#CEFF00] text-slate-800 rounded-full  hover:bg-slate-400 hover:text-[#CEFF00] uppercase font-bold py-3 w-[250px] mb-5"> Join Now </button>
                            </Link>
                        </div>
                   </div>
                    
                </div>

            </nav>
        </header>
    

    )
  }
  