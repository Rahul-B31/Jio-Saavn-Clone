import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicContext from "../context/MusicContext";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import SongList from "../components/SongList";
import SearchSection from "../components/SearchSection";

function PlayListDetails(){


    const {setSongs} = useContext(MusicContext);
    const [playListdata,setplayListdata] = useState({});
    const [image,setImage] = useState(null);

   const {id} = useParams();

    async function getPlayListById(){
       const response = await axios.get(`https://saavn.dev/playlists?id=${id}`);
       const {data} =  await response.data;
       setSongs(data.songs)
       setplayListdata(data);
       setImage(getImage(data.image)) 
       console.log(data)
   }
   const getImage = (image)=>{

       let length = image.length;
       return image[length - 1].link;   
   }
   useEffect(()=>{
    getPlayListById();
      
   },[])

   return (
        <>
            <NavBar/>
            <SearchSection/> 
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0 mx-2 lg:mx-auto z-10">
                        <div className="">
                           <img src={image}
                              alt={playListdata.title} 
                              width={250} 
                              className="mx-auto mb-4"
                              />
                              
                              
                              <div className="w-[250px] text-3xl text-gray-600 ">
                                 <h1 className="font-semibold text-xl">{playListdata.title}</h1>
                                 <p className="font-extrabold">{playListdata.name} .  {playListdata.songCount + " Songs"}</p>
                              </div>
                        </div>


                   <div className="h-[70vh] overflow-auto">
                       {
                         playListdata.songs?.map((song)=>(<SongList key={song.id} {...song}/>))
                       }
                  </div>
               </div>  
            <Player/>
        </>
   )

}
export default PlayListDetails;

