const usermodel = require("../models/user-model");
const dbgr = require("debug")("development:index");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

module.exports.localAuth = async (req, res) => {
    try {
      let { fullname, email, password } = req.body;
  
      let finduser = await usermodel.findOne({ email: email});
      if(finduser) return res.status(401).send("you already have a account, go and login");

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          let user = await usermodel.create({
            fullname,
            email,
            password: hash,
          });
          let token = generateToken(user)
          res.cookie("token", token);
          res.send(user)
          // res.send("we are set the cookie");
        });
      });
    } catch (err) {
      dbgr(err);
    }
}
module.exports.login = async (req, res) => {
    let {email, password} = req.body;

    let user = await usermodel.findOne({email: email});
    if(!user) res.status(401).send("your email or password are incorrect");

    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("your are logged in successfully");
        }else{
            res.status(401).send("your email or password are incorrect");
        }
    })
}