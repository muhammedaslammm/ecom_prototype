import { useState } from "react";
import useCategories from "../categories/useCategories";
import useProducts from "./useProducts";
import CategoryList from "./CategoryList";
import ProductVariantHandle from "./ProductVariantHandle";
import ProductsVariants from "./ProductVariants";

const ProductManagement = () => {
  const {
    categories,
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
    productVariant,
    handleVariantData,
    productErrors,
    variantActions,
  } = useProducts();
  const levelCategories = categories.filter((category) => category.level === 1);
  const [isOpen, setIsOpen] = useState(false);

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
    productVariant,
    handleVariantData,
    productErrors,
    variantActions,
  };

  const getInputField = (attribute) => {
    switch (attribute.field_type) {
      case "text":
        return (
          <div className="space-y-1">
            <div className="a-text--label">{attribute.label}</div>
            <input
              type="text"
              className="a-input placeholder:capitalize"
              placeholder={`Enter ${attribute.label}...`}
            />
          </div>
        );

      case "select":
        return (
          <div className="space-y-1">
            <div className="a-text--label">{attribute.label}</div>
            <select name="" id="" className="a-input">
              {attribute.options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
        );
      case "multi-select":
        return (
          <div className="space-y-1">
            <div className="a-text--label">{attribute.label}</div>
            <select name="" id="" className="a-input">
              {attribute.options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
        );
    }
  };

  return (
    <section className="flex gap-6 mb-8">
      <div className="w-4/6 flex flex-col gap-6">
        <div className="a-section--box flex flex-col gap-2">
          <div className="space-y-2">
            <label className="a-section--title block">Product Title</label>
            <input
              type="text"
              name="name"
              placeholder="Eg: Samsung Galaxy S21"
              className="a-input"
            />
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <div className="a-section--title ">Brand Name</div>
              <input
                type="text"
                name="brand"
                placeholder="Eg: Samsung"
                className="a-input"
              />
            </div>
            <div className="w-full">
              <div className="a-section--title">Category</div>
              <div className="relative">
                <div className="a-input cursor-pointer" onClick={handleIsOpen}>
                  {selectedCategory ? selectedCategory : "Choose one Categrory"}
                </div>
                {isOpen && <CategoryList utils={utilObject} />}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="a-section--title block">Description</label>
            <textarea
              name="description"
              placeholder="Eg: A premium Android smartphone with AMOLED display..."
              rows={6}
              className="a-input"
            />
          </div>
        </div>
        {/* sections */}
        <div className="a-section--box !space-y-15">
          {categoryDataInputs.sections.length ? (
            <div className="space-y-4">
              <div className="a-section--title">Section Attributes</div>
              {categoryDataInputs.sections.map((section) => (
                <div className="space-y-6 bg-neutral-50 border border-neutral-300 rounded-[1rem] p-8">
                  <div className="a-section--title">
                    {section.section_title}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {section.attributes.map((att) => getInputField(att))}
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
                Adding more information about the product under different
                section is more important for a product inorder to get more
                attention and trust of customers. Visit the selected{" "}
                <span className="font-semibold italic">Category</span> in the{" "}
                <span className="font-semibold italic">
                  Category - Management
                </span>{" "}
                page and add required sections.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right section */}
      <div className="w-2/6 space-y-8">
        <ProductVariantHandle utils={utilObjectVariant} />
      </div>
    </section>
  );
};

export default ProductManagement;
