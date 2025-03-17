import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../constants';
import Button from '../components/Button';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
              const savedTheme = localStorage.getItem('theme') === 'dark';
              setDarkMode(savedTheme);
              document.documentElement.classList.toggle('dark', savedTheme);
          }, []);

  if (!product) {
    return <h1 className="text-center text-2xl font-bold mt-10">Product Not Found</h1>;
  }

  return (
    <main className='w-full h-full bg-light dark:bg-dark'>
        <Link to="//" className="ml-12 mt-6 inline-block">
          <button className='w-8 h-8 not-dark:invert flex items-center justify-center cursor-pointer'> <img src="../icons/left.svg" alt="icon" /></button>
        </Link>
        <div className="max-w-[80%] h-full mt-2 flex max-lg:flex-col justify-center items-center gap-10 max-md:gap-6 mx-auto lg:px-14 p-10 border rounded-lg shadow-lg  bg-emerald-400">
            <div className='max-w-xl rounded-2xl p-4 aspect-square flex items-center justify-center'>
                <img src={product.imgURL} alt={product.name} className="w-full h-fit object-contain rounded-lg" />
            </div>
       
            <div className='w-full h-full flex flex-col items-start relative justify-between'>
                <h1 className="text-3xl max-sm:text-2xl font-bold mt-4">{product.name}</h1>
                <p className="text-xl text-gray-700">{product.price}</p>
                <p className=" max-sm:text-sm text-gray-600 mt-2">{product.description}</p>

                <div className="mt-8 mb-12">
                    <p className="text-lg max-sm:text-sm font-semibold">Color: <span className="font-normal">{product.color}</span></p>
                    <p className="text-lg max-sm:text-sm font-semibold">Material: <span className="font-normal">{product.material}</span></p>
                    <p className="text-lg max-sm:text-sm font-semibold">Available Sizes: <span className="font-normal">{product.size.join(', ')}</span></p>
                    <p className="text-lg max-sm:text-sm font-semibold">Release Date: <span className="font-normal">{product.releaseDate}</span></p>
                </div>

                <button className='flex justify-center items-center dark:bg-light bg-dark hover:bg-dark-teal hover:text-primary-dark transition-colors duration-300 group rounded-xl p-1.5 font-montserrat text-primary-light not-dark:text-primary-dark font-bold gap-1 cursor-pointer'>
                    <p className='text-2xl max-sm:text-lg'>Добави в количка</p>
                    <img src="../icons/cart.png" alt="icon" className='h-8 not-dark:invert group-hover:invert transition-all duration-300'/>
                </button>
            </div>
        </div>
    </main>
  );
};

export default ProductPage;
