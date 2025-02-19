import React, {useState} from 'react'
import { products, sneaker_categories } from '../constants'
import Card from '../components/Card'
import clsx from 'clsx';

const Products = () => {
    const [filter, setFilter] = useState(false);


  return (
    <section name="Продукти">
        <h1 className='ml-16 pl-1 mt-8 text-2xl border-l-accent-magenta border-l-4 font-bebas font-bold'>Продукти</h1>

        <div className="mt-8 mx-16 max-md:mx-8 rounded-3xl p-1 flex gap-6 max-sm:gap-1.5 bg-gradient-to-br from-[hsl(327,100%,45%)] to-[hsl(259,77%,25%)]">
            <button className='hidden max-sm:inline-block z-10 bg-light w-14 h-min rounded-full mt-1 ml-1' onClick={() => setFilter((prevState) => !prevState)}>
                <img src={`./icons/${filter? 'close' : 'hamburger'}.svg`} alt="menu" className='w-full h-full object-contain p-2' />
            </button>

            <ul className={clsx("bg-dark rounded-3xl p-4 h-min ", filter ? 'absolute block' : 'max-sm:hidden')}>
                {sneaker_categories.map((category) => (
                <li key={category.id} className={clsx("mx-8 my-4 pb-4 border-b-2 border-light/25 last:border-b-2 hover:border-light transition-all duration-500", filter && 'first:mt-10')}>
                    <button className='cursor-pointer'>{category.name}</button>
                </li>
                ))}
            </ul>

            <div className='right-10 w-full rounded-3xl p-1 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(125px,1fr))] gap-3'>
            {products.map((shoe) => (
                <Card imgUrl={shoe.imgURL} name={shoe.name} price={shoe.price}></Card>
            ))}
        </div>
        </div>


    </section>
  )
}

export default Products