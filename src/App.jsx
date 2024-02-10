
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import AlbumDetails from './AlbumDetails/AlbumDetails'
import MusicContext from './context/MusicContext'
import { useState } from 'react'

function App() {

  
  const [songs,setSongs] = useState([]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [currentSong,setCurrentSong] = useState(null);

  return (
    <MusicContext.Provider value={{songs,setSongs}}>
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
