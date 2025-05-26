import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <Services/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home