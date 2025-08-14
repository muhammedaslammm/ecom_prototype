const ProductsVariants = ({ productVariants }) => {
  return (
    productVariants.length >= 1 && (
      <div className="a-section--box">
        <div className="a-section--title">
          {`Product Variants (${productVariants.length})`}
        </div>
        <div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] border-b border-neutral-300 pb-4">
            {Object.keys(productVariants[0]).map((key) => {
              if (key === "variant") {
                return Object.keys(productVariants[0][key]).map(
                  (variant_key) => {
                    return <div className="a-text--label">{variant_key}</div>;
                  }
                );
              }
              return <div className="a-text--label">{key}</div>;
            })}
          </div>
          <div>
            {productVariants.map((variant) => (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] py-4 border-b border-neutral-300 last:border-b-0">
                {Object.entries(variant).map(([key, value]) => {
                  if (key === "variant") {
                    return Object.values(variant[key]).map((value) => (
                      <div className="text-[1.2rem]">{value}</div>
                    ));
                  }
                  return (
                    <div className="text-[1.2rem] font-medium">{value}</div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductsVariants;
