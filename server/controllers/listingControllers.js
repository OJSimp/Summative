const Listing = require("../models/listing")

// get a listing


// POST new listing

const createListing = async (req, res) => {

 try {

  const listing = await Listing.create({ 

  creatorId: req.body.creatorId,
  price: req.body.price,
  artTitle: req.body.artTitle,
  artSpecs: req.body.artSpecs,
  artType: req.body.artType,
  artDetails: req.body.artDetails,
  artistName: req.body.artistName,
  artistBio: req.body.artistBio,
  status: req.body.status, 
  image: req.body.file.file 
  
  });
  res.status(200).json(listing)
  console.log("LISTING POSTED");

 } catch (error) {
  res.status(400).json({error: error.message})
  
 }

}

// FIND a listing by ID

const findListingById = async (req, res) => {

  const usersListing = await Listing.findById(req.params.listingsId);

  console.log(usersListing);

  res.json(usersListing);

}


// DELETE a listing 

const deleteListingById = async (req, res) => {

}



// update a listing 

const updateListingById = async (req, res) => {

}

// Put a comment 

const addAComment = async (req, res) => {

 const postId = req.params.id
  const comment = req.body 

  console.log(comment);

  // find the post to add comment by ID

  const post = await Listing.findById(postId);

  post.comments.push(comment);


  const updatedPost = await Listing.findByIdAndUpdate(postId, post);

  console.log("COMMENT ADDED", updatedPost);

}




module.exports = {
 createListing, 
 findListingById,
 addAComment

}