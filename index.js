// ב"ה
import Express from "express";
import database from "./utilis/database.js";
import order from "./routes/order.js";
import account from "./routes/account.js";
import products from "./routes/products.js";

const app = Express();

app.use(Express.urlencoded());
app.use(Express.json());

const port = 3005;
app.use("/api/account", account);
app.use("/api/order", order);
app.use("/api/products", products);
database
  .sync()
  .then((results) => {
    app.listen(port, () => {
      console.log(`server is runing on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
