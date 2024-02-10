
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react';
import AlbumItem from './AlbumItem';
import Slider from './Slider';
const MainComponet = () => {
    const [album,setAlbum] = useState([]);
    const [trending,setTrending] = useState([]);

    const getHomePageData = async ()=>{
        const response =  await axios.get("https://saavn.dev/modules?language=hindi");
        const {data}  = response.data;
        setAlbum(data.albums);
        setTrending(data.trending)
        
     
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
                <h2 className='text-xl px-5 py-3 font-semibold text-gray-600 w-full lg:w-[78vw] mx-auto'>
                    Trending Now
                </h2>
                <Slider data={trendingAlbums}/>
                <h2 className='text-xl px-5 py-3 font-semibold text-gray-600 w-full lg:w-[78vw] mx-auto'>
                   Top Albums
                </h2>
                <Slider data={album}/>
         </section>
  )
}

export default MainComponet