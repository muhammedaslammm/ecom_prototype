import { Details } from "../components/productPage/Details";
import { ImageGrid } from "../components/productPage/ImageGrid";
import { useProduct } from "../components/productPage/useProduct";

const Productpage = () => {
  const { product } = useProduct();

  return product ? (
    <div className="w-[95%] mx-auto py-12 space-y-16">
      {/* top */}
      <div className="flex flex-col md:flex-row gap-5">
        <ImageGrid images={product?.images} />
        <Details product={product} />
      </div>
    </div>
  ) : (
    <div className="w-[95%] mx-auto flex gap-6 py-12">
      <div className="shimmer w-3/6 h-[50rem]"></div>
      <div className="w-3/6 space-y-3">
        <div className="shimmer w-full h-[5rem]"></div>
        <div className="shimmer w-[30%]"></div>
        <div className="shimmer w-[40%] my-[5rem] h-[3rem]"></div>
        <div className="shimmer h-[20rem]"></div>
      </div>
    </div>
  );
};

export default Productpage;
