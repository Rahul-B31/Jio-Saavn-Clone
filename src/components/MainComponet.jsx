
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react';
import AlbumItem from './AlbumItem';
import Slider from './Slider';
const MainComponet = () => {
    const [album,setAlbum] = useState([]);
    const [trending,setTrending] = useState([]);
    const [playList,setPlayList] = useState([]);
    const [charts,setCharts] = useState([]);


    const getHomePageData = async ()=>{
        const response =  await axios.get("https://saavn.dev/modules?language=hindi");
        const {data}  = await response.data;
        setAlbum(data.albums);
        setTrending(data.trending)
        setPlayList(data.playlists)
        setCharts(data.charts)
        console.log(data)
        
     
      }

      useEffect(()=>{
         getHomePageData();

      },[])

      const trendingAlbums = useMemo(
           ()=>(Array.isArray(trending.albums) ? trending.albums : []),
           [trending.albums]
         );
  return (
         <section className='my-20'>
                <h2 className='text-xl px-5 py-3 font-semibold text-gray-600 w-full lg:w-[78vw] mx-auto dark:text-gray-200'>
                    Trending Now
                </h2>
                <Slider data={trendingAlbums}/>
                <h2 className='text-xl px-5 py-3 font-semibold text-gray-600 w-full lg:w-[78vw] mx-auto dark:text-gray-200'>
                   Top Albums
                </h2>
                <Slider data={album}/>
                <h2 className='text-xl px-5 py-3 font-semibold text-gray-600 w-full lg:w-[78vw] mx-auto dark:text-gray-200'>
                   Top Playlist
                </h2>
                <Slider data={playList}/>


                <h2 className='text-xl px-5 py-3 font-semibold text-gray-600 w-full lg:w-[78vw] mx-auto dark:text-gray-200'>
                   Top Charts
                </h2>
                <Slider data={charts}/>


         </section>
  )
}

export default MainComponet