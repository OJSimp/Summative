

const mongoose = require('mongoose')

// Art Listing schema

const commentsSchema = new mongoose.Schema({
 creatorId: {type: String,},
 firstName: {type: String},
 lastName: {type: String},
 details: {type: String}
})

const listingSchema = new mongoose.Schema({
 creatorId: {type: String, required: true},
 price: {type: String, required: true},
 artTitle: {type: String, required: true},
 artSpecs: {type: String, required: true},
 artType: {type: String, required: true},
 artDetails: {type: String, required: true},
 artistName: {type: String, required: true},
 artistBio: {type: String, required: true},
 status: {type: String, required: true},
 image: {type: String,},
 comments: {type: [commentsSchema]}
}, {timestamps: true})

module.exports = mongoose.model("Listing",  listingSchema )
