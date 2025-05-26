import { useEffect, useState } from 'react'
import washer from '../assets/washer.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Products = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/api/product/all-products')    
    setProducts(response.data.products.reverse())
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='px-28 pt-6 pb-10 bg-slate-50 w-full max-md:px-10'>
        <h1 className='text-3xl font-bold text-blue-600 my-2'>Top Products</h1>
        <h1 className='text-xl'>VBR</h1>
        <hr className='my-4 border-gray-300' />
        <div className='flex gap-4 flex-wrap w-full'>
        {products.map((item) => {
          return(
          <div className='product-card w-48 max-sm:w-full bg-white px-2 py-4 cursor-pointer flex flex-col justify-between'>
            <div>
            <img className='w-72 h-56' src={`http://localhost:5000/${item?.productImage}`} alt="" />
            <h1>{item.productName}</h1>
            </div>
            <div>
              <hr className='my-4 border-gray-300' />
            <div className='flex items-center justify-center'>
                <Link className='cursor-pointer text-blue-600 uppercase border border-blue-500 px-2 py-1' to={`/product/${item._id}`}>View More</Link>
            </div>
            </div>

          </div>
          ) 
        })}
        </div>
    </div>
  )
}

export default Products