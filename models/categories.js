import Sequelize from "sequelize";
import database from "../utilis/database.js";

const categories = database.define("categories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primryKey: true,
  },

  categoryName: Sequelize.STRING,
  categoryImage: Sequelize.STRING,
  categoryOrder: Sequelize.INTEGER,
  categoryDesc: Sequelize.STRING,
});
export default categories;

export const getcategories = () => {
  categories.findAll();
};

export const getcategoryById = (id) => {};
export const addNewCategory = () => {};
export const updateCategoryById = (id) => {};
export const deleteCategoryById = (id) => {};
