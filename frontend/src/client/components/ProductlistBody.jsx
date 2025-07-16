import ProductCard from "./ProductCard";
import ProductsGridTool from "./ProductsGridTool";

const ProductlistBody = ({
  slug,
  products,
  image,
  countmsg,
  handleSorting,
  sort,
}) => {
  return (
    <div className="w-[80%]">
      <h1
        className={`text-[3rem] bg-no-repeat bg-cover font-semibold bg-neutral-400 text-white p-10 capitalize rounded-[.4rem]`}
        style={{ backgroundImage: `url(${image})` }}
      >
        {slug}
      </h1>
      <ProductsGridTool
        countmsg={countmsg}
        handleSorting={handleSorting}
        sort={sort}
      />
      {products.length ? (
        <div className="grid grid-cols-4 gap-4 my-8">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : (
        <div className="my-8 capitalize font-medium text-neutral-600 bg-white p-8">
          <h3 className="text-[2rem]">no products found</h3>
          <p className="text-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iure nulla voluptatibus dolore provident, veritatis quasi modi.
            Fugit, accusantium blanditiis eum, aut esse quam aliquam at impedit
            reprehenderit ullam consequatur?
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductlistBody;
