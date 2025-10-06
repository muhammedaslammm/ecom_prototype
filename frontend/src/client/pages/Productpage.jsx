import { ImageGrid } from "../components/productPage/ImageGrid";
import { useProduct } from "../components/productPage/useProduct";

const Productpage = () => {
  const { product } = useProduct();

  return product ? (
    <div className="w-[95%] mx-auto py-12 space-y-16">
      {/* top */}
      <div className="flex flex-col md:flex-row gap-5">
        <ImageGrid images={product?.images} />
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
