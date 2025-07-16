import { useContext } from "react";
import EmptyPage from "../components/EmptyPage";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../contexts";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto my-8">
      {wishlist.length === 0 ? (
        <EmptyPage title="wishlist" />
      ) : (
        <div className="w-full bg-[#f9f9ff] rounded-lg shadow-md p-4 md:p-8 space-y-8">
          <h2 className="text-[2.2rem] font-bold text-[#bc46c2] capitalize pb-4 border-b border-[#bc46c2]/20">
            your wishlist <span>({wishlist.length})</span>
          </h2>

          <div className="space-y-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between gap-6 sm:items-center border border-[#bc46c2]/30 bg-white rounded-lg p-6 shadow"
              >
                <div className="flex-1">
                  <h2 className="text-[1.8rem] font-semibold text-[#bc46c2] mb-2">
                    {item.title}
                  </h2>
                  <p className="text-neutral-700 font-medium text-[1.6rem] mb-4">
                    Rs {item.offer_price}
                  </p>
                  <div className="flex gap-6 flex-wrap text-[1.5rem]">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-[#bc46c2] font-medium hover:underline"
                    >
                      View Product
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:underline font-medium"
                    >
                      Remove Product
                    </button>
                  </div>
                </div>

                <div className="image w-[10rem] h-[10rem] bg-[#f3e5f5] rounded-md p-2 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
