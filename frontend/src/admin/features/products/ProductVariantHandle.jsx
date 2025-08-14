import { Prohibit } from "phosphor-react";
const ProductVariantHandle = ({ utils }) => {
  const {
    categoryDataInputs,
    productVariant,
    handleVariantData,
    submitProductVariant,
    productErrors,
  } = utils;
  return (
    <div className="a-section--box">
      {categoryDataInputs.variants.length ? (
        <div className="space-y-4">
          <div className="a-section--title">Product Variants</div>
          <div className="flex flex-col gap-4">
            {categoryDataInputs.variants.map((variant) => (
              <div className="flex items-end justify-between">
                <div className="a-text--label leading-[1.8rem]">
                  {variant.label}
                </div>
                <select
                  name={variant.label}
                  id=""
                  value={productVariant.variant?.[variant.label]}
                  className="a-input !w-[30rem]"
                  onChange={handleVariantData}
                >
                  {variant.values.map((v) => (
                    <option value={v}>{v}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex justify-between items-end">
              <div className="a-text--label">Stock</div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Eg: 40"
                  name="stock"
                  className="a-input !w-[30rem] "
                  value={productVariant?.stock}
                  onChange={handleVariantData}
                />
                {productErrors.stock && (
                  <div className="absolute text-[1.2rem] font-medium text-red-800 top-[50%] -translate-y-[50%] right-2 z-10 flex gap-1 items-center">
                    <Prohibit />
                    {productErrors.stock}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="a-text--label">Price</div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Eg: 299"
                  name="price"
                  className="a-input !w-[30rem]"
                  value={productVariant?.price}
                  onChange={handleVariantData}
                />
                {productErrors.price && (
                  <div className="absolute text-[1.2rem] font-medium text-red-800 top-[50%] -translate-y-[50%] right-2 z-10 flex gap-1 items-center">
                    <Prohibit />
                    {productErrors.price}
                  </div>
                )}
              </div>
            </div>
            <button
              className="a-text--button self-end mt-4 bg-neutral-100 hover:bg-neutral-200 transition"
              onClick={submitProductVariant}
            >
              Add Product Variant
            </button>
          </div>
        </div>
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
