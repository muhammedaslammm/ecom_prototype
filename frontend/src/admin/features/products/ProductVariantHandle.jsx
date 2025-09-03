import {
  Prohibit,
  TrashSimple,
  GooglePhotosLogo,
  PencilSimpleLine,
} from "phosphor-react";
const ProductVariantHandle = ({ utils }) => {
  const { categoryDataInputs, variantActions, errors } = utils;
  const { handleVariantData, deleteVariant } = variantActions;

  return (
    categoryDataInputs.variants.length > 0 && (
      <div className="a-section--box">
        <div className="space-y-4">
          <div className="a-section--title">{`Product Variants ( ${categoryDataInputs.variants.length} )`}</div>
          {categoryDataInputs.variants.map((variant) => (
            <div className="border border-neutral-300 p-4 rounded-[.3rem] text-[1.2rem]">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end ">
                  <div className="font-medium">{`SKU: ${variant.sku}`}</div>
                  <div className="flex items-center gap-2">
                    <PencilSimpleLine className="w-[1.4rem] h-[1.4rem]" />
                    <TrashSimple
                      className="w-[1.4rem] h-[1.4rem]"
                      onClick={() => deleteVariant(variant.sku)}
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-1 mb-4">
                  <div className="border w-1/2 border-neutral-200 p-2 rounded-[.3rem]">
                    <div>
                      {variant.attributes &&
                        variant.attributes.map((attribute) => (
                          <div className="flex items-center gap-2">
                            <span>{`${attribute.label}:`}</span>
                            <span className="font-medium">
                              {attribute.value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-1/2 border border-neutral-200 p-2 rounded-[.3rem]">
                    <div>
                      <div>Quantity</div>
                      <input
                        type="number"
                        name="stock"
                        data-id={variant.sku}
                        className={`a-input ${
                          errors[`${variant.sku}_stock`]
                            ? "!border-red-600"
                            : ""
                        }`}
                        value={variant.stock}
                        onChange={handleVariantData}
                      />
                    </div>
                    <div>
                      <div>Price</div>
                      <input
                        type="number"
                        name="price"
                        data-id={variant.sku}
                        className={`a-input ${
                          errors[`${variant.sku}_price`]
                            ? "!border-red-600"
                            : ""
                        }`}
                        value={variant.price}
                        onChange={handleVariantData}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-300 py-4 bg-neutral-100 px-2">
                  {![].length > 0 ? (
                    <div>
                      No images added for this variant.{" "}
                      <span className="capitalize font-medium underline hover:text-violet-600 transition-colors cursor-pointer">
                        add images
                      </span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ProductVariantHandle;
