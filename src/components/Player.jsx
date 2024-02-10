import {BiRepeat} from 'react-icons/bi'
import {IoMdSkipBackward,IoMdSkipForward} from 'react-icons/io'
import {PiShuffleBold} from 'react-icons/pi'
import {FaPlay,FaPause} from 'react-icons/fa'
import {HiSpeakerWave} from 'react-icons/hi2'
import {LuHardDriveDownload} from 'react-icons/lu';
import VolumeController from './VolumeController'
import { useContext, useState } from 'react'
import MusicContext from '../context/MusicContext'

const Player = () => {

   const [isVolumeVisible,setVolumeVisible] = useState(false); 
   const {PlayMusic,isPlaying,currentSong,nextSong,prevSong} = useContext(MusicContext);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f5f5f5ff] flex flex-col" >
       <input type="range" 
             name="progress"
            id="progress"
            min={0} 
            max={100}  
            step="0.1" 
            value={0}
            className="w-full h-2 text-green-400"
            />
        <div className="flex justify-between items-center mb-3 px-3">

                {/* album image  */}
                <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
                    <img src={currentSong?.image} alt="" 
                    width={55}
                    className="rounded-lg"
                    />

                    <div className="hidden lg:block">
                        <span>{currentSong?.name}</span>
                        <p className="text-xs text-gray-500">{currentSong?.primaryArtists}</p>
                    </div>

                </div>

                <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
                    <BiRepeat className='text-gray-400 cursor-pointer'/>


                    {/* {Prev song} */}
                    <IoMdSkipBackward className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={prevSong}/>

                    {
                        isPlaying?(
                            <FaPause className='text-gray-700 hover:text-gray-500 cursor-pointer'
                            onClick={()=>{
                                PlayMusic(currentSong.audio,currentSong.name,currentSong.duration,currentSong.image,currentSong.id)
                            }}/>
                        )
                        :(
                            <FaPlay className='text-gray-700 hover:text-gray-500 cursor-pointer'
                            onClick={()=>{
                                PlayMusic(currentSong.audio,currentSong.name,currentSong.duration,currentSong.image,currentSong.id)
                            }}/>
                        )
                        
                    }


                    <IoMdSkipForward className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={nextSong}/>


                    <PiShuffleBold className='text-gray-500 cursor-pointer '/>

                </div>


                <div className="flex lg:w-[30vw] justify-end items-center lg:text-xl">
                    <LuHardDriveDownload className='text-gray-700 hover:text-gray-500 cursor-pointer lg:mr-2 '/>
                    <HiSpeakerWave className='text-gray-700 hover:text-gray-500 cursor-pointer lg:mr-2 ' 
                    onMouseOver={()=>setVolumeVisible(true)}
                    onMouseOut={()=>setVolumeVisible(false)}
                   />
                    <VolumeController isVolumeVisible={isVolumeVisible}/>
                </div>
        </div>

    </div>
  )
}

export default Player