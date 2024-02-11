import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongItem = ({name,image,duration,downloadUrl,id,primaryArtists}) => {

    const {PlayMusic} = useContext(MusicContext);
  return (
   <div className="w-[160px] max-h-[100%] overflow-y-clip flex justify-center flex-col items-center gap-3">
        <img src={image[2]?.link} alt="" className="rounded-lg cursor-pointer" onClick={()=>{
            PlayMusic(downloadUrl,name,duration,image,id,primaryArtists);
        }}/> 
        <div className="text-[13px] w-full flex justify-center items-center gap-3 ">
            <span className="font-semibold overflow-x-clip">{name}</span>
        </div>
   </div>
  )
}

export default SongItem;