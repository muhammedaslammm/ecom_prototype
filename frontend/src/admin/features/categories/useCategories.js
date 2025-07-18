import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [variant, setVariant] = useState({ label: "", values: "" });
  const [variants, setVariants] = useState([]);
  const [errors, setErrors] = useState({});

  const [attribute, setAttribute] = useState({
    label: "",
    field_type: "text",
    options: "",
  });
  const [section, setSection] = useState({
    section_title: "",
    attributes: [],
  });
  const [categorySections, setCategorySections] = useState([]);
  const navigate = useNavigate();

  const BACKEND_API_URL = import.meta.env.VITE_API_URL;

  // fetching all categories
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `${BACKEND_API_URL}/api/categories?filter=all`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCategories(data.categories);
      } else throw new Error(data.message);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchLevels() {
      const response = await fetch(
        `${BACKEND_API_URL}/categories?filter=level`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("levels:", data.levels);
        setLevels(data.levels);
      }
    }
    fetchLevels();
  }, []);

  const handleCategoryTitle = (value) => {
    setCategoryTitle(value);
    setErrors((prevErrors) => {
      let { categoryTitle, ...rest } = prevErrors;
      if (value.trim().length >= 3) return rest;
      return { ...rest, categoryTitle: "Required atleast 3 character" };
    });
  };

  const handleSelectedLevel = async (level) => {
    setSelectedLevel(level);
    setSelectedParent(null);
    if (level === 1) {
      setErrors((prevErrors) => {
        const { parent, ...rest } = prevErrors;
        return rest;
      });
      setParents([]);
      return;
    }
    try {
      const response = await fetch(
        `${BACKEND_API_URL}/categories?filter=parent&level=${level}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("parents:", data.parentCategories);
        setParents(data.parentCategories);
      } else throw new Error();
      return;
    } catch (error) {
      setError("Network Error, check your internet connection");
      setParents([]);
      return;
    }
  };

  const handleParent = (id) => {
    console.log("parent id:", id);
    setSelectedParent(id);
    setErrors((prevErrors) => {
      const { parent, ...rest } = prevErrors;
      return rest;
    });
  };

  const handleCategoryVariants = (event) => {
    const { name, value } = event.target;
    const errorObject = {};
    setVariant((prevVariant) => {
      if (name === "label") errorObject.variant_label = "";
      else errorObject.variant_values = "";
      return {
        ...prevVariant,
        [name]: value,
      };
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errorObject,
    }));
  };

  const createCategoryVariant = () => {
    const errorObject = {};
    const values = variant.values.split(",").filter(Boolean);
    if (variant.label.trim().length < 3)
      errorObject.variant_label = "Required atleast 3 characters";
    if (values.length < 1)
      errorObject.variant_values = "Required atleast 1 value";

    if (Object.keys(errorObject).length) {
      return setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        Object.entries(errorObject).forEach(([key, value]) => {
          newErrors[key] = value;
        });
        return newErrors;
      });
    }

    const newVariant = { ...variant, values };
    setVariants((prevVariants) => [...prevVariants, newVariant]);
    setVariant({ label: "", values: "" });
  };

  const handleSectionTitle = (event) => {
    setSection((prevSection) => ({
      ...prevSection,
      section_title: event.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      section_title: "",
    }));
  };

  const handleAttribute = (event) => {
    const { name, value } = event.target;
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (["label", "options"].includes(name)) newErrors[name] = "";
      if (name === "field_type" && value === "text") newErrors.options = "";
      return newErrors;
    });

    setAttribute((prevAttribute) => ({
      ...prevAttribute,
      [name]: value,
    }));
  };
  const submitAttribute = () => {
    const errorObject = {};
    const options = attribute.options
      .split(",")
      .filter(Boolean)
      .map((item) => item.trim());
    if (attribute.label.trim().length < 2)
      errorObject.label = "Label requires atleast 2 characters";
    if (attribute.field_type !== "text" && !options.length)
      errorObject.options =
        "Options cannot be empty for 'select' or 'multi-select' field type";
    if (Object.keys(errorObject).length)
      return setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        Object.entries(errorObject).forEach(([key, value]) => {
          newErrors[key] = value;
        });
        return newErrors;
      });
    const attributeObject = { ...attribute, options: options };
    setSection((prevSections) => ({
      ...prevSections,
      attributes: [...prevSections.attributes, attributeObject],
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      section_attribute: "",
    }));
    setAttribute((prevAttribute) => ({
      label: "",
      field_type: "text",
      options: "",
    }));
  };

  const createCategorySection = () => {
    let errorObject = {};
    const titleLength = section.section_title.trim().length;
    if (titleLength === 0)
      errorObject.section_title = "Cannot create a section with no title";
    else if (titleLength < 3)
      errorObject.section_title = "Title required atlest 3 characters";
    else if (section.attributes.length < 1)
      errorObject.section_attribute =
        "Cannot create section with no attributes";
    if (Object.keys(errorObject).length)
      return setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        Object.entries(errorObject).forEach(([key, value]) => {
          newErrors[key] = value;
        });
        return newErrors;
      });

    setCategorySections((prevSections) => [...prevSections, section]);
    toast.success(`New section '${section.section_title}' created`);
    setAttribute({
      label: "",
      field_type: "text",
      options: "",
    });
    setSection({
      section_title: "",
      attributes: [],
    });
  };

  const submitCategory = async () => {
    let errorObject = {};
    try {
      if (categoryTitle.trim().length < 3)
        errorObject.categoryTitle = "Required atleast 3 character";
      else {
        const response = await fetch(
          `${BACKEND_API_URL}/categories?filter=title&title=${categoryTitle}`,
          { method: "GET" }
        );
        const data = await response.json();
        if (response.ok) {
          if (data.matchingCategory)
            errorObject.categoryTitle = "Title already taken";
        } else {
          throw new Error(data.message);
        }
      }
      if (selectedLevel !== 1 && !selectedParent)
        errorObject.parent = "Select one parent for this level";
      if (Object.keys(errorObject).length) {
        toast.error("Enter all required data inorder to create a new category");
        return setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          Object.entries(errorObject).forEach(([key, value]) => {
            newErrors[key] = value;
          });
          return newErrors;
        });
      }
      const data = {
        title: categoryTitle,
        level: selectedLevel,
        parent: selectedParent,
        variants,
        sections: categorySections,
      };
      const response = await fetch(`${BACKEND_API_URL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        toast.success("New Category Added");
        navigate("/admin/categories");
      } else throw new Error(responseData.message);
    } catch (error) {
      console.error("ERROR: ", error.message);
      setError(error.message);
    }
  };

  return {
    categories,
    categoryTitle,
    handleCategoryTitle,
    levels,
    selectedLevel,
    handleSelectedLevel,
    parents,
    handleParent,
    handleCategoryVariants,
    variant,
    variants,
    createCategoryVariant,
    categorySections,
    sectionTitle: section.section_title,
    handleSectionTitle,
    attribute,
    handleAttribute,
    submitAttribute,
    sectionAttributes: section.attributes,
    createCategorySection,
    submitCategory,
    errors,
  };
};

export default useCategories;
