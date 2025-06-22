import { useEffect, useState } from 'react'
import JPW from '../assets/JPW.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [selectedHam, setSelectedHam] = useState(false)

  useEffect(() => {
    document.body.style.overflow = selectedHam ? 'hidden' : 'auto'
  }, [selectedHam])

  return (
    <div className='flex items-center w-full justify-between px-10 max-sm:w-full max-sm:justify-between'>
        <Link to='/' className="logo">
            <img className='h-20 w-28 object-cover' src={JPW} alt="" />
        </Link>
        <div className='md:hidden'>
        <i onClick={() => setSelectedHam(!selectedHam)} className={`${!selectedHam ? "fa-solid fa-bars" : "fa-solid fa-xmark"}`}></i>
         </div>
        {
        selectedHam 
        ?
        <ul className='flex flex-col gap-6 cursor-pointer z-10 fixed bg-white right-0 top-14 w-full h-screen overflow-hidden poppins items-center mt-10 font-semibold md:hidden'>
            <Link className='hover:bg-blue-200 rounded-sm p-3' to='/'>Home</Link>
            <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/#about'>About Us</Link>
            <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/all-products'>Products</Link>
            <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/#services'>Services</Link>
            <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/#contact'>Contact Us</Link>
        </ul>
        :
        ""
        }
        <div className="nav-items text-md max-md:hidden">
            <ul className='flex gap-6 cursor-pointer'>
              <Link className='hover:bg-blue-200 rounded-sm p-3' to='/'>Home</Link>
              <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/#about'>About Us</Link>
              <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/all-products'>Products</Link>
              <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/#services'>Services</Link>
              <Link onClick={() => setSelectedHam(false)} className='hover:bg-blue-200 rounded-sm p-3' to='/#contact'>Contact Us</Link>
                
            </ul>
        </div>

    </div>
  )
}

export default Navbar