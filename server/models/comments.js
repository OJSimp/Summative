
const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
 creatorId: {type: String,},
 firstName: {type: String},
 lastName: {type: String},
 details: {type: String}
})


module.exports = mongoose.model("Comments",  commentsSchema )