import useCategories from "./useCategories.js";
import CategorySectionCreation from "./CategorySectionCreation.jsx";
import { Warning, BugBeetle } from "phosphor-react";

const CategoryManagement = () => {
  const {
    categoryTitle,
    handleCategoryTitle,
    levels,
    selectedLevel,
    handleSelectedLevel,
    parents,
    handleParent,
    categorySections,
    sectionTitle,
    handleSectionTitle,
    attribute,
    handleAttribute,
    submitAttribute,
    sectionAttributes,
    createCategorySection,
    errors,
    submitCategory,
  } = useCategories();

  const utilityObject = {
    errors,
    sectionTitle,
    handleSectionTitle,
    attribute,
    handleAttribute,
    submitAttribute,
    sectionAttributes,
    createCategorySection,
  };

  const errorCount = Object.keys(errors).length;

  return (
    <section className="flex gap-6 pb-4">
      <div className="left w-7/12 flex flex-col gap-6">
        {/* title section */}
        <div className="section--category__name a-section--box">
          <div className="flex justify-between items-center">
            <div className="category-name__label a-section--title">
              Category Name
            </div>
            {errors.categoryTitle && (
              <div className="a-text--error">{errors.categoryTitle}</div>
            )}
          </div>

          <input
            type="text"
            className="a-input"
            placeholder="Eg: Electronics"
            value={categoryTitle}
            onChange={(e) => handleCategoryTitle(e.target.value)}
          />
        </div>
        {/* category level selections */}
        <div className="a-section--box">
          <div className="flex items-center justify-between">
            <div className="a-section--title">Select the Category Level</div>
            {errors.parent && (
              <div className="a-text--error">{errors.parent}</div>
            )}
          </div>

          <div className="flex gap-12">
            {levels.map((level) => (
              <div className="flex items-center gap-2">
                <input
                  checked={selectedLevel === level}
                  type="radio"
                  name="level"
                  id={`level ${level}`}
                  onChange={() => handleSelectedLevel(level)}
                />
                <label htmlFor={`level ${level}`} className="a-text--label">
                  Level {level}
                </label>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-1">
            <li className="a-text--sub">
              - Note that, <span className="font-semibold">Level 1</span> is the{" "}
              <span className="font-semibold">highest category level</span>.
            </li>
            <li className="a-text--sub">
              - By default, all{" "}
              <span className="font-semibold">new categories</span> are
              automatically{" "}
              <span className="font-semibold">added under level 1.</span> You
              can choose a different level.{" "}
            </li>
          </ul>
        </div>
        {/* parents */}
        {selectedLevel !== 1 && (
          <div className="a-section--box">
            <div className="a-section--title">
              Select the parent for your currenct category
            </div>
            <div className="flex gap-4 flex-wrap">
              {parents.length > 0 &&
                parents.map((parent) => (
                  <div
                    className="flex items-center gap-2 p-2 bg-neutral-100 rounded-[.3rem]"
                    key={parent._id}
                  >
                    <input
                      type="radio"
                      name="parent"
                      id={parent._id}
                      onChange={() => handleParent(parent._id)}
                    />
                    <label
                      className="a-text--label font-medium"
                      htmlFor={parent._id}
                    >
                      {parent.title}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* category sections section */}

        <div className="a-section--box">
          <div className="a-section--title">Category Sections</div>
          {categorySections.length > 0 ? (
            <div className="space-y-6">
              {categorySections.map((section) => (
                <div className="p-6 space-y-2 bg-neutral-100 border border-neutral-200 rounded-[1rem]">
                  <div className="a-text--table-data">
                    {section.section_title}
                  </div>
                  <div>
                    <ol className="grid grid-cols-4 pb-2 border-b border-neutral-200">
                      {["Count", "Label", "Field Type", "Options"].map(
                        (section_head) => (
                          <li className="a-text--table-head">{section_head}</li>
                        )
                      )}
                    </ol>
                    {section.attributes.map((att, i) => (
                      <ol className="grid grid-cols-4 py-2 border-b border-neutral-200 last:border-0">
                        <li className="a-text--table-data">{i + 1}</li>
                        {Object.entries(att).map(([key, value]) => (
                          <li className="a-text--table-data">
                            {key === "options" ? value.join(", ") : value}
                          </li>
                        ))}
                      </ol>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="a-text--body">
              No category sections added so far for this category. Add more
              category specific sections for product details.
            </div>
          )}
        </div>
        <button
          className="submit_button self-end a-text--button text-white bg-neutral-800 hover:bg-black !py-3 transition"
          onClick={submitCategory}
        >
          Create Category
        </button>
      </div>
      <div className="right relative w-5/12 flex flex-col gap-6 min-h-[100svh]">
        {/* product specification sections */}
        <div className="a-section--box flex flex-col">
          <div className="a-section--title">Product Specifications</div>
          <p className="a-text--body">
            Adding product specific detialed sections is crucial to deliver more{" "}
            <span className="font-semibold">
              clarity, idea & detailed information
            </span>{" "}
            about your products to your customers.
          </p>
          <div className="mt-2 p-4 text-[1.3rem] text-yellow-800 bg-yellow-50 rounded-[.5rem]">
            <div className="flex gap-1 items-center font-semibold">
              <Warning weight="bold" /> <span>Warning</span>
            </div>
            <p>
              Save each section before creating the category. Failed to do so
              will not save the section automatically.
            </p>
          </div>
        </div>
        {/* category section creation */}
        <CategorySectionCreation data={utilityObject} />

        {/* category create button */}
      </div>
    </section>
  );
};

export default CategoryManagement;
