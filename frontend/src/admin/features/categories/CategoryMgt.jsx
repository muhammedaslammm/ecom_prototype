import { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CategoryContext } from "../../../contexts";

const CategoryMgt = () => {
  const [dropdown, setDropdown] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [attribute, setAttribute] = useState({
    label: "",
    field_type: "text",
    options: "",
  });
  const [optionsBox, setOptionsBox] = useState(false);
  const [errors, setErrors] = useState({});
  const { getCategories, createCategory } = useContext(CategoryContext);
  const fileinputRef = useRef();
  const [levels, setLevels] = useState({ level1: [], level2: [] });
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [parents, setParents] = useState([]);
  const [parent, setParent] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);
  const [suggessionBox, setSuggessionBox] = useState(false);
  const [sectionStat, setSectionStat] = useState(false);
  const [disableContent, setDisableContent] = useState(false);
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState({
    title: "General",
    attributes: [],
    price_and_quantity: false,
  });
  const [secureInput, setSecureInput] = useState(true);
  const [buttonStat, setButtonStat] = useState(true);

  let buttonStatStyle = `${
    buttonStat && section.title !== "General"
      ? "cursor-pointer"
      : "text-neutral-400 cursor-not-allowed"
  }`;

  let navigate = useNavigate();

  // setting button style
  useEffect(() => {
    let value = sections.every((s) => s.price_and_quantity === false);
    setButtonStat(value);
  }, [sections]);

  // get categories
  useEffect(() => {
    const fetchcategories = async () => {
      const queryObject = { filter: "level" };
      const response = await getCategories(queryObject);
      if (response.success) {
        setLevels((prev) => {
          const obj = { ...prev };
          console.log("level 1:", response.data.level1);
          console.log("level 2:", response.data.level2);
          obj.level1 = response.data.level1;
          obj.level2 = response.data.level2;
          return obj;
        });
      } else console.log(response.message);
    };
    fetchcategories();
  }, [parents]);

  useEffect(() => {
    if (selectedLevel === 1) setParents([]);
    else if (selectedLevel === 2) setParents(levels.level1);
    else if (selectedLevel === 3) setParents(levels.level2);
  }, [selectedLevel, parent]);

  // handle secure input
  useEffect(() => {
    const generalSection = sections.some((s) => s.title === "General");
    if (sections.length && generalSection) setSecureInput(false);
    else setSecureInput(true);
  }, []);

  // category title
  const handleCategoryTitle = (e) => {
    const value = e.target.value;
    setCategoryTitle(value);
    if (value.trim().length < 3) {
      setErrors((prevErr) => {
        let err = { ...prevErr };
        err.categoryTitle = "Required atleast of 3 characters";
        return err;
      });
    } else
      setErrors((prevErr) => {
        const { categoryTitle, ...rest } = prevErr;
        return rest;
      });
  };

  // handle attribute
  const handleAttribute = (e, key) => {
    let new_attribute = { ...attribute };
    let value = e.target ? e.target.value : e;
    new_attribute[key] = value;

    if (key === "label") {
      if (value.trim().length < 2) {
        setErrors((prevError) => ({
          ...prevError,
          label: "Label required minimum or 2 characters",
        }));
      } else {
        setErrors((prevError) => {
          const { label, ...rest } = prevError;
          return rest;
        });
      }
    }
    if (key === "field_type") {
      if (value === "text") {
        setOptionsBox(false);
        setErrors((prevErr) => {
          const { options, ...rest } = prevErr;
          return rest;
        });
      } else setOptionsBox(true); // field type handling
      setDropdown(false);
    }
    if (key === "options") {
      if (value.trim().length === 0) {
        setErrors((prevErr) => ({
          ...prevErr,
          options: "Options cannot be empty",
        }));
      } else {
        setErrors((prevErr) => {
          const { options, ...rest } = prevErr;
          return rest;
        });
      }
    }
    setAttribute(new_attribute);
  };

  // adding attribute
  const addAttribute = () => {
    const errors = {};
    const options = attribute.options
      .split(",")
      .filter(Boolean)
      .map((o) => o.trim());

    if (!attribute.label.length)
      errors.label = "Label require minimum of 2 characters";
    if (attribute.field_type !== "text" && !options.length)
      errors.options = "Require minimun of 1 option";

    //checking any error is there
    if (Object.values(errors).length) {
      return setErrors((prevError) => {
        const e = { ...prevError };
        Object.entries(errors).forEach(([key, value]) => {
          e[key] = value;
        });
        return e;
      });
    }
    attribute.options = options;
    setAttributes((prevAttributes) => [...prevAttributes, attribute]);
    setSection((prevSection) => ({
      ...prevSection,
      attributes: [...prevSection.attributes, attribute],
    }));
    setErrors((prevError) => {
      const { sectionSubmitError, ...rest } = prevError;
      return rest;
    });

    toast.success("Attribute Added");

    setAttribute({
      label: "",
      field_type: "text",
      options: "",
    });

    setErrors((prevErr) => {
      let { attributes, ...rest } = { ...prevErr };
      return rest;
    });
    setOptionsBox(false);
  };

  const promptWarning = () => {
    let { label, field_type, options } = attribute;
    if (label.length || (field_type !== "text" && options.length))
      toast.warning(
        "Attribute entered will be lost if section created without saving them"
      );
  };

  // select parent
  const selectParent = (id, level) => {
    console.log("parent id:", id, "| level:", level);
    setParent(id);
    setErrors((prevErr) => {
      const { missingParent, ...rest } = prevErr;
      return rest;
    });
  };

  // change level
  const changeLevel = (levelnum) => {
    if (levelnum === 1) {
      setDisableContent(false);
      setErrors((prevErr) => {
        const { missingParent, ...rest } = prevErr;
        return rest;
      });
    }
    setParent(null);
    setParentCategory(null);
    setSectionStat(false);
    setSections([]);
    setSelectedLevel(levelnum);
  };

  const handleCategorySection = async () => {
    if (selectedLevel === 1) return setSectionStat(true);
    if (selectedLevel !== 1 && parent) {
      let response = await fetch(
        `http://localhost:4000/api/categories/${parent}`,
        {
          method: "GET",
        }
      );
      let data = await response.json();
      if (data.success) {
        let parent_category = data.category;
        if (parent_category.sections.length) {
          setParentCategory(parent_category);
          setSuggessionBox(true);
        } else setSectionStat(true);
      }
    } else toast.error("Select a parent for the selected level");
  };

  // fill the sections;
  const boxInteraction = (action) => {
    setSuggessionBox(false);
    if (!action) return setSectionStat(true);

    setSections(parentCategory.sections);
    setSectionStat(true);
  };

  // handle section title name
  const handleSectionTitle = (e) => {
    let value = e.target.value;
    setSection((prevSection) => ({
      ...prevSection,
      title: value,
    }));
    if (value.trim().length < 2) {
      setErrors((prevError) => ({
        ...prevError,
        sectionTitleError: "Title cannot be less than 2 characters",
      }));
    } else {
      setErrors((prevErrors) => {
        let { sectionTitleError, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  // handling checkbox
  const handleCheckbox = () => {
    setSection((prevSection) => ({
      ...prevSection,
      price_and_quantity: !section.price_and_quantity,
    }));
  };

  const createSection = () => {
    let errors = {};
    if (section.title.trim().length < 2)
      errors.sectionTitleError = "Title cannot be less than 2 characters";
    if (!attributes.length) {
      errors.sectionSubmitError =
        "Section cannot be created with zero attribute";
      // toast.error("Section cannot be created with zero attribute");
    }
    if (Object.values(errors).length) {
      return setErrors((prevErrors) => {
        let errObj = { ...prevErrors };
        Object.entries(errors).forEach(([key, value]) => {
          errObj[key] = value;
        });
        return errObj;
      });
    }

    setSections((prevSections) => [...prevSections, section]);
    setAttributes([]);
    setSecureInput(false);
    toast.success(`${section.title} section created`);
    setSection({ title: "", attributes: [], price_and_quantity: false });
    setErrors((prevErrors) => {
      console.log("errors:", prevErrors);
      return prevErrors;
    });
  };

  const submitCategory = async () => {
    let errors = {};
    if (categoryTitle.trim().length === 0)
      errors.categoryTitle = "Category title required";
    if (selectedLevel !== 1 && parent === null)
      errors.missingParent = "Parent not selected";

    if (Object.values(errors).length) {
      return setErrors((prevErr) => {
        const newError = { ...prevErr };
        Object.entries(errors).map(([key, value]) => {
          newError[key] = value;
        });
        return newError;
      });
    }

    const category = {
      title: categoryTitle,
      level: selectedLevel,
      parent,
      sections,
    };
    const response = await createCategory(category);
    if (response.success) {
      toast.success(response.message);
      setCategoryTitle("");
      setAttribute({ label: "", field_type: "text", options: "" });
      setAttributes([]);
      setSection({ title: "General", attributes: [] });
      setSections([]);
      setParents([]);
      setSelectedLevel(1);
      navigate("/admin/category-management");
    } else {
      toast.error(response.message);
    }
  };

  const inputfield_style = `a-input ${
    disableContent ? "cursor-not-allowed" : ""
  }`;

  return (
    <section className="space-y-6 mb-8">
      <div className="flex gap-8">
        <div className="left w-7/12 space-y-8">
          <div id="box1" className="a-section--box">
            <div className="title-box space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="" className="a-text--label block">
                  Title
                </label>
                {errors?.categoryTitle && (
                  <p className="a-text--error text-red-700 bg-red-50 leading-[1.8rem]">
                    {errors.categoryTitle}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  autoCapitalize="on"
                  type="text"
                  placeholder="Eg: Electronics"
                  className="a-input"
                  value={categoryTitle}
                  onChange={(e) => handleCategoryTitle(e)}
                />
              </div>
            </div>
          </div>

          {/* category levels */}
          <div
            id="box5"
            className="a-section--box flex flex-col justify-between gap-8 w-full"
          >
            <div className="space-y-4">
              <p className="a-text--section">select the category level</p>

              <div className="flex gap-15">
                {Object.entries({
                  1: "Level 1",
                  2: "Level 2",
                  3: "Level 3",
                }).map(([key, value]) => {
                  const keyNum = Number(key);
                  const condition =
                    keyNum === 1 ||
                    (keyNum === 2 && levels.level1.length) ||
                    (keyNum === 3 &&
                      levels.level2.length &&
                      levels.level1.length);
                  if (!condition) return null;
                  return (
                    <div className="flex items-center gap-2 text-[1.4rem]">
                      <input
                        type="radio"
                        name="level"
                        id={value}
                        checked={keyNum === selectedLevel}
                        onChange={() => changeLevel(keyNum)}
                      />
                      <label htmlFor={value}>{value}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <ul className="text-[1.3rem] italic text-neutral-500 mt-auto">
              <li>
                - Choose level 1 if the category is the top category level
              </li>
              <li>- Level 2 and level 3 are child category levels.</li>
            </ul>

            <div className="a-text--warning">
              <i class="fa-solid fa-triangle-exclamation"></i> Warning :
              Shifting between levels without saving the{" "}
              <strong>section and section attributes</strong> will delete
              selected parent and created or extracted{" "}
              <strong>section and section attributes</strong>
            </div>
          </div>
          {selectedLevel !== 1 && (
            <div id="box6" className="a-section--box space-y-8">
              <div className="flex justify-between items-center">
                <p className="a-text--section">Select parent</p>
                {errors.missingParent && (
                  <p className="a-text--button text-yellow-600 bg-yellow-50 flex items-baseline gap-2">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    {errors.missingParent}
                  </p>
                )}
              </div>
              <div className="flex gap-4 flex-wrap">
                {parents.map((parent) => (
                  <div
                    className="flex items-center gap-2 text-[1.4rem] bg-gray-100 font-medium p-2 rounded-[.3rem]"
                    key={parent._id}
                  >
                    <label htmlFor={parent.title}>{parent.title}</label>
                    <input
                      type="radio"
                      name={`${selectedLevel}`}
                      id={parent.title}
                      onChange={() => selectParent(parent._id, selectedLevel)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {!sectionStat && !suggessionBox && (
            <div
              id="add_section_box"
              className="a-section--box flex flex-col gap-4"
            >
              <p className="a-text--body">
                <strong>Section</strong> and{" "}
                <strong>Section specific attributes</strong> give more details,
                clarity and trust to the customers about the product they are
                looking at.
              </p>
              <button
                className="a-text--button bg-neutral-100 self-end hover:bg-neutral-200"
                onClick={handleCategorySection}
              >
                add sections
              </button>
            </div>
          )}

          {parentCategory && suggessionBox && (
            <div className="a-section--box text-[1.4rem] font-medium space-y-8">
              <p>
                Extract the attributes and sections created in the parent
                category?
              </p>
              <div className="buttons flex justify-end gap-4">
                <button
                  className="a-text--button text-red-600 border border-red-600"
                  onClick={() => {
                    boxInteraction(false);
                  }}
                >
                  <i className="fa-solid fa-xmark "></i> no, ill do it by myself
                </button>
                <button
                  className="a-text--button text-green-700 border border-green-700"
                  onClick={() => {
                    boxInteraction(true);
                  }}
                >
                  <i className="fa-solid fa-check"></i> yes, extract from parent
                </button>
              </div>
            </div>
          )}
          {/* making section visible */}
          {sectionStat && (
            <>
              <div
                id="box2"
                className={`a-section--box space-y-8 ${
                  disableContent ? "text-neutral-400 cursor-not-allowed" : ""
                }`}
              >
                <div className="flex justify-between items-center gap-6 ">
                  <div className="flex items-center gap-4">
                    <p className="a-text--section">section and attributes</p>
                    {errors.sectionSubmitError && (
                      <p className="a-text--error">
                        {errors.sectionSubmitError}
                      </p>
                    )}
                  </div>

                  <button
                    className="a-text--button text-green-800 bg-neutral-100 !font-semibold capitalize cursor-pointer"
                    onClick={createSection}
                    onMouseOver={promptWarning}
                  >
                    create section
                  </button>
                </div>

                <div className="flex flex-col gap-10">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-4">
                      <label htmlFor="" className="a-text--label capitalize">
                        section title
                      </label>
                      {errors.sectionTitleError && (
                        <p className="a-text--error">
                          {errors.sectionTitleError}
                        </p>
                      )}
                    </div>

                    <input
                      autoCapitalize="on"
                      type="text"
                      className={`a-input ${
                        secureInput ? "cursor-not-allowed" : "cursor-pointer"
                      } `}
                      placeholder="Eg: General"
                      value={section.title}
                      disabled={secureInput}
                      title={`${
                        secureInput
                          ? "General section couldn't be changed before adding"
                          : ""
                      }`}
                      onChange={handleSectionTitle}
                    />
                  </div>
                  <div className="flex gap-8 ">
                    <div className="space-y-2">
                      <label htmlFor="" className="a-text--label">
                        Label
                      </label>
                      <input
                        type="text"
                        className={`${inputfield_style}`}
                        disabled={disableContent}
                        value={attribute.label}
                        placeholder="Eg: Storage"
                        onChange={(e) => handleAttribute(e, "label")}
                      />
                    </div>
                    <div className="w-full relative">
                      <div className="space-y-2">
                        <label htmlFor="" className="a-text--label">
                          Choose the type of form field
                        </label>
                        <div
                          className={`a-input flex justify-between items-center  ${
                            disableContent
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          onClick={() => {
                            if (!disableContent) setDropdown(!dropdown);
                          }}
                        >
                          <span className="">{attribute.field_type}</span>
                          <i className="fa-solid fa-angle-down"></i>
                        </div>
                      </div>
                      {dropdown && (
                        <ul
                          className={`absolute left-0 w-full bg-white border border-neutral-200 shadow-[0_.1rem_.6rem_#c7c7c7] p-4 rounded-[.8rem] text-[1.3rem]`}
                        >
                          {["text", "select", "multi-select"].map((type, i) => (
                            <li
                              key={i}
                              className="text-neutral-700 font-medium py-[.5rem] px-4 cursor-pointer hover:bg-neutral-200 rounded-[.7rem] capitalize"
                              onClick={() =>
                                handleAttribute(type, "field_type")
                              }
                            >
                              {type}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div
                    className={`space-y-2 ${
                      optionsBox ? "text-black" : "text-neutral-400"
                    }`}
                  >
                    <div className="flex justify-between items-baseline">
                      <label htmlFor="" className="a-text--label">
                        Options (add field options with comma separation)
                      </label>
                      {errors.options && (
                        <p className="a-text--error leading-[1.8rem]">
                          {errors.options}
                        </p>
                      )}
                    </div>

                    <input
                      autoCapitalize="on"
                      type="text"
                      className={`${
                        optionsBox ? "" : "cursor-not-allowed"
                      } a-input`}
                      placeholder="Eg: 64GB, 128GB, 256GB, 512GB"
                      value={attribute.options}
                      disabled={!optionsBox}
                      onChange={(e) => handleAttribute(e, "options")}
                    />
                  </div>

                  <div className={`flex items-center gap-5 ${buttonStatStyle}`}>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className={buttonStatStyle}
                      onChange={handleCheckbox}
                      disabled={!buttonStat} //default - true
                    />
                    <label
                      htmlFor=""
                      className={`a-text--label ${buttonStatStyle}`}
                    >
                      Select this section to handle price and quantity for this
                      category
                    </label>
                  </div>

                  <div className="flex self-end gap-6">
                    {errors.label && (
                      <p className="a-text--error leading-[1.8rem]">
                        {errors.label}
                      </p>
                    )}
                    <button
                      className={`self-end a-text--button text-black  ${
                        disableContent
                          ? "!cursor-not-allowed bg-neutral-500"
                          : "bg-neutral-100 hover:bg-neutral-200"
                      }`}
                      onClick={() => {
                        if (!disableContent) addAttribute();
                      }}
                    >
                      <i class="fa-solid fa-plus"></i> add form attribute
                    </button>
                  </div>
                </div>
              </div>
              <div id="box3" className="a-section--box min-h-[20rem] space-y-4">
                <div className="flex justify-between items-baseline">
                  <p className="a-text--section">Attributes</p>
                  {errors.attributes && (
                    <p className="a-text--error">{errors.attributes}</p>
                  )}
                </div>

                {attributes.length ? (
                  <div className="grid gap-y-3">
                    <div className="grid grid-cols-3 gap-0">
                      {["Form label", "Form field type", "Field options"].map(
                        (e) => (
                          <p className="a-text--table-head">{e}</p>
                        )
                      )}
                    </div>
                    <div className="">
                      {attributes.map((a) => (
                        <div className="grid grid-cols-3 w-full gap-0 py-3 first:pt-0 last:pb-0 border-b border-neutral-200 last:border-0">
                          {Object.entries(a).map(([key, values]) => (
                            <p className="a-text--table-data">
                              {key === "options"
                                ? values.join(", ") || "-"
                                : values}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-[1.4rem] font-medium">
                      No attributes have been added for this section.
                    </p>
                    <p className="a-text--sub">
                      Add more attributes for this category so that users you
                      can give more details about the products grouped under
                      this category.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="right w-5/12 flex flex-col gap-8">
          <div id="box4" className="a-section--box space-y-4">
            <p className="a-text--section">drop category image</p>
            <div className="border-2 border-dashed border-neutral-400 py-4 rounded-[1rem]">
              <input type="file" className="hidden" ref={fileinputRef} />
              <div
                className="text-center space-y-1 cursor-pointer"
                onClick={() => fileinputRef.current.click()}
              >
                <i className="fa-solid fa-image text-neutral-400 text-[3rem]"></i>
                <p className="text-[1.2rem] text-neutral-400 font-medium">
                  Upload Image
                </p>
              </div>
            </div>

            {/* <button>save image</button> */}
          </div>
          <div id="box-section" className="a-section--box space-y-4">
            <p className="a-text--section">category sections</p>
            {sections.length ? (
              <div className="">
                {sections.map((sec) => (
                  <div className="space-y-2 py-8 first:pt-0 last:pb-0 border-b border-neutral-300 last:border-b-0">
                    <p className="a-text--table-section-head">{sec.title}</p>
                    <div className="space-y-6">
                      <ul className="grid grid-cols-3 gap-0">
                        {["Form label", "Form field type", "Field options"].map(
                          (e) => (
                            <li className="a-text--table-head">{e}</li>
                          )
                        )}
                      </ul>
                      {sec.attributes.map((att) => (
                        <ul className="grid grid-cols-3 gap-0">
                          {Object.entries(att).map(([key, value]) => (
                            <li className="a-text--table-data">
                              {key === "options" ? value.join(", ") : value}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="a-text--body text-neutral-500 italic">
                No sections have added for this websites so far
              </div>
            )}
          </div>
          <div className="self-end sticky top-[1rem]">
            <button
              className={`text-end a-text--button  text-neutral-600 flex items-center gap-2 ${
                disableContent
                  ? "bg-[#A5BDB0] !cursor-not-allowed"
                  : "bg-neutral-200 hover:text-neutral-900"
              }`}
              onClick={submitCategory}
              disabled={disableContent}
            >
              <i class="fa-solid fa-download"></i>
              create new category
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryMgt;
