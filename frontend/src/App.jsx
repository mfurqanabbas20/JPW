import Home from './pages/Home'
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Product from './pages/Product'
import OrderConfirm from './pages/OrderConfirm'
import Admin from './pages/Admin'
import AllProducts from './pages/AllProducts'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'

function ScrollToHashElement() {  
  const location = useLocation()
  useEffect(() => {
    console.log('Location', location);
    if(location.pathname === '/' && location.hash){
      const element = document.getElementById(location.hash.substring(1))
      element.scrollIntoView({behavior: 'smooth'})
    }
  }, [location])
  return null
}


function App() {
  return (
    <>
    <ScrollToHashElement/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/all-products' element={<AllProducts/>} />
      <Route path='/contact-us' element={<Contact/>} />
      <Route path='/about-us' element={<AboutUs/>} />

      <Route path='/product/order-successful' element={<OrderConfirm/>} />
      <Route path='/admin/' element={<Admin/>} />
      <Route path='/admin/add-products' element={<Admin/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
