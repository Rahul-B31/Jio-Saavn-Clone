function Home(){
   return (
     <>
         <NavBar/>
         <SearchSection/>
         <MainComponet/>
         <Player/>
     </>
       
   )

}
export default Home;

import React from 'react'
import NavBar from '../components/NavBar';
import Player from '../components/Player';
import MainComponet from '../components/MainComponet';
import SearchSection from '../components/SearchSection';

