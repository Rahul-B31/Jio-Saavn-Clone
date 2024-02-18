
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import AlbumDetails from './AlbumDetails/AlbumDetails'
import MusicContext from './context/MusicContext'
import { useEffect, useState } from 'react'
import PlayListDetails from './PlayListDetails/PlayListDetails'

function App() {

  
  const [songs,setSongs] = useState([]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [currentSong,setCurrentSong] = useState(null);
  const [searchedSong,setSearchSong] = useState([]);
 
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
       setIsPlaying(true);
  
       await newAudio.play();
     }
  }

  const nextSong = ()=>{
    if(currentSong){
       const index = songs.findIndex((song)=> song.id === currentSong.id)
       if(index === songs.length - 1 ){
          const {downloadUrl,name,duration,image,id,primaryArtists} = songs[0];
          PlayMusic(downloadUrl,name,duration,image,id,primaryArtists)
       }
       else{
          const {downloadUrl,name,duration,image,id,primaryArtists} = songs[index + 1]
          PlayMusic(downloadUrl,name,duration,image,id,primaryArtists);
       }
         
    }

  }

  const prevSong = ()=>{
    if(currentSong){
       const index = songs.findIndex((song)=> song.id === currentSong.id)
       if(index === 0 ){
          const {downloadUrl,name,duration,image,id,primaryArtists} = songs[songs.length - 1];
          PlayMusic(downloadUrl,name,duration,image,id,primaryArtists)
       }
       else{
          const {downloadUrl,name,duration,image,id,primaryArtists} = songs[index - 1]
          PlayMusic(downloadUrl,name,duration,image,id,primaryArtists);
       }
         
    }

  }

  return (
   

      <MusicContext.Provider value={{songs,setSongs,PlayMusic,isPlaying,setIsPlaying,currentSong,nextSong,prevSong,searchedSong,setSearchSong}}>
          <BrowserRouter>
  
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/Albums/:id' element={<AlbumDetails/>}/>
                  <Route path='/PlayList/:id' element={<PlayListDetails/>}/>
              </Routes>
  
      </BrowserRouter> 
      </MusicContext.Provider>
        

  
  )
}

export default App
