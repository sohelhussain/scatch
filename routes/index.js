const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productsModel = require("../models/product-model");


router.get("/", (req, res) => {
  const error = req.flash('error');
  res.render("index", {error});
});


router.get("/shop", isLoggedIn, async (req, res) => {
  const products = await productsModel.find(); 
  res.render("shop",{products});
});

module.exports = router;
