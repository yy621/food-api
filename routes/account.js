import Express from "express";
import axios from "axios";
const router = Express.Router();

router.get("/sayWelcome", async (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((results) => {
      const users = results.data;
      let new_arr = [];

      users.forEach((y) => {
        const person = {
          person_name: y.name,
          person_email: y.email,
          person_company: y.company.name,
          person_city: y.address.city,
        };
        new_arr.push(person);
      });
      //const arr = users.filter((x) => parseInt(x.id) > 5);
      //const obj = users.find((x) => x.email !== "");
      //   console.log("number of users" + " " + users.length);
      //   users.forEach((element) => {
      //     console.log(element.name + " -- " + element.company.name);
      //   });
      //   return res.status(200).json({ data: users.length });
      // })
      // .catch((error) => {
      //   return res.status(500).json({ message: error.message });
      // });
      //return res.status(200).json({ message: "Welcome to food-api server}" });
      return res.status(200).json({ data: new_arr });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
});

router.post("/sayMyName", (req, res) => {
  const { username, password } = req.body;
  return res
    .status(200)
    .json({ message: `hello ${username}your password is ${password}` });
});

export default router;
