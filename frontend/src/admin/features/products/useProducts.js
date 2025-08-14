import { useEffect, useState } from "react";

const useProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryDataInputs, setCategoryDataInputs] = useState({
    variants: [],
    sections: [],
  });
  const [productVariant, setProductVariant] = useState({
    variant: {},
    price: 0,
    stock: 0,
  });
  const [productVariants, setProductVariants] = useState([]);
  const [productErrors, setProductErrors] = useState({});

  useEffect(() => {
    let object = {};
    if (categoryDataInputs.variants.length) {
      categoryDataInputs.variants.forEach((v) => {
        object[v.label] = v.values[0];
      });
      setProductVariant((prev) => ({ ...prev, variant: object }));
      return;
    }
  }, [categoryDataInputs, productVariants]);

  const handleCategory = (id) => {
    setSelectedCategory(id);
  };

  const handleVariantData = (event) => {
    const { name, value } = event.target;
    setProductErrors((prevError) => {
      return { ...prevError, [name]: "" };
    });
    setProductVariant((prevInfo) => {
      let newVariant = { ...prevInfo };
      if (name === "stock" || name === "price") newVariant[name] = value;
      else newVariant.variant[name] = value;
      return newVariant;
    });
  };

  const submitProductVariant = () => {
    const errors = {};
    console.log("variant:", productVariant);
    Object.entries(productVariant).forEach(([key, value]) => {
      if ((key === "stock" || key === "price") && Number(value) <= 0)
        errors[key] = `${key} cannot be empty or 0`;
    });
    console.log("errors", errors);
    if (Object.keys(errors).length) {
      return setProductErrors((prevErrors) => {
        let new_errors = { ...prevErrors };
        Object.entries(errors).forEach(([key, value]) => {
          new_errors[key] = value;
        });
        return new_errors;
      });
    }
    setProductVariants((prev) => [...prev, productVariant]);
    setProductVariant({ variant: {}, price: 0, stock: 0 });
  };

  return {
    selectedCategory,
    handleCategory,
    categoryDataInputs,
    setCategoryDataInputs,
    productVariant,
    productVariants,
    handleVariantData,
    submitProductVariant,
    productErrors,
  };
};

export default useProducts;
