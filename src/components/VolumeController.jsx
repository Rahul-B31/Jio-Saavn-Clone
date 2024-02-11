import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import MusicContext from '../context/MusicContext';

const VolumeController = ({isVolumeVisible}) => {
  const {currentSong} = useContext(MusicContext);
  const [volume,setVolume] = useState(50);

useLayoutEffect(()=>{

  if(currentSong){
       setVolume(currentSong.audio.volume * 100)
     
  }
 },[currentSong,volume])

function handleVolumeChange(event){
      if(currentSong){
           const newVolume = parseFloat(event.target.value) / 100;
           currentSong.audio.volume = newVolume;
           setVolume(newVolume);
      }

}

  return (
      isVolumeVisible && <div className="w-[90px] absolute -rotate-90 bottom-20 -right-3 shadow-md px-2 rounded-lg bg-white">
        <input type="range" 
            min={0} 
            max={100}  
            step="0.1" 
            value={volume}
            className="w-full h-2 text-green-400 transition-all ease-in-out duration-75 "
            onChange={handleVolumeChange}
            />
      </div>
  )
}

export default VolumeController