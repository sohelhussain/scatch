const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productsModel = require("../models/product-model");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

  const product = await productsModel.create({
    image: req.file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });
  
  req.flash('success','Successfully created product');
  res.redirect('/owners/admin');
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
