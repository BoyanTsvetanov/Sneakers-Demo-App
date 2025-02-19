import React from 'react'

const Card = ({imgUrl, name, price}) => {
  return (
    <div className='flex flex-col bg-dark rounded-xl px-4 py-3 group cursor-pointer'>
        <img src={imgUrl} alt="shoe" className='h-full object-contain group-hover:scale-110 transition-all duration-500' />
        <div className='h-[50%]'>
            <p className='max-sm:text-xs text-sm font-roboto max-sm:font-bold'>{name}</p>
            <p className='text-2xl font-bold'>{price}</p>
        </div>    
    </div>
  )
}

export default Card