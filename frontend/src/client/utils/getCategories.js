import categories from "../../data/categories";

const getCategories = (segments) => {
  const respetive_category = (segments, categories, level = 0) => {
    if (level < segments.length) {
      const current_category = categories.find((category) => {
        if (category.slug === segments[level]) return category;
      });
      if (current_category)
        return respetive_category(
          segments,
          current_category.sub_categories,
          level + 1
        );
      else return null;
    }
    return { head: "Categories", label: "category", data: categories };
  };
  return respetive_category(segments, categories);
};

export default getCategories;
