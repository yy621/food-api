import Secretlize from "sequelize";
const connection = new Secretlize(
  "food_db",
  "root",
  "ym6073557",

  {
    dialect: "mysql",
    host: "localhost",
  }
);

export default connection;
