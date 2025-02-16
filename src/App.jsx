import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Products from './sections/Products'

const App = () => {
  return (
    <main className='w-full h-screen text-primary-dark '>
      <Header/>
      <Hero/>
      <Products/>
    </main>
  )
}

export default App