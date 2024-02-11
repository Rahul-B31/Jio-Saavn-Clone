import React, { useRef } from 'react'
import {MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import AlbumItem from './AlbumItem'
import PlayListItem from './PlayListItem';


const Slider = ({data}) => {

    const scrollRef = useRef(null);
   
     const  scrollRight = ()=>{
        scrollRef.current.scrollLeft +=800;
     }
     const  scrollLeft= ()=>{
        scrollRef.current.scrollLeft -=800;
     }
   return (
     <div className="flex justify-center items-center gap-2">

         <MdOutlineKeyboardArrowLeft className='text-3xl text-gray-600 dark:text-gray-300 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block' onClick={scrollLeft}/>
           
           <div className="grid grid-rows-2 grid-flow-col-dense justify-between items-start gap-4 overflow-x-scroll w-full lg:w-[78vw] px-5 scroll-hide" ref={scrollRef}>
                  {
                          
                             data?.map((item)=>{
                              if(item.type == 'album')
                               return <AlbumItem key={item.id} {...item}/>
                             else if(item.type == 'playlist')  {
                                return <PlayListItem key={item.id} {...item} />
                             }

                             })
                       
                  }
           </div>

         <MdOutlineKeyboardArrowRight className='text-3xl dark:text-gray-300  text-gray-600 hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block' onClick={scrollRight} />  

     </div>
  )
}

export default Slider