import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './pages/Product'
import OrderConfirm from './pages/OrderConfirm'
import Admin from './pages/Admin'
import AllProducts from './pages/AllProducts'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/all-products' element={<AllProducts/>} />
      <Route path='/product/order-successful' element={<OrderConfirm/>} />
      <Route path='/admin/' element={<Admin/>} />
      <Route path='/admin/add-products' element={<Admin/>} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>

  )
}

export default App
