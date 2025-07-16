import laptops from "../../data/laptops";
import monitors from "../../data/monitors";
import projectors from "../../data/projectors";

const getProducts = (filters, sort) => {
  const allproducts = [...laptops, ...monitors, ...projectors];
  let filtered_products = allproducts.filter((product) => {
    return Object.entries(filters).every(([key, value]) => {
      console.log("key:", key, "|", "value:", value);
      if (key === "category") {
        value = value.length > 1 ? value.slice(1) : value;
        return product.category.some((category) =>
          value.includes(category.slug)
        );
      } else {
        return product[key] === value;
      }
    });
  });
  switch (sort.index) {
    case 0:
      break;
    case 1:
      filtered_products = filtered_products.sort(
        (a, b) => a.offer_price - b.offer_price
      );
      break;
    case 2:
      filtered_products = filtered_products.sort(
        (a, b) => b.offer_price - a.offer_price
      );
  }
  return filtered_products;
};

export default getProducts;
