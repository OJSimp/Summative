const mongoose = require('mongoose')

// Art Listing schema

const artListingSchema = new mongoose.Schema({
 creatorId: {type: String,},
 price: {type: String},
 artTitle: {type: String},
 artSpecs: {type: String},
 artType: {type: String},
 artDetails: {type: String},
 artistName: {type: String, unique: true},
 artistBio: {type: String},
 dateCreated: {type: Date},
 dateModified: {type: Date},
 status: {type: String},
 image: {type: mongoose.Schema},
 comments: {type: mongoose.Schema}

 

})


module.exports = mongoose.model("ArtListing",  artListingSchema )