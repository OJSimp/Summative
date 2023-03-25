const mongoose = require('mongoose')

// USER schema

const userSchema = new mongoose.Schema({
 firstName: {type: String,},
 lastName: {type: String},
 email: {type: String, unique: true},
 password: {type: String}
})


module.exports = mongoose.model("User", userSchema)