import React from 'react'
import { products, sneaker_categories } from '../constants'
import Card from '../components/Card'

const Products = () => {
  return (
    <section className='relative h-screen' name="Продукти">
        <h1 className='ml-16 pl-1 mt-8 text-2xl border-l-accent-magenta border-l-4 font-bebas font-bold'>Продукти</h1>

        <ul className="absolute mt-8 mx-16 max-md:mx-8 rounded-3xl p-1 flex gap-6 bg-gradient-to-br from-[hsl(327,100%,45%)] to-[hsl(259,77%,25%)]">
            <div className="bg-dark rounded-3xl p-4 h-min max-sm:hidden">
                {sneaker_categories.map((category) => (
                <li key={category.id} className="mx-8 my-4 pb-4 border-b-2 border-light/25 last:border-b-0">
                    <button>{category.name}</button>
                </li>
                ))}
            </div>

            <div className='right-10 w-full rounded-3xl p-1 grid grid-cols-[repeat(auto-fit,minmax(150px,2fr))] gap-3'>
            {products.map((shoe) => (
                <Card imgUrl={shoe.imgURL} name={shoe.name} price={shoe.price}></Card>
            ))}
        </div>
        </ul>


    </section>
  )
}

export default Products