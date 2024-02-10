import React from 'react'

const VolumeController = ({isVolumeVisible}) => {
  return (
      isVolumeVisible && <div className="w-[80px] absolute -rotate-90 bottom-20 -right-3 shadow-md px-2 rounded-lg bg-red-100">
        <input type="range" 
            min={0} 
            max={100}  
            step="0.1" 
            value={0}
            className="w-full h-2 text-green-400"
            />
      </div>
  )
}

export default VolumeController