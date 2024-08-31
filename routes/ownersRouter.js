const express = require("express");
const router = express();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/test", async (req, res) => {
    let preowner = await ownerModel.find();
    if (preowner.length > 0) {
      return res.status(501).send("Owner already exists");
    }

    let {fullname, email, password} = req.body;

    let owner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.send(owner);
  });
}

router.get("/admin", (req, res) => {
  let success = req.flash("success");
  res.render("creatproducts", {success});
});

module.exports = router;
