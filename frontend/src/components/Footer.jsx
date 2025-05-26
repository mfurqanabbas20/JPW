import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import JPW from '../assets/JPW.jpg'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex mt-20 mb-6'>
        <div className="footer-logo-section w-1/3 flex flex-col justify-between px-5 max-md:hidden">
            <Link to='/home' className="logo">
                <img src={JPW} alt='Truck Image' className='h-20 w-28 object-cover'/>
            </Link>
            <div className="description">
                <p className='text-sm'>JPW offers durable, high-performance pressure washers for homeowners and professionals, with a wide range of cleaning solutions.</p>
            </div>
            <div className="social-media-icons flex gap-2 items-center mt-2">
                <img className='size-5' src={facebook} alt="" />
                <img className='size-5' src={instagram} alt="" />
                <img className='size-5' src={twitter} alt="" />
                <img className='size-5' src={linkedin} alt="" />
            </div>
        </div>
        <div className="footer-sections-container w-full flex justify-around flex-wrap gap-5 max-md:w-screen max-md:text-center">
        <div className="footer-section w-64 max-md:flex max-md:flex-col max-md:items-center">
            <h1 className='font-bold text-lg'>About Us</h1>
            <ul className='text-md opacity-70 flex flex-col gap-3 mt-4'>
                <li className='cursor-pointer'>Who We Are</li>
                <li className='cursor-pointer'>What We Do</li>
                <li className='cursor-pointer'>Our Impact</li>
                <Link to='/all-products'>JPW Products</Link>
                {/* <li className='cursor-pointer'>JPW Products</li> */}
            </ul>
        </div>
        <div className="footer-section w-64 max-md:flex max-md:flex-col max-md:items-center">
            <h1 className='font-bold text-lg'>Media</h1>
            <ul className='text-md opacity-70 flex flex-col gap-3 mt-4'>
                <li className='cursor-pointer'>News & Updates</li>
                <li className='cursor-pointer'>Press Coverage</li>
                <li className='cursor-pointer'>Media Kit</li>
            </ul>
        </div>
        <div className="footer-section w-64 max-md:flex max-md:flex-col max-md:items-center">
            <h1 className='font-bold text-lg'>Contact</h1>
            <ul className='text-md opacity-70 flex flex-col gap-3 mt-4'>
                <li className='cursor-pointer'>New Delhi, Pakistan</li>
                <li className='cursor-pointer'>+92 300 1234567</li>
                <li className='cursor-pointer'>Take Record</li>
                <li className='cursor-pointer'>www.facebook.com</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Footer