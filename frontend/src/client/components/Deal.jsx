import ProductCard from "./ProductCard";

const Deal = ({ products, title }) => {
  return products.length ? (
    <div className="w-[90%] mx-auto my-12 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.map((deal, index) => (
          <ProductCard key={index} product={deal} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Deal;
