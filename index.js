import Express from "express";

const app = Express();

app.use(Express.urlencoded());
app.use(Express.json());

const port = 3005;
app.listen(port, () => {
  console.log(`server ${port}`);
});
