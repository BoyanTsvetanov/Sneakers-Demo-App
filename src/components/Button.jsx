import React from 'react'

const Button = ({title, icon}) => {
  return (
    <button className='flex bg-light rounded-xl p-1.5 uppercase font-oswald text-dark font-bold gap-1 cursor-pointer'>
      <p className='max-md:hidden'>{title}</p>
      <img src={icon} alt="icon" className='h-[24px] object-contain' />
    </button>
  )
}

export default Button