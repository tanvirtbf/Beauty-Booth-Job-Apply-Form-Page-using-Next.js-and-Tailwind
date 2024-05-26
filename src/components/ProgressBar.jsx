import React from 'react'

const ProgressBar = ({whichForm}) => {
  let width ;
  if(whichForm === 1){
    width = 'w-0'
  }else if(whichForm === 2){
    width = 'w-1/2'
  }else if(whichForm === 3){
    width = 'w-full'
  }
  return (
    <div className="bg-[#F0F0F0] w-full h-3 rounded-lg relative z-0">
      <div className={`bg-[#FF216D] absolute ${width} h-full rounded-lg z-10 transition-all duration-500 ease-in-out`}></div>
    </div>
  )
}

export default ProgressBar
