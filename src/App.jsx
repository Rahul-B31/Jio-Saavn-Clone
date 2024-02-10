
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import AlbumDetails from './AlbumDetails/AlbumDetails'

function App() {

  return (
      <BrowserRouter>
    
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Albums/:id' element={<AlbumDetails/>}/>
          </Routes>
      </BrowserRouter> 
  )
}

export default App
