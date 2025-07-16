import projectors from "../../data/projectors";
import laptops from "../../data/laptops";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext, WishlistContext } from "../../contexts";

const Productpage = () => {
  const [product, setProduct] = useState(null);
  const products = [...projectors, ...laptops];
  const urlpath = useParams();
  const navigate = useNavigate();

  const { addToWishList } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); // ✅ Call useCart inside the component

  const addProductToWishlist = (product) => {
    const response = addToWishList(product);
    if (response.success) navigate("/wishlist");
    else window.alert(response.message);
  };

  const handleAddToCart = (product) => {
    const response = addToCart(product);
    if (response.success) {
      navigate("/cart");
    } else {
      if (window.confirm(response.message + ". Go to cart?")) {
        navigate("/cart");
      }
    }
  };

  useEffect(() => {
    const matchingProduct = products.find((product) => {
      return product.id === Number(urlpath.productid);
    });

    setProduct(matchingProduct);
  }, [urlpath.productid]); // ✅ Better dependency

  return product ? (
    <div className="w-[90%] mx-auto py-12 text-slate-800 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section - Sticky */}
        <div className="sticky top-24 h-[40rem] bg-white p-12 rounded-[.5rem]">
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] h-full object-contain rounded-lg mx-auto"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[.5rem]">
            <h1 className="text-[2.3rem] font-semibold leading-[3rem]">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="text-neutral-500 font-semibold text-[1.4rem] my-4">
              4.6 ⭐ (2,300 reviews)
            </div>

            {/* Price */}
            <div className="flex gap-6 items-baseline my-8">
              <p className="text-[3rem] text-neutral-700 font-semibold ">
                ₹{product.offer_price}
              </p>
              <p className="text-[1.9rem] line-through text-gray-400">
                ₹{product.price}
              </p>
            </div>

            {/* Description Section */}
            <div className="space-y-[.5rem]">
              <h2 className="text-[1.7rem] font-semibold text-neutral-700">
                Description
              </h2>
              <p className="text-[1.5rem] leading-[2.3rem] text-justify text-neutral-700">
                {product.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">
              <button
                className="button bg-neutral-900 text-white cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="button bg-blue-800 text-white cursor-pointer"
                onClick={() => addProductToWishlist(product)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-10 ">
            {Object.values(product.specifications).map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[.5rem]">
                <h2 className="text-[1.7rem] font-semibold border-b border-slate-300 pb-2 mb-4 capitalize">
                  {section.head}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.details.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-neutral-800 font-medium capitalize text-[1.5rem]">
                        {item.label}
                      </span>
                      <span className="text-neutral-600 text-[1.5rem]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Productpage;
