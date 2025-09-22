import { useState } from "react";
import useCategories from "../categories/useCategories";
import useProducts from "./useProducts";
import CategoryList from "./CategoryList";
import ProductVariantHandle from "./ProductVariantHandle";
import getInputField from "./utils/getInputField.jsx";
import { InputLabel } from "../../components/InputLabel.jsx";

const ProductManagement = () => {
  const {
    categories,
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
    handleVariantData,
    productErrors,
    variantActions,
    data,
    handleImages,
    submitProduct,
    errors,
  } = useProducts();
  const levelCategories = categories.filter((category) => category.level === 1);
  const [isOpen, setIsOpen] = useState(false);

  const { generalData, sectionData, handleGeneralData, handleSectionData } =
    data;

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const utilObject = {
    categories: levelCategories,
    handleCategory,
    handleIsOpen,
    setCategoryDataInputs,
  };

  const utilObjectVariant = {
    categoryDataInputs,
    handleVariantData,
    productErrors,
    variantActions,
    handleImages,
    errors,
  };

  return (
    <section className="flex gap-6 mb-8">
      <div className="fixed left-[25rem] bottom-0 bg-white right-0 flex items-center justify-end px-[2.5rem] py-[1rem] shadow-[0px_-5px_20px_#c7c7c7]">
        <button
          className="a-text--button text-white bg-black/95"
          onClick={submitProduct}
        >
          Create Product
        </button>
      </div>
      <div className="w-4/6 flex flex-col gap-6">
        <div className="a-section--box flex flex-col gap-2">
          <div className="space-y-2">
            <InputLabel label="Title" error={errors.product_title} />

            <input
              type="text"
              name="product_title"
              placeholder="Eg: Samsung Galaxy S21"
              className="a-input"
              value={generalData.product_title}
              onChange={handleGeneralData}
            />
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <InputLabel label="Brand" error={errors.brand} />

              <input
                type="text"
                name="brand"
                placeholder="Eg: Samsung"
                className="a-input"
                value={generalData.brand}
                onChange={handleGeneralData}
              />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="a-section--title">Category</div>
                {errors.category && (
                  <div className="a-text--error">{errors.category}</div>
                )}
              </div>

              <div className="relative">
                <div className="a-input cursor-pointer" onClick={handleIsOpen}>
                  {selectedCategory
                    ? selectedCategory.title
                    : "Choose one Categrory"}
                </div>
                {isOpen && <CategoryList utils={utilObject} />}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <InputLabel label="Description" error={errors.description} />
            <textarea
              name="description"
              placeholder="Eg: A premium Android smartphone with AMOLED display..."
              rows={6}
              className="a-input"
              value={generalData.description}
              onChange={handleGeneralData}
            />
          </div>
        </div>
        <div className="space-y-8">
          <ProductVariantHandle utils={utilObjectVariant} />
        </div>
      </div>
      {/* sections */}
      <div className="a-section--box w-2/6 !space-y-15">
        {categoryDataInputs.sections.length ? (
          <div className="space-y-4">
            <div className="a-section--title">Section Related Data</div>
            {categoryDataInputs.sections.map((section) => (
              <div className="space-y-6 bg-neutral-50 border border-neutral-300 rounded-[1rem] p-8">
                <div className="a-section--title">{section.section_title}</div>
                <div className="grid grid-cols-2 gap-4">
                  {section.attributes.map((att) =>
                    getInputField(att, sectionData, handleSectionData, errors)
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="a-section--title">
              Section attributes for adding product details isn't provided for
              the selected category.
            </div>
            <p className="a-text--body">
              Adding more information about the product under different section
              is more important for a product inorder to get more attention and
              trust of customers. Visit the selected{" "}
              <span className="font-semibold italic">Category</span> in the{" "}
              <span className="font-semibold italic">
                Category - Management
              </span>{" "}
              page and add required sections.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductManagement;
