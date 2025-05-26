import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
const AddProduct = () => {
  
  const [product, setProduct] = useState({
    productName: '',
    productDescription: '',
    productImage: '',
    productPrice: '',
    productAvailableQuantity: '',
  })

  const handleChange = (e) => {
    setProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFile = (e) => {
    setProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.files[0]
      }
    })
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('productName', product.productName)
      formData.append('productDescription', product.productDescription)
      formData.append('productImage', product.productImage)
      formData.append('productPrice', product.productPrice)
      formData.append('productAvailableQuantity', product.productAvailableQuantity)
      const response = await axios.post('http://localhost:5000/api/product/add-product', formData)
      toast.success('Product Added', {
        position: 'bottom-left',
        autoClose: true
      })
    } catch (error) {
      console.log(error);
      toast.error('Error Occured', {
        position: 'bottom-left',
        autoClose: '2000'
      })
    }    
     
  }


  return(
    <div className="">
      <div>
      <h1 className="text-2xl font-bold text-center mb-8">
        Add Product
      </h1>
      <div class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="productName"
            id="productName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="productName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name*
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="productDescription"
            id="productDescription"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="productDescription"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Description*
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="productPrice"
              id="productPrice"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="productPrice"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="file"
              accept="image/*"
              name="productImage"
              id="productImage"
              className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleFile}
            />
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="productAvailableQuantity"
            id="productAvailableQuantity"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="productAvailableQuantity"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Available Stock*
          </label>
        </div>
        <div className="flex items-center justify-center">
        <button
          onClick={handleSubmit}
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
        </div>
        
      </div>
    </div>
    </div>
  )
}



const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTab, setSelectedTab] = useState('orders')

  const fetchOrders = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/order/get-orders"
    );
    setOrders(response.data.orders.reverse());
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (order, e) => {
    const value = e.target.value
    await axios.put(`http://localhost:5000/api/order/update-status/${order._id}`, {value})
  }

  return (
    <div className="All Orders">
      <Navbar />

      <div className="flex gap-6 px-8 my-4 cursor-pointer">
        <h1 onClick={() => setSelectedTab('orders')} className={`${selectedTab === 'orders' ? "font-bold" : ""}`}>All Orders</h1>
        <h1 onClick={() => setSelectedTab('products')} className={`${selectedTab === 'products' ? "font-bold" : ""}`}>Add Products</h1>
      </div>
      {
        selectedTab === 'orders'
        ?
        <div className="relative overflow-x-auto">
          <h1 className="text-3xl font-bold text-center my-5">All Orders</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.productName}
                  </th>
                  <td className="px-6 py-4">{item.userPhone}</td>
                  <td className="px-6 py-4">{item.userName}</td>
                  <td className="px-6 py-4">{item.userAddress}</td>
                  <td className="px-6 py-4">{item.productPrice.toFixed(2)}</td>
                  <td className="px-6 py-4">{item.productQuantity}</td>

                  <td className="px-6 py-4">
                    <select value={item.status} onChange={(e) => updateStatus(item, e)} name="" id="">
                        <option value="Ordered">Ordered</option>
                        <option value="On Delivery">On Delivery</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      :
      <AddProduct/>
      }
        
      <Footer />
    </div>
  );
};

export default Admin;
