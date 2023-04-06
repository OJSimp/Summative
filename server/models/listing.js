const mongoose = require("mongoose");

// Art Listing schema

const commentsSchema = new mongoose.Schema({
  creatorId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  details: { type: String },
});

const listingSchema = new mongoose.Schema({
  creatorId: { type: String },
  price: { type: Number, required: true },
  artTitle: { type: String, required: true },
  artSpecs: { type: String, required: true },
  artType: { type: String, required: true },
  artDetails: { type: String, required: true },
  artistName: { type: String, required: true },
  artistBio: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  dateModified: { type: Date },
  status: { type: String, required: true },
  image: { type: String },
  comments: { type: [commentsSchema] },
});

module.exports = mongoose.model("Listing", listingSchema);
