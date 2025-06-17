import store1 from '../assets/about.jpg'
const About = () => {
  return (
    <div className='flex justify-center'>
        <div className="about-content w-1/2 flex flex-col justify-between max-md:w-full max-md:px-4 max-md:items-center">
          <div>
            <h1 className='text-2xl font-bold max-md:text-center'>About Us</h1>
            <p className='text-sm opacity-70 my-4 w-11/12 max-md:w-full max-md:text-justify'>Welcome to JPW, your trusted destination for high-performance high pressure washers and professional cleaning equipment. With years of experience in the cleaning solutions industry, we pride ourselves on offering products that combine power, efficiency, and durability. Our mission is to make tough cleaning tasks easier for everyone—from homeowners needing to clean patios and driveways, to industrial professionals tackling grease, machinery, and construction equipment.
            We understand that different cleaning challenges require different solutions, which is why we stock a wide variety of pressure washers—from portable electric units for light-duty use to powerful gas-powered machines for commercial and industrial jobs. Every product in our store is handpicked based on quality, reliability, and value.</p>
          </div>
          <button className='bg-transparent border border-orange-400 text-orange-500 w-40 h-12 text-md font-bold rounded-md max-sm:text-sm max-sm:w-28 max-sm:h-10'>Visit Us</button>
        </div>
        <div className="about-images w-1/3 max-md:hidden">
            <img src={store1} alt="" />
        </div>
    </div>
  )
}

export default About