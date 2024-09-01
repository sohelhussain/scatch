const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email:String,
    password:String,
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
}],
    isadmin: Boolean,
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
}],
    contact: Number,
    picture: String,
})
module.exports = mongoose.model('User', userSchema);