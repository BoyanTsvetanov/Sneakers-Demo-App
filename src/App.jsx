import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Info from './sections/Info'

const App = () => {
  return (
    <main className='text-primary-dark '>
      <Header/>
      <Hero/>
      <Products/>
      <Info/>
    </main>
  )
}

export default App