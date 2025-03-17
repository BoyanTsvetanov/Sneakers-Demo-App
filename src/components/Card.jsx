import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({imgUrl, name, price, id}) => {
  return (
    <Link to={`/product/${id}`}>
    <div className='flex flex-col h-full bg-transparent border-2 rounded-xl px-4 py-3 group cursor-pointer'>
        <img src={imgUrl} alt="shoe" className='h-full object-contain group-hover:scale-110 transition-all duration-500' />
        <div className='h-[50%] flex flex-col justify-end'>
            <p className='max-sm:text-xs text-sm font-roboto max-sm:font-bold'>{name}</p>
            <p className='text-2xl font-bold'>{price}</p>
        </div>    
    </div>
    </Link>
  )
}

export default Card