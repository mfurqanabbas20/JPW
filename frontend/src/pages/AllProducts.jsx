import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import HotSelling from "../components/HotSelling"
import { RotatingTriangles } from 'react-loader-spinner'

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

      const fetchProducts = async () => {
        setLoading(true)
        try {
          const response = await axios.get('https://jpw-flax.vercel.app/api/product/all-products')    
          setProducts(response.data.products.reverse())
        } catch (error) {
          console.log(error);
        }
        finally {
          setLoading(false)
        }
      }

      useEffect(() => {
        fetchProducts()
      }, [])

  return (
    <div className='all-products'>
        <Navbar/>
        <h1 className="text-2xl font-bold my-3 mx-8 poppins">All Products</h1>
        <div className="poppins">
        {
        loading
        ?
        <div className="flex items-center justify-center mx-8">
        <RotatingTriangles
           visible={true}
           height="80"
           width="80"
           color="#4fa94d"
           ariaLabel="rotating-triangles-loading"
           wrapperStyle={{}}
           wrapperClass=""
         />
        </div>
        :
        <>
        <div className="flex gap-4 flex-wrap px-8">
         {products.map((item) => {
          return(
           <div className='product-card w-1/4 max-sm:w-full max-lg:w-1/3 bg-white px-2 py-4 cursor-pointer flex flex-col justify-between'>
            <div className="flex flex-col gap-2">
            <img className='w-full h-56 object-cover' src={`https://jpw-flax.vercel.app/${item?.productImage}`} alt="" />
            <h1 className='w-full text-sm'>{item.productName}</h1>
            </div>
            <div>
            <hr className='my-4 border-gray-300' />
            <div className='flex items-center justify-center'>
                <Link className='cursor-pointer text-blue-600 uppercase border border-blue-500 px-2 py-1 poppins text-sm' to={`/product/${item._id}`}>View More</Link>
            </div>
            </div>

          </div>
          ) 
        })}
        </div>
        <HotSelling/>
        </>
        }
    
        </div>
        <Footer/>
    </div>
  )
}

export default AllProducts