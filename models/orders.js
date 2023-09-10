import Sequelize from "sequelize";
import database from "../utilis/database.js";

const orders = database.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primryKey: true,
  },

  userId: Sequelize.INTEGER,
  storeId: Sequelize.INTEGER,
  orderCost: Sequelize.INTEGER,
  orderAddress: Sequelize.STRING,
  paymentMethod: Sequelize.DOUBLE,
});
export default orders;
