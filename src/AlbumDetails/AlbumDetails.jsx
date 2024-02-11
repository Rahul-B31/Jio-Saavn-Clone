import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicContext from "../context/MusicContext";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SongList from "../components/SongList";
import SearchSection from "../components/SearchSection";

function AlbumDetails(){
    const {setSongs} = useContext(MusicContext);
    const [albumData,setAlbumData] = useState({});
    const [image,setImage] = useState(null);

   const {id} = useParams();

    async function getAlbumById(){
       const response = await axios.get(`https://saavn.dev/albums?id=${id}`);
       const {data} =  await response.data;
       setSongs(data.songs)
       setAlbumData(data);
       setImage(getImage(data.image)) 
   }
   const getImage = (image)=>{

       let length = image.length;
       return image[length - 1].link;   
   }
   useEffect(()=>{
      getAlbumById();
      
   },[])

   return (
        <>
            <NavBar/>
            <SearchSection/>
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0 mx-2 lg:mx-auto">
                        <div className="">
                           <img src={image}
                              alt={albumData.title} 
                              width={250} 
                              className="mx-auto mb-4"
                              />
                              <div className="w-[250px] text-gray-600">
                                 <h1 className="font-semibold text-xl">{albumData.name}</h1>
                                 <p>{"By "+albumData.primaryArtists} . {albumData.songCount}</p>
                        </div>
                      </div>
                   <div className="">
                       {
                         albumData.songs?.map((song)=>(<SongList key={song.id} {...song}/>))
                       }
                  </div>
               </div>  
            <Player/>
        </>
   )

}
export default AlbumDetails;