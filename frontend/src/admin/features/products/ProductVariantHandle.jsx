import { Prohibit } from "phosphor-react";
const ProductVariantHandle = ({ utils }) => {
  const { categoryDataInputs } = utils;
  return (
    <div className="a-section--box">
      {categoryDataInputs.variants.length ? (
        <div></div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <div className="space-y-2">
            <div className="a-section--title">Number of stock</div>
            <input
              type="number"
              name="stock"
              id=""
              className="a-input"
              placeholder="Eg: 12"
            />
          </div>
          <div className="space-y-2">
            <div className="a-section--title">Price</div>
            <input
              type="number"
              placeholder=""
              className="a-input"
              step={0.01}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductVariantHandle;
