import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import store1 from '../assets/about.jpg'


const AboutUs = () => {
  return (
    <div>
    <Navbar/>
      <div
        className="max-md:px-4 py-10 bg-gray-50 rounded-xl shadow-md"
      >
        <h1 className="poppins text-3xl font-extrabold text-center text-blue-800">
          About Us
        </h1>
        <div className="flex justify-center items-center gap-10 max-md:flex-col-reverse">
          {/* Text Content */}
          <div className="w-1/2 max-md:w-full flex flex-col gap-6 max-md:items-center max-md:text-center">
            <p className="text-gray-700 text-[15px] leading-relaxed max-md:text-justify">
              <span className="font-semibold">Welcome to JPW</span>, your go-to
              destination for high-performance pressure washers and advanced
              cleaning equipment. With years of industry expertise, we’re
              committed to making powerful cleaning accessible—whether it’s
              washing driveways at home or handling tough industrial grime.
              <br />
              <br />
              From portable electric units to heavy-duty gas-powered machines,
              every product in our lineup is carefully selected for quality,
              reliability, and performance. At JPW, we believe cleaning should
              be fast, efficient, and satisfying.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-full px-6 py-2 text-white font-medium shadow-md">
              Visit Us
            </button>
          </div>

          {/* Image */}
          <div className="w-1/3 max-md:w-full">
            <img
              src={store1}
              alt="Our Store"
              className="w-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
