import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import UserInfo from "../components/UserInfo";
import { useParams } from "react-router-dom";

const Product = () => {
  const [openForm, setOpenForm] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0)
  const params = useParams();

  const handleClick = () => {
    setOpenForm(true);
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://jpw-flax.vercel.app/api/product/single-product/${params.id}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-20 mt-10 max-md:px-4 max-md:mt-5">
        {openForm ? (
          <UserInfo
            product = {product}
            productQuantity={productQuantity}
          />
        ) : (
          <>
            {loading ?
            <div>
              {/* for loader, spinner */}
              <h1 className="text-2xl">Loading</h1>
            </div>
            :
             (
              <>
                <div className="product-upper flex z-10 max-md:flex-col max-md:w-full">
                  <div className="product-image w-1/2 max-md:w-full">
                    {/* image of product */}
                    <img src={`https://jpw-flax.vercel.app/${product?.productImage}`} className="w-96 max-md:w-full" alt="" />
                  </div>
                  <div className="product-overview bg-slate-100 p-4 w-1/2 max-md:w-full">
                    {/* overview of product */}
                    <h1 className="text-xl font-bold">
                      {product?.productName}
                    </h1>
                    <p className="font-semibold mt-4">Key Features</p>
                    <ul className="list-disc marker:text-blue-600 list-inside">
                      <li>
                        Durable, high-performance aluminum pump offering long
                        service life and excellent corrosion resistance.
                      </li>
                      <li>
                        Automatic start/stop system activates the motor only
                        when the trigger is engaged, saving energy and extending
                        lifespan.
                      </li>
                      <li>
                        Compact and lightweight design for easy portability.
                      </li>
                      <li>
                        Quick and easy nozzle changes with a simple click
                        system.
                      </li>
                    </ul>
                 
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="text-sm font-bold" htmlFor="productQuantity">Quantity*</label>
                      <input
                        onChange={(e) => setProductQuantity(e.target.value)}
                        className="border border-slate-500 w-32 h-8 outline-none px-2 text-sm"
                        type="number"
                        name="productQuantity"
                        min={1}
                        max={2499}
                        placeholder={`Max ${product?.productAvailableQuantity}`}
                      />
                    </div>
                    <button
                      onClick={handleClick}
                      className="bg-blue-600 text-lg w-40 h-8 rounded-sm text-white mt-6 cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="product-description flex flex-col gap-2 my-10 max-md:w-screen">
                  <h1 className="text-xl font-bold">Description</h1>
                  <hr className="border border-gray-300 my-2" />
                  <p className="text-sm max-md:opacity-60">
                    {product?.productDescription}
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
