import Sequelize from "sequelize";
import database from "../utilis/database.js";

const products = database.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primryKey: true,
  },
  prodName: Sequelize.STRING,
  prodDesc: Sequelize.STRING,
  prodPrice: Sequelize.FLOAT,
  categoryId: Sequelize.INTEGER,
  storeId: Sequelize.INTEGER,
});

export default products;
