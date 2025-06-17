import store1 from '../assets/about.jpg'

const About = () => {
  return (
   <div>
    <h1 className='poppins text-2xl font-bold max-md:text-center my-4'>About Us</h1>
    <div className='flex justify-center max-md:px-10 max-md:flex-col-reverse'>
        <div className="about-content w-1/2 flex flex-col justify-between max-md:w-full max-md:px-0 max-md:items-center">
          <div>
            <p className='text-[14px] opacity-70 my-4 w-11/12 max-md:w-full max-md:text-justify'>Welcome to JPW, your trusted destination for high-performance high pressure washers and professional cleaning equipment. With years of experience in the cleaning solutions industry, we pride ourselves on offering products that combine power, efficiency, and durability. Our mission is to make tough cleaning tasks easier for everyone—from homeowners needing to clean patios and driveways, to industrial professionals tackling grease, machinery, and construction equipment.
            We understand that different cleaning challenges require different solutions, which is why we stock a wide variety of pressure washers—from portable electric units for light-duty use to powerful gas-powered machines for commercial and industrial jobs. Every product in our store is handpicked based on quality, reliability, and value.</p>
          </div>
          <button className="bg-blue-600/90 rounded-full w-28 h-10 text-white text-md cursor-pointer">Visit Us</button>
        </div>
        <div className="about-images w-1/3 max-md:w-full">
            <img className='object-contain rounded-xl' src={store1} alt="" />
        </div>
    </div>
  </div>
  )
}

export default About