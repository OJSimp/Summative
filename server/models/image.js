const mongoose = require('mongoose')

// a simple schema taken from Simons

const imageSchema = new mongoose.Schema({
 data: Buffer,
 contentType: String,
})


module.exports = mongoose.model("Image", imageSchema)