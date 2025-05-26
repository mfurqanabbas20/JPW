import React from 'react'
import truck from '../assets/truck.png'
import payment from '../assets/wallet.png'
import products from '../assets/products.png'
import hours from '../assets/24-hours.png'

const Services = () => {
  return (
    <div className='my-10'>
        <h1 className='text-2xl text-center font-bold'>Services</h1>
        <p className='text-sm text-center opacity-60'>From lightning-fast delivery to secure payments and 24/7 support.</p>
        <div className="card-container flex flex-wrap items-center justify-center gap-2 my-3">
         <div className="card w-64 px-2 py-4">
            <img src={truck} className='size-10 my-2' alt="" />
            <h1 className='text-xl font-bold'>Super Fast Delivery</h1>
            <p className='text-sm opacity-50 mt-1'>Get your products delivered at lightning speed. We ensure fast and secure delivery to your doorstep with real-time tracking and updates.</p>
         </div>
         <div className="card w-64 px-2 py-4">
            <img src={products} className='size-10 my-2' alt="" />
            <h1 className='text-xl font-bold'>Best Products</h1>
            <p className='text-sm opacity-50 mt-1'>We offer premium quality products that are thoroughly checked and sourced from trusted brands to ensure satisfaction and reliability.</p>
         </div>
         <div className="card w-64 px-2 py-4">
            <img src={payment} className='size-10 my-2' alt="" />
            <h1 className='text-xl font-bold'>Payment Secure</h1>
            <p className='text-sm opacity-50 mt-1'>All transactions are protected with advanced encryption. Your payment information is safe with our reliable and secure systems.</p>
         </div>
         <div className="card w-64 px-2 py-4">
            <img src={hours} className='size-10 my-2' alt="" />
            <h1 className='text-xl font-bold'>24/7 Support</h1>
            <p className='text-sm opacity-50 mt-1'>Our support team is available round-the-clock to assist you with any queries or issues. We're here whenever you need help.</p>
         </div>
        </div>
    </div>
  )
}

export default Services