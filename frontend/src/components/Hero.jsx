import washer_banner from '../assets/washer_banner.png'
const Hero = () => {
  return(
    <div className="flex flex-col items-center justify-center gap-2 py-6 max-md:text-center">
      <h1 className="hero-heading font-bold text-5xl ">Jet Pressure Washer</h1>
      <h3 className="hero-heading font-normal text-2xl">Meet the Washer Family</h3>
      <div className="flex gap-2 my-2">
        <button className="bg-blue-600/90 rounded-full w-28 h-10 text-white cursor-pointer">Learn More</button>
        <button className="bg-white-600/90 rounded-full w-28 h-10 text-blue-600/90 border border-blue-600 cursor-pointer">Shop Now</button>
      </div>
      <p className="poppins text-md text-md">Built for <span className="text-blue-700">Excellence</span></p>
      <img src={washer_banner} className='object-contain size-1/3 max-md:size-9/12' alt="" />
    </div>
  )
}

export default Hero