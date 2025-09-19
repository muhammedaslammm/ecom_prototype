import { useEffect, useState } from "react";
import { generateVariantsWithSKU } from "./utils/generateVariantsWithSKU";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useProducts = () => {
  const [product, setProduct] = useState({});
  const [generalData, setGeneralData] = useState({
    product_title: "",
    brand: "",
    description: "",
  });
  const [sectionData, setSectionData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryDataInputs, setCategoryDataInputs] = useState({
    variants: [],
    sections: [],
  });
  const [productErrors, setProductErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_1;
  const navigate = useNavigate();

  // getting all products
  const [products, setProducts] = useState(null);
  let [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch(
          `${BACKEND_URL}/api/products?filter=admin-products&current_page=${currentPage}`,
          {
            method: "GET",
          }
        );
        let data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          setProducts(data.products);
        }
      } catch (error) {
        console.log("error:", error.message);
      }
    };
    fetchProducts();
  }, []);

  // auto generating product variants
  const [matchingSKUs, setMatchingSKUs] = useState([]);
  useEffect(() => {
    if (selectedCategory) {
      let callFunction = async () => {
        const product_variants = await generateVariantsWithSKU({
          categoryTitle: selectedCategory,
          category_variants: categoryDataInputs.variants,
        });
        if (product_variants.length)
          setCategoryDataInputs((prev) => ({
            ...prev,
            variants: product_variants,
          }));
        console.log("product variants:", product_variants);
      };
      callFunction();
    }
  }, [selectedCategory]);

  useEffect(() => {
    console.log("variants:", categoryDataInputs.variants);
  }, [categoryDataInputs]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        `${BACKEND_URL}/api/categories?filter=all-category`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCategories(data.categories);
    };
    getCategories();
  }, []);

  useEffect(() => {
    setErrors((prev) => {
      let { category, ...rest } = prev;
      return rest;
    });
    if (categoryDataInputs.sections.length) {
      let newsectiondata = categoryDataInputs.sections.reduce(
        (obj, section) => {
          section.attributes.forEach((attribute) => {
            obj[attribute.label.toLowerCase().replace(/\s+/g, "_")] = {
              label: attribute.label,
              value: attribute.options.filter(Boolean).length
                ? attribute.options[0]
                : "",
              section: section.section_title,
            };
          });
          return obj;
        },
        {}
      );
      setSectionData(newsectiondata);
      console.log("new section data :", newsectiondata);
    }
  }, [selectedCategory]);

  const handleCategory = (title) => {
    setSelectedCategory(title);
  };

  const getChildCategories = (id) => {
    return categories.filter((category) => {
      if (category.parent && category.parent._id === id) return category;
    });
  };

  // handling general data
  const handleGeneralData = (event) => {
    const { name, value } = event.target;
    setGeneralData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => {
      let { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  // handle section data
  const handleSectionData = (event) => {
    let { name, value } = event.target;
    console.log(`name: ${name} | value: ${value}`);
    setSectionData((prev) => ({
      ...prev,
      [name]: { ...prev[name], value: value },
    }));
    setErrors((prev) => {
      let { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  // handling price and quantity
  const handleVariantData = (event) => {
    const { name, value, dataset } = event.target;
    setCategoryDataInputs((prev) => {
      let data = { ...prev };
      let newVariants = data.variants.filter((varr) => {
        if (varr.sku === dataset.id) varr[name] = value;
        return varr;
      });
      return { ...data, variants: newVariants };
    });
    setErrors((prev) => {
      let property = `${dataset.id}_${name}`;
      let { [property]: _, ...rest } = prev;
      return rest;
    });
  };

  const deleteVariant = (sku) => {
    setCategoryDataInputs((prevObj) => {
      const newObject = { ...prevObj };
      newObject.variants = newObject.variants.filter(
        (variant) => variant.sku !== sku
      );
      return newObject;
    });
  };

  const submitProduct = async () => {
    let product_errors = {};
    console.log("section data:", sectionData);

    // validating general data
    Object.entries(generalData).forEach(([key, value]) => {
      if (!value.trim()) product_errors[key] = "Field Required";
    });
    if (!selectedCategory) product_errors.category = "Category Required";

    // validating section data
    console.log("section data", sectionData);
    if (Object.keys(sectionData).length) {
      Object.entries(sectionData).forEach(([key, value]) => {
        if (!value.value.trim()) product_errors[key] = "Field Required";
      });
    }

    // validating variant data
    if (categoryDataInputs.variants.length) {
      categoryDataInputs.variants.forEach((variant) => {
        if (variant.price == 0 && !variant.block)
          product_errors[`${variant.sku}_price`] = "error";
        if (variant.stock == 0 && !variant.block)
          product_errors[`${variant.sku}_stock`] = "error";
      });
    }

    // checking errors
    if (Object.keys(product_errors).length) {
      return setErrors((prev) => ({ ...prev, ...product_errors }));
    }
    try {
      console.log("product general data:", generalData);
      const data = {
        general_data: generalData,
        category: selectedCategory._id,
        sections: sectionData,
        variants: categoryDataInputs.variants,
      };

      const response = await fetch(`${BACKEND_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response_data = await response.json();
      if (!response.ok) {
        if (response.status === 409) alert("Conflict:" + response_data.message);
        throw new Error(response_data.message);
      } else {
        console.log(response_data.message);
        toast.success("Product Successfully Created");
        navigate("/admin/products");
      }
    } catch (error) {
      console.error(error.message);
    }

  };

  return {
    categories,
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
    products,
    productErrors,
    getChildCategories,
    data: {
      sectionData,
      generalData,
      handleGeneralData,
      handleSectionData,
    },
    variantActions: {
      handleVariantData,
      deleteVariant,
    },
    submitProduct,
    errors,
  };
};

export default useProducts;
