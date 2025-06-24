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
          return (
            <div
              key={item._id}
              className="product-card w-[30%] max-sm:w-full max-lg:w-1/2 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <img
                    className="w-full h-56 object-contain mb-4 rounded-t-xl"
                    src={`https://jpw-flax.vercel.app/${item?.productImage}`}
                    alt={item.productName}
                  />
                  <h1 className="text-base font-semibold text-gray-800 text-center px-2 poppins">£{item.productPrice}</h1>
                  <h1 className="text-sm text-gray-800 text-center px-2 poppins">
                    {item.productName}
                  </h1>
      
                </div>

                <div className="mt-4 px-4 pb-4">
                  <hr className="my-3 border-gray-200" />
                  <div className="flex justify-center">
                    <Link
                      to={`/product/${item._id}`}
                      className="uppercase text-sm px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full poppins shadow-sm"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
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