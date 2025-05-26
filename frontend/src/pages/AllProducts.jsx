import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import HotSelling from "../components/HotSelling"

const AllProducts = () => {
    const [products, setProducts] = useState([])
      const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/product/all-products')    
        setProducts(response.data.products.reverse())
      }
      useEffect(() => {
        fetchProducts()
      }, [])

  return (
    <div className='all-products'>
        <Navbar/>
        <div className="mx-8">
        <h1 className="text-2xl font-bold my-3">All Products</h1>
        <div className="flex gap-4 flex-wrap">
         {products.map((item) => {
          return(
          <div className='product-card w-48 bg-white px-2 py-4 cursor-pointer'>
            <img className='w-72 h-56' src={`http://localhost:5000/${item?.productImage}`} alt="" />
            <h1>{item.productName}</h1>
            <hr className='my-4 border-gray-300' />
            <div className='flex items-center justify-center'>
                <Link className='cursor-pointer text-blue-600 uppercase border border-blue-500 px-2 py-1' to={`/product/${item._id}`}>View More</Link>
            </div>
          </div>
          ) 
        })}
        </div>
        <HotSelling/>
        </div>
        <Footer/>
    </div>
  )
}

export default AllProducts