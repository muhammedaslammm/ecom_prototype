import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext, WishlistContext } from "../../contexts";

const Productpage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  let BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;

  const { addToWishList } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

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
    const getProductData = async () => {
      try {
        let response = await fetch(`${BACKEND_URL}/api/products/${id}`, {
          method: "GET",
        });
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log("product:", data.product);
          setProduct(data.product);
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    getProductData();
  }, []);

  return product ? (
    <div className="w-[90%] mx-auto py-12 space-y-16">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-2/4 sticky top-[17rem] h-[40rem] bg-white p-12">
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] h-full object-contain rounded-lg mx-auto"
          />
        </div>

        <div className="md:w-4/6 space-y-6">
          <div className="bg-white p-6 flex flex-col gap-4">
            <div className="space-y-2">
              <h1 className="text-[2rem] font-medium leading-[3rem]">
                {product?.parent?.product_title}
              </h1>
              <h2 className="text-[1.6rem]">{product?.parent?.brand}</h2>
            </div>

            <div className="flex gap-6">
              <p className="text-[3rem] font-medium">₹{product.price}</p>
            </div>

            <div className="space-y-[.5rem] mt-8">
              <div className="font-medium">Product Description</div>
              <p className="line-clamp-4">{product?.parent?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Productpage;
