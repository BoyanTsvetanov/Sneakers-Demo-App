import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Info from './sections/Info'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <Products/>
      <Info/>
      <Contact/>
    </main>
  )
}

export default App