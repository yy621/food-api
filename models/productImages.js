import Sequelize from "sequelize";
import database from "../utilis/database.js";

const productImages = database.define("productImages", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primryKey: true,
  },
  productId: Sequelize.INTEGER,
  imageUrl: Sequelize.INTEGER,
});

export default productImages;
