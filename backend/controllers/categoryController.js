import Category from "../models/categoryModel.js";

// get category by id
export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findOne({ _id: id }).populate("parent");
    res.status(200).json({ success: true, category });
  } catch (error) {
    console.error(
      "error when trying to fetch the category by id.",
      error.message
    );
    res.status(500).json({ success: false });
  }
};

export async function getCategories(req, res) {
  const { filter } = req.query;
  try {
    const categories = await Category.find().populate("parent");
    switch (filter) {
      case "all":
        return res.status(200).json({ success: true, categories });
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
        const { title, actual_title } = req.query;
        let matchingCategory = null;
        if (title !== actual_title) {
          matchingCategory = await Category.findOne({ title });
        }
        console.log("mathcing category:", matchingCategory);
        return res.status(200).json({ success: true, matchingCategory });
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
    res
      .status(200)
      .json({ message: "Category successfully created", data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    await Category.updateOne({ _id: id }, { ...data });
    res
      .status(200)
      .json({ success: true, message: "Category successfully updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    const childrens = await Category.findOne({
      parent: id,
    });
    if (childrens) {
      return res.status(200).json({
        delete: false,
        success: true,
        message:
          "This category cannot be deleted. This category is referenced by other categories",
      });
    }
    await Category.deleteOne({ _id: id });
    const categories = await Category.find();

    return res.status(200).json({
      categories,
      delete: true,
      success: true,
      message: "Category successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
