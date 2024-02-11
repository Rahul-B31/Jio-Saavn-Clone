import {BiRepeat} from 'react-icons/bi'
import {IoMdSkipBackward,IoMdSkipForward} from 'react-icons/io'
import {PiShuffleBold} from 'react-icons/pi'
import {FaPlay,FaPause} from 'react-icons/fa'
import {HiSpeakerWave} from 'react-icons/hi2'
import {LuHardDriveDownload} from 'react-icons/lu';
import VolumeController from './VolumeController'
import { useContext, useEffect, useRef, useState } from 'react'
import MusicContext from '../context/MusicContext'
import axios from 'axios'

const Player = () => {

   const [isVolumeVisible,setVolumeVisible] = useState(false); 
   const {PlayMusic,isPlaying,currentSong,nextSong,prevSong} = useContext(MusicContext);

    const InputRef = useRef(null);
     useEffect(()=>{
      
         if(currentSong){

           const audioElement = currentSong.audio;

            function handleTimeUpdate(){
                const duration = Number(currentSong.duration);
                const currentTime = audioElement.currentTime;
                const newTime = (currentTime / duration) * 100;

                InputRef.current.value= newTime;
            }
            function handleSongEnd(){
                nextSong();
            }

            audioElement.addEventListener("timeupdate",handleTimeUpdate)
            audioElement.addEventListener("ended",handleSongEnd)

            return ()=>{
                audioElement.removeEventListener("timeupdate",handleTimeUpdate)
                audioElement.removeEventListener("ended",handleSongEnd)
            }
         }2
         
     },[currentSong])


    async function handleDownloadSongs(url){
         try {


            const response = await fetch(url)
            const blob  = await response.blob();

            const link  = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download  = `${currentSong.name}.mp3`;

             document.body.appendChild(link);
             link.click();
             document.body.removeChild(link)
            
         } catch (error) {
             console.log("Error",error)
         }
       
     }

     function handleProgess(event){
              const newPercentage = parseFloat(event.target.value);
              const newTime = (newPercentage / 100) * Number(currentSong.duration);
              currentSong.audio.currentTime = newTime;
     }

    
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f5f5f5ff] dark:bg-darkblue  flex flex-col" >
       <input type="range" 
             name="progress"
            id="progress"
            min={0} 
            max={100}  
            step="0.1" 
            value={0}
            className="w-full h-2 text-green-400"
            ref={InputRef}
            onChange={handleProgess}
            />
        <div className="flex justify-between items-center mb-3 px-3">

                {/* album image  */}
                <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
                    <img src={currentSong?.image} alt="" 
                    width={55}
                    className="rounded-lg"
                    />

                    <div className="hidden lg:block">
                        <span className='dark:text-gray-200 '>{currentSong?.name}</span>
                        <p className="text-xs text-gray-500 dark:text-gray-300">{currentSong?.primaryArtists}</p>
                    </div>

                </div>

                <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
                    <BiRepeat className='text-gray-400 cursor-pointer '/>


                    {/* {Prev song} */}
                    <IoMdSkipBackward className='text-gray-700 hover:text-gray-500 dark:text-gray-100 cursor-pointer' onClick={prevSong}/>

                    {
                        isPlaying?(
                            <FaPause className='text-gray-700 hover:text-gray-500 cursor-pointer dark:text-gray-100'
                            onClick={()=>{
                                PlayMusic(currentSong.audio,currentSong.name,currentSong.duration,currentSong.image,currentSong.id)
                            }}/>
                        )
                        :(
                            <FaPlay className='text-gray-700 hover:text-gray-500 cursor-pointer dark:text-gray-100'
                            onClick={()=>{
                                PlayMusic(currentSong.audio,currentSong.name,currentSong.duration,currentSong.image,currentSong.id)
                            }}/>
                        )
                        
                    }


                    <IoMdSkipForward className='text-gray-700 hover:text-gray-500 cursor-pointer dark:text-gray-100' onClick={nextSong}/>


                    <PiShuffleBold className='text-gray-500 cursor-pointer '/>

                </div>


                <div className="flex lg:w-[30vw] justify-end items-center lg:text-xl gap-3" >
                    <LuHardDriveDownload className='text-gray-700 lg:text-3xl hover:text-gray-500 cursor-pointer lg:mr-2 dark:text-gray-100' onClick={()=>handleDownloadSongs(currentSong.audio.src)}/>
                    <HiSpeakerWave className='text-gray-700 lg:text-3xl hover:text-gray-500 cursor-pointer lg:mr-2 dark:text-gray-100 ' 
                          onClick={()=>setVolumeVisible(!isVolumeVisible)}
                          
                   />
                    <VolumeController isVolumeVisible={isVolumeVisible}/>
                </div>
        </div>

    </div>
  )
}

export default Player