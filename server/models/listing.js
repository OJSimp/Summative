

const mongoose = require('mongoose')

// Art Listing schema

const commentsSchema = new mongoose.Schema({
 creatorId: {type: String,},
 name: {type: String},
 details: {type: String}
})

const imageSchema = new mongoose.Schema({
 data: Buffer,
 contentType: String,
})

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
 // image: {type: imageSchema},
 comments: {type: commentsSchema}

})



module.exports = mongoose.model("Listing",  listingSchema )
