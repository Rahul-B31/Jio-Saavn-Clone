import { Link } from "react-router-dom"


const AlbumItem = ({name,artists,id,image}) => {
  return (
     <Link to={`/Albums/${id}`} className="w-[160px] max-h-[100%] overflow-y-clip flex justify-center flex-col items-center gap-3">

         <img src={image[2].link} alt=""  className="rounded-lg" />

          <div className="text-[13px] w-full flex flex-col justify-center items-center">
             <span className="text-gray-600 font-semibold overflow-x-clip">{name}</span>
             <p className="text-gray-500 font-thin">{artists.map((artist)=>artist.name).join(',').substring(0,20)+"..."}</p>

          </div>
     </Link>
  )
}

export default AlbumItem