import React from 'react'
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md'

const NavBar = () => {
  return (
     <header>
        <nav className='flex justify-between items-center bg-[#f5f5f5ff] py-3 lg:border px-3 fixed top-0 left-0 right-0 z-20'>
            {/* Logo  */}
             <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
                <div className='flex items-center  justify-between gap-2 mr-4'>
                    <img src="/savan-logo.png" alt="Savan logo" width={37} />
                    <Link href="/" className='font-extrabold text-lg'>Jio Saavn</Link>
                </div>

                <ul className="flex text-[24px] lg:text-[15px] gap-5 text-gray-600 font-semibold h-full">
                    <li className='list-none'>Music</li>
                    <li className='list-none'>Podcast</li>
                    <li className='list-none'>Go Pro</li>
                </ul>
             </div>

            {/* Search bar */}
             <div className="hidden lg:block">
                <input type="text" 
                  name='search'
                  id='search'
                  className='py-2 rounded-full w-[40vw] outline-none text-center border text-black'
                  placeholder='Search for songs'
                />
             </div>

            {/* Language and login logout */}
             <div className="hidden lg:flex justify-between items-center gap-4">
                <div className="flex  justify-center gap-2">
                     <div className="flex flex-col text-sm">
                         <span className='text-[14px] text-gray-600 font-semibold'>Music Language</span>
                         <span className='text-[12px] text-gray-500'>Hindi</span>
                     </div>
                     <MdKeyboardArrowDown className='text-xl text-gray-500 mt-2'/>

                     <div className=" flex text-[15px] text-gray-600 gap-5 font-semibold">
                          <li className='list-none'>Login In</li>
                          <li className='list-none'>Sign Up</li>
                     </div>

                </div>

             </div>

         
        </nav>
     </header>

  )
}

export default NavBar;