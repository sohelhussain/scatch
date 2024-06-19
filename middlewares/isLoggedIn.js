const jwt = require('jasonwevtoken');
const usermodel = require('../models/user-model');

module.exports = async (req, res, next) => {
    if(!req.cookies.token){
        req.flash('error', 'you need to login first');
        return res.redirect('/');
    }
    try{
        let decoded = jwt.verfy(req.cookies.token, process.env.JWT_KEY);

        const user = await usermodel.findOne({email: decoded.email}).select("-password");
        req.user = user;
        next();
    }catch(err){
        req.flash('error', "you need to login first");
        res.redirect('/');
    };
};