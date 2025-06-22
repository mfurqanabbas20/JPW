import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import JPW from '../assets/jpw_remove.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex mt-20 py-6 poppins p-0 max-md:flex-none bg-blue-900 text-white'>
        <div className="footer-sections-container w-fullflex justify-around max-md:flex-wrap gap-5 max-md:w-screen max-md:text-center max-sm:justify-center">
         <div className="footer-logo-section w-1/4 max-md:w-full flex flex-col justify-between max-md:items-center px-5 max-md:px-0">
            <Link to='/' className="logo">
                <img src={JPW} alt='Truck Image' className='h-20 w-28 object-cover'/>
            </Link>
            <div className="description">
                <p className='text-[13px] opacity-80'>JPW offers durable, high-performance pressure washers for homeowners and professionals, with a wide range of cleaning solutions.</p>
            </div>
            <div className="social-media-icons flex gap-2 items-center mt-2">
                <img className='size-5' src={facebook} alt="" />
                <img className='size-5' src={instagram} alt="" />
                <img className='size-5' src={twitter} alt="" />
                <img className='size-5' src={linkedin} alt="" />
            </div>
        </div>
        <div className="footer-section w-1/4 max-md:flex max-md:flex-col max-md:items-center max-sm:w-96">
            <h1 className='font-bold text-lg'>About Us</h1>
            <ul className='text-md opacity-70 flex flex-col gap-3 mt-4 text-sm'>
                <li className='cursor-pointer'>Who We Are</li>
                <li className='cursor-pointer'>What We Do</li>
                <li className='cursor-pointer'>Our Impact</li>
                <Link to='/all-products'>JPW Products</Link>
            </ul>
        </div>
        <div id='contact' className="footer-section w-1/4 max-md:flex max-md:flex-col max-md:items-center text-sm max-sm:w-96">
            <h1 className='font-bold text-lg'>Media</h1>
            <ul className='text-md opacity-70 flex flex-col gap-3 mt-4'>
                <li className='cursor-pointer'>News & Updates</li>
                <li className='cursor-pointer'>Press Coverage</li>
                <li className='cursor-pointer'>Media Kit</li>
            </ul>
        </div>
        <div className="footer-section w-1/4 max-md:flex max-md:flex-col max-md:items-center text-sm max-sm:w-96">
            <h1 className='font-bold text-lg'>Contact</h1>
            <ul className='text-md opacity-70 flex flex-col gap-3 mt-4'>
                <li className='cursor-pointer'>112 Dorrington close 
Bedfordshire,  Lu3 1xr 
Luton,  United kingdom</li>
                <li className='cursor-pointer'>07417480001</li>
                <li className='cursor-pointer'>Take Record</li>
                <li className='cursor-pointer'>jpw-store.vercel.com</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer