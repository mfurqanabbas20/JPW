import { useEffect, useState } from "react";
import washer from "../assets/washer.png";
import { Link } from "react-router-dom";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://jpw-flax.vercel.app/api/product/all-products"
    );
    setProducts(response.data.products.reverse());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-28 pt-6 pb-10 bg-slate-50 w-full max-md:px-10 poppins">
      <h1 className="text-3xl font-bold text-blue-600 my-2 poppins">
        Top Products
      </h1>
      <h1 className="text-xl poppins">VBR</h1>
      <hr className="my-4 border-gray-300" />
      <div className="flex flex-wrap w-full gap-4">
         {products.map((item) => {
          return (
            <div
              key={item._id}
              className="product-card w-[30%] max-sm:w-full max-lg:w-1/2 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between h-full overflow-hidden">
                <div>
                  <img
                    className="w-full h-56 object-contain mb-4 rounded-t-xl"
                    src={`https://jpw-flax.vercel.app/${item?.productImage}`}
                    alt={item.productName}
                  />
                  <h1 className="text-base font-semibold text-gray-800 text-center px-2 poppins">£{item.productPrice}</h1>
                  <h1 className="text-sm text-gray-800 text-center px-2 poppins">
                    {item.productName}
                  </h1>
      
                </div>

                <div className="mt-4 px-4 pb-4">
                  <hr className="my-3 border-gray-200" />
                  <div className="flex justify-center">
                    <Link
                      to={`/product/${item._id}`}
                      className="uppercase text-sm px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full poppins shadow-sm"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
