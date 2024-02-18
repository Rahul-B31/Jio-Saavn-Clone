import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md'
import axios from 'axios';
import MusicContext from '../context/MusicContext';
import Switcher from '../DarkThemeSwith/Switcher';

const NavBar = () => {
   const {setSearchSong} = useContext(MusicContext);
   const [searchText,setSearchText] = useState('');

 async function searchSongs(){

      const response =  await axios.get(`https://saavn.dev/search/songs?query=${searchText}&page=1&limit=2`);
      const {data}  =   response.data;

      if(data.results.length === 0 ||searchText === " " || searchText.length === 0 ||searchText === ""){
          await setSearchSong([])
      }else{
          await setSearchSong(data.results);
      }
      
   }

   useEffect(()=>{

     const timer = setTimeout(() => {
           searchSongs();
       },200);

       return ()=> clearTimeout(timer);
   },[searchText]);
  return (
     <header>
        <nav className='flex justify-between items-center bg-[#f5f5f5ff] py-3 lg:border border-slate-300 dark:border-slate-600 px-3 fixed top-0 left-0 right-0 z-20 dark:bg-darkblue'>
            {/* Logo  */}
             <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
                <div className='flex items-center  justify-between gap-2 mr-4'>
                    <img src="/savan-logo.png" alt="Savan logo" width={37} />
                    <Link to="/" className='font-extrabold text-lg dark:text-gray-200'>Jio Saavn</Link>
                </div>

                <ul className="flex text-[24px] lg:text-[15px] gap-5 text-gray-600 dark:text-gray-300 font-semibold h-full">
                    <li className='list-none'>Music</li>
                    <li className='list-none'>Podcast</li>
                    <li className='list-none'>Go Pro</li>
                </ul>
             </div>


            {/* Search bar */}
             <div className="hidden  lg:flex lg:block gap-6 items-center">
                <input type="text" 
                  name='search'
                  id='search'
                  value={searchText}
                  className='py-2 rounded-full w-[40vw] outline-none text-center border  text-black dark:text-gray-800 dark:bg-gray-200'
                  placeholder='Search for songs'
                  autoComplete='off'
                  autoCorrect='off'
                  onChange={(e)=>setSearchText(e.target.value)}
                />
                 <div className="">
                      <Switcher/>  
                 </div>
             </div>


            {/* Language and login logout */}
             <div className="hidden lg:flex justify-between items-center gap-4">
                <div className="flex  justify-center gap-2">
                     <div className="flex flex-col text-sm">
                         <span className='text-[14px] text-gray-600 dark:text-gray-300 font-semibold'>Music Language</span>
                         <span className='text-[12px] text-gray-500 dark:text-gray-500'>Hindi</span>
                     </div>
                     <MdKeyboardArrowDown className='text-xl text-gray-500 mt-2'/>

                     <div className=" flex text-[15px] text-gray-600  dark:text-gray-300 gap-5 font-semibold">
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