const mongoose = require('mongoose')

// USER schema

const userSchema = new mongoose.Schema({
 firstName: {type: String, required: true},
 lastName: {type: String, required: true},
 email: {type: String, unique: true},
 password: {type: String, required: true}
})


module.exports = mongoose.model("User", userSchema)