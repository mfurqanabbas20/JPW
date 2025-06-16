import JPW from '../assets/JPW.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center w-full justify-between px-10 max-sm:w-full max-sm:justify-center '>
        <Link to='/' className="logo">
            <img className='h-20 w-28 object-cover' src={JPW} alt="" />
        </Link>
        <div className="nav-items text-md max-sm:hidden">
            <ul className='flex gap-6 cursor-pointer'>
                <Link className='hover:bg-blue-200 rounded-sm p-3' to='/'>Home</Link>
                <Link className='hover:bg-blue-200 rounded-sm p-3' to='/'>About Us</Link>
                <Link className='hover:bg-blue-200 rounded-sm p-3' to='/all-products'>Products</Link>
                <Link className='hover:bg-blue-200 rounded-sm p-3' to='/'>Services</Link>
                <Link className='hover:bg-blue-200 rounded-sm p-3' to='/'>Contact Us</Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar