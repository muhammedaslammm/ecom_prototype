import { Prohibit } from "phosphor-react";
const ProductVariantHandle = ({ utils }) => {
  const { categoryDataInputs } = utils;
  return (
    <div className="a-section--box">
      {categoryDataInputs.variants.length ? (
        categoryDataInputs.variants.map((variant) => (
          <div className="border border-neutral-300 p-2 rounded-[.3rem] text-[1.2rem]">
            <div className="flex flex-col gap-4">
              <div className="text-cyan-700">{`SKU: ${variant.sku}`}</div>
              <div>
                {variant.attributes &&
                  variant.attributes.map((attribute) => (
                    <div className="flex items-center gap-2">
                      <span>{`${attribute.label}:`}</span>
                      <span className="font-medium">{attribute.value}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div></div>
          </div>
        ))
      ) : (
        <div className="flex gap-4">
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
