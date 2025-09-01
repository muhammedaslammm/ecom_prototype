import {
  Prohibit,
  TrashSimple,
  GooglePhotosLogo,
  PencilSimpleLine,
} from "phosphor-react";
const ProductVariantHandle = ({ utils }) => {
  const { categoryDataInputs, variantActions } = utils;

  return (
    categoryDataInputs.variants.length > 0 && (
      <div className="a-section--box">
        <div className="space-y-4">
          <div className="a-section--title">{`Product Variants ( ${categoryDataInputs.variants.length} )`}</div>
          {categoryDataInputs.variants.map((variant) => (
            <div className="border border-neutral-300 p-4 rounded-[.3rem] text-[1.2rem]">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end ">
                  <div className="text-cyan-700">{`SKU: ${variant.sku}`}</div>
                  <button className="flex items-center gap-1 font-medium !text-[1rem] py-1 px-1 bg-neutral-100">
                    <GooglePhotosLogo /> Add Photos
                  </button>
                </div>

                <div>
                  {variant.attributes &&
                    variant.attributes.map((attribute) => (
                      <div className="flex items-center gap-2">
                        <span>{`${attribute.label}:`}</span>
                        <span className="font-medium">{attribute.value}</span>
                      </div>
                    ))}
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-4 w-1/2">
                    <div>
                      <div>Quantity</div>
                      <input type="number" className="a-input" />
                    </div>
                    <div>
                      <div>Price</div>
                      <input type="number" className="a-input" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PencilSimpleLine className="w-[1.4rem] h-[1.4rem]" />
                    <TrashSimple
                      className="w-[1.4rem] h-[1.4rem]"
                      onClick={() => variantActions.deleteVariant(variant.sku)}
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ProductVariantHandle;
