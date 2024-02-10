
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import AlbumDetails from './AlbumDetails/AlbumDetails'
import MusicContext from './context/MusicContext'
import { useEffect, useState } from 'react'

function App() {

  
  const [songs,setSongs] = useState([]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [currentSong,setCurrentSong] = useState(null);

  const PlayMusic = async (music,name,duration,image,id,primaryArtists)=>{

     if(currentSong && currentSong.id === id){
         if(isPlaying){
          setIsPlaying(false);
         currentSong.audio.pause();   
         }
         else{
          setIsPlaying(true)
          await currentSong.audio.play();
         }
     }
     else{
       if(currentSong){
         currentSong.audio.pause();
         setIsPlaying(false);
       }
       const newAudio = new Audio(music[4].link);
       setCurrentSong({
        name,
        id,
        duration,
        image:image[2].link,
        audio:newAudio,
        primaryArtists
       })
       setIsPlaying(true)
       console.log("id",id)
       console.log("name",name)
  
       await newAudio.play();

     }

  }

  return (
    <MusicContext.Provider value={{songs,setSongs,PlayMusic,isPlaying,setIsPlaying,currentSong}}>
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Albums/:id' element={<AlbumDetails/>}/>
            </Routes>

            </BrowserRouter> 
    </MusicContext.Provider>
      
  )
}

export default App
