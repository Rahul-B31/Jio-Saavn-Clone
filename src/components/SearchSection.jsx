import { useContext } from "react"
import MusicContext from "../context/MusicContext"
import SongItem from "./SongItem"

const SearchSection = () => {
    const {searchedSong} = useContext(MusicContext)
  return (
    <div className={` fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center flex-wrap gap-4 bg-white bg-opacity-20 backdrop-blur-lg ${searchedSong.length ===0 ? "-translate-y-[1200px]": "translate-y-0"}`}>

       {

        searchedSong?.map((song)=>(<SongItem key={song.id} {...song}/>))
      
       }


    </div>
  )
}

export default SearchSection