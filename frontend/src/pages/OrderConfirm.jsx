import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const OrderConfirm = () => {
  const data = JSON.parse(localStorage.getItem("jpw_order"))  
  
  const placeOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/order/create-order/${data.product._id}`, data.order)
      toast.success('Ordered Confirmed', {
        position: 'bottom-left',
        autoClose: '2000'
      })
    } catch (error) {
      toast.error('Ordered Confirmed', {
        position: 'bottom-left',
        autoClose: '2000'
      })
    }
    finally {
      localStorage.removeItem("jpw_order")
    }
  }
  useEffect(() => {
    if(data){
      placeOrder()
    }
  }, [])

  return (
    <div className=''>
        <Navbar/>
        <h1 className='text-3xl font-bold px-10 my-6'>Thank you for your order</h1>
        <div className='flex justify-center'>
        <div className="product-card flex items-center justify-around">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
          <thead className="text-xs text-gray-700 uppercase dark:text-white bg-blue-700" >
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Variant
              </th>
              <th scope="col" className="px-6 py-3">
                Product Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Product Total Price
              </th>
            </tr>
          </thead>
          <tbody>
                <tr className="border-b bg-blue-600 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.product.productName}
                  </th>
                  <td className="px-6 py-4 text-white">{data.order.variant}</td>
                  <td className="px-6 py-4 text-white">{data.order.productQuantity}</td>
                  <td className="px-6 py-4 text-white">£{data.product.productPrice * data.order.productQuantity}</td>
                </tr>
          </tbody>
        </table>
            {/* <div className='flex flex-col'>
            <div className="content flex border items-center">
                <h1 className='text-lg font-semibold'>Product Name</h1>
                <p className='text-sm'>Variant</p>
                <p className='text-sm'>Total Price</p>
            </div>
            <div className="content flex border items-center">
                <h1 className='text-lg font-semibold'>Washing Machine Leon 2x</h1>
                <p className='text-sm'>999-1199</p>
                <p className='text-sm'>$450.23</p>
            </div>
            </div> */}
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OrderConfirm