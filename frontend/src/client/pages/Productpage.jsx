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
  ) : null;
};

export default Productpage;
