const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productsModel = require("../models/product-model");
const userModel = require("../models/user-model");


router.get("/", (req, res) => {
  const error = req.flash('error');
  res.render("index", {nav: false, error: false});
});


router.get("/shop", isLoggedIn, async (req, res) => {
  const products = await productsModel.find(); 
  let success = req.flash('success');
  res.render("shop",{products, success});
});

router.get("/addtocart/:productid", isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({email: req.user.email});
  user.cart.push(req.params.productid);
  await user.save();
  req.flash('success', 'Addtocart is done');
  res.redirect('/shop');
});

router.get("/cart", isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({email: req.user.email}).populate('cart');
  // const bill = Number(user.cart[0].price) + 20 - Number(user.cart[0].discount); //! this you will you use in single product
  res.render("cart", {user});
});

module.exports = router;
