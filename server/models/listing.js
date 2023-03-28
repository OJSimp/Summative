const mongoose = require('mongoose')

// Art Listing schema

const listingSchema = new mongoose.Schema({
 creatorId: {type: String,},
 price: {type: String},
 artTitle: {type: String},
 artSpecs: {type: String},
 artType: {type: String},
 artDetails: {type: String},
 artistName: {type: String},
 artistBio: {type: String},
 dateCreated: {type: Date},
 dateModified: {type: Date},
 status: {type: String},
 // image: {type: mongoose.Schema},
 comments: {type: Array}

})


module.exports = mongoose.model("Listing",  listingSchema )