import Express from "express";
const router = Express.Router();

router.post("/addProduct", (req, res) => {
  const { ProdName, ProdPrice, ProdImage, ProdDesc } = req.body;
  return res.status(200).json({
    message: `name: ${ProdName} : ${ProdPrice} image:${ProdImage}  description:${ProdDesc}`,
  });
});

export default router;
