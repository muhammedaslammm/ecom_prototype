import ProductDesc from "./ProductDesc";

const ProductMgt = () => {
  return (
    <section className="space-y-6 mb-8">
      <h2 className="a-text--title">Product Management</h2>
      <div className="flex gap-8">
        <div className="left w-7/12">
          <ProductDesc />
        </div>
        <div className="right w-5/12"></div>
      </div>
    </section>
  );
};

export default ProductMgt;
