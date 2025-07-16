import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border-1 border-neutral-300 hover:border-neutral-500 transition-all duration-200 p-[1.5rem] bg-white rounded-[.5rem] cursor-pointer hover:shadow-[0_0_.4rem_rgb(210,210,210)]">
        <div className="image h-[11rem] flex justify-center">
          <img
            src={product.image}
            alt="product image"
            className="w-[12rem] h-full object-contain"
          />
        </div>
        <div className="details flex flex-col gap-3 mt-[2rem]">
          <div className="title truncate text-[1.8rem] font-medium text-neutral-700">
            {product.title}
          </div>
          <div className="price flex gap-4 text-[1.3rem] justify-end">
            <div className="offer font-medium text-[1.7rem] ">
              Rs {Number(product.offer_price).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
