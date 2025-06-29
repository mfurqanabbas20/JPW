import washer_big from '../assets/washer_big.jpg'
import washer_1 from '../assets/washer_1.jpg'
import washer_2 from '../assets/washer_2.jpg'
import washer_3 from '../assets/washer_3.jpg'
import washer_4 from '../assets/washer_4.jpg'
import bottom_1 from '../assets/bottom_1.jpg'
import bottom_2 from '../assets/bottom_2.jpg'
import bottom_3 from '../assets/bottom_3.jpg'
import bottom_4 from '../assets/bottom_4.jpg'
import bottom_5 from '../assets/bottom_5.jpg'
import bottom_6 from '../assets/bottom_6.jpg'



const HotSelling = () => {
  return (
    <div className='my-4'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-blue-700 hero-heading'>HOT SELLING</h1>
            <hr className='w-56 mt-1 text-blue-300 border-2' />
        </div>
        <div className="gallery flex my-6">
            <img src={washer_big} className='w-full' alt="" />
            <div className="side-images h-full justify-center w-full">
                <div className='h-full flex max-md:flex-wrap'>
                  <img src={washer_1} className='w-1/2 max-md:w-full' alt="" />
                  <img src={washer_2} className='w-1/2 max-md:w-full' alt="" />
                </div>
                <div className='h-full flex max-md:flex-wrap'>
                  <img src={washer_3} className='w-1/2 max-md:w-full' alt="" />
                  <img src={washer_4} className='w-1/2 max-md:w-full' alt="" />
                </div>
            </div>
        </div>
        
        <div className="gallery w-full">
            <div className="side-images h-full justify-center w-full">
                <div className='flex my-2 max-md:flex-wrap'>
                  <img src={bottom_1} className='w-1/2 max-md:w-full' alt="" />
                  <img src={bottom_2} className='w-1/2 max-md:w-full' alt="" />
                </div>
                <div className='flex my-2 max-md:flex-wrap'>
                <img src={bottom_6} className='w-1/2 max-md:w-full' alt="" />
                <img src={bottom_3} className='w-1/2 max-md:w-full' alt="" />
                </div>
                <div className='flex my-2 max-md:flex-wrap'>
                <img src={bottom_4} className='w-1/2 max-md:w-full' alt="" />
                <img src={bottom_5} className='w-1/2 max-md:w-full' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotSelling