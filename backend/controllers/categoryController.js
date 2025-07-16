import Category from "../models/categoryModel.js";

// get category by id
export const getCategoryById = async (req, res) => {
  const { categoryid } = req.params;
  try {
    const category = await Category.findOne({ _id: categoryid });
    res.status(200).json({ success: true, category });
  } catch (error) {
    console.error(
      "error when trying to fetch the category by id.",
      error.message
    );
    res.status(500).json({ success: false });
  }
};

export async function getCategory(req, res) {
  const { filter } = req.query;
  try {
    const categories = await Category.find();
    switch (filter) {
      case "level":
        const getLevelsCount = (categories, currentLevel = 1, levels = [1]) => {
          const matchingLevel = categories.find(
            (category) => category.level === currentLevel
          );
          if (matchingLevel) {
            levels.push(currentLevel + 1);
            return getLevelsCount(categories, currentLevel + 1, levels);
          } else return levels;
        };
        const levels = getLevelsCount(categories);
        return res.status(200).json({ success: true, levels });
      case "parent":
        const level = Number(req.query.level);
        let parentCategories = [];
        if (level !== 1) {
          parentCategories = await Category.find({ level: level - 1 });
        }
        return res.status(200).json({ success: true, parentCategories });
      case "title":
        const { title } = req.query;
        const matchingCategory = await Category.findOne({ title });
        res.status(200).json({ success: true, matchingCategory });
      default:
        break;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createCategory(req, res) {
  try {
    const data = req.body;
    const newCategory = await Category.create(data);
    res.status(200).json({ message: "request successfull", data: newCategory });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error.message });
  }
}
