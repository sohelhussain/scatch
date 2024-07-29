const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productsModel = require("../models/product-model");

router.post("/create", upload.single("image"), async (req, res) => {
  let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

  const product = await productsModel.create({
    image: req.files.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });
  res.send(product);
});

module.exports = router;
