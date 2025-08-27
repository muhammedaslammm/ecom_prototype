const ProductsVariants = ({ productVariants }) => {
  return (
    productVariants.length >= 1 && (
      <div className="a-section--box">
        <div className="a-section--title">
          {`Product Variants (${productVariants.length})`}
        </div>
      </div>
    )
  );
};

export default ProductsVariants;
