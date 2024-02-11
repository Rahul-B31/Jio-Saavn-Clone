import React, { useContext } from 'react'
import {GoPlay} from 'react-icons/go'
import MusicContext from '../context/MusicContext'


const SongList = ({name,primaryArtists,duration,downloadUrl,image,id}) => {

 const convertTime = (duration)=>{
        const minutes = Math.floor(duration/60);
        const seconds = Math.floor(duration%60);
        return `${minutes}:${seconds}`
 }
 
 const {PlayMusic,isPlaying,currentSong} = useContext(MusicContext);


  return (
     <div className="flex justify-between items-center w-[80vw] lg:w-[50vw] mb-2 lg:mb-1 p-1 px-3 hover: bg-white hover:shadow-md dark:bg-darkblue dark:shadow-gray-700 dark:shadow-xl dark:hover:shadow-green-500">
        

        <img src={image[2].link} width={29} alt="" className='rounded-lg hover:scale-150 transition-all ease-linear duration-100 delay-100' />
        <GoPlay className='text-3xl text-gray-500 dark:text-gray-100 dark:hover:text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer' onClick={()=>{
            
            PlayMusic(downloadUrl,name,duration,image,id,primaryArtists)
         
            }
        }/>

        <div className="flex flex-col lg:flex-row gap-2 justify-between items-start w-[80%]">
            <span className={`font-bold text-xs dark:text-gray-100 ${id == currentSong?.id && "text-[#46c7b6ff] dark:text-[#46c7b6ff]"}`}>{name}</span>
            <span className='font-thin text-xs dark:text-gray-300'>{primaryArtists}</span>
        </div>

        <div >
            <span className='font-thin text-xs text-gray-500 dark:text-gray-200 hidden lg:block'>{convertTime(duration)}</span>
        </div>

     </div>

  )
}

export default SongList