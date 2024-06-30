import React from 'react'

const ExcerciseModal = ({image,name}) => {
  
  return (
    <div className="relative h-44 w-40 rounded-md cursor-pointer md:h-56 md:w-52 ">

      <img className=" h-40 w-40 object-cover rounded-md hover:animate-none md:w-52 md:h-52 hover:border-2 hover:border-blue"  alt="no image" src={image} />
      <span className='text-gray-dark font-bold mt-5  '>{name}</span>
    
     
    </div>
  )
}

export default ExcerciseModal 