import Sequelize from "sequelize";
import database from "../utilis/database.js";

const stores = database.define("stores", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primryKey: true,
  },

  storeName: Sequelize.STRING,
  storeAddress: Sequelize.STRING,
  storePhone: Sequelize.STRING,
  storeHours: Sequelize.FLOAT,
  storeLogo: Sequelize.STRING,
  storeCity: Sequelize.STRING,
  storeEmail: Sequelize.STRING,
  categoryId: Sequelize.INTEGER,
});
export default stores;
