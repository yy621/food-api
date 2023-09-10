import Sequelize from "sequelize";
import database from "../utilis/database.js";

const orderItems = database.define("orderItems", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primryKey: true,
  },

  orderId: Sequelize.INTEGER,
  productId: Sequelize.INTEGER,
  quantity,
});
export default orderItems;
