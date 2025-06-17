import axios from "axios";
import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js'

const UserInfo = ({product, productQuantity}) => {
  const [countries, setCountries] = useState([])
  
  const fetchCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name')    
    setCountries(response.data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])
    
    const [data, setData] = useState({
        productName: product.productName,
        productQuantity: productQuantity,
        userName: '',
        userEmail: '',
        userPhone: '',
        userCountry: '',
        userAddress: '',
    })

    const handleChange = (e) => {      
        setData((prev) => {
            return {
            ...prev,
            [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async () => {
      
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
        const body = {
          product: product,
          order: data
        }       
        const session = await axios.post("https://jpw-flax.vercel.app/api/order/create-checkout-session", body)

        const result = stripe.redirectToCheckout({
          sessionId: session.data.id
        })
        
        // save to localStorage
        localStorage.setItem("jpw_order", JSON.stringify({
          product, 
          order: data
        }))
    }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-8">
        Provide Us Information
      </h1>
      <div class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="userName"
            id="userName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="userName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name*
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="userEmail"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address*
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="userPhone"
              id="userPhone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="userPhone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (0300-4567890)
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <select onChange={handleChange} name="userCountry" id="userCountry" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
              <option key="" value="" disabled>Select Country</option>
              {countries.map((item) => {
                return(
                  <option value={item.name.common}>{item.name.common}</option>
                )
              })}
            </select>
            <label
              for="userCountry"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Country
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="userAddress"
            id="userAddress"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="userAddress"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address*
          </label>
        </div>
        <div className="flex items-center justify-center">
        <button
          onClick={handleSubmit}
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default UserInfo;
