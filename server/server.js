const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

const listingRoute = require("./routes/listingRoutes");
const userRoute = require("./routes/userRoutes");

//models
const Image = require("./models/image");
const Listing = require("./models/listing");
const User = require("./models/user.js");

const e = require("express");

// create servers
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// routes will be issues here
// app.use('/listings', listingRoute)
app.use("/users", userRoute);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5242880 },
});

//-----------Routes START-----------//

// LISTINGS // -- Zee's code

app.post("/listings", async (req, res) => {
  // add try catch block to POST request
  try {
    const artListing = await Listing.create({
      creatorId: req.body.creatorId,
      price: req.body.price,
      artTitle: req.body.artTitle,
      artSpecs: req.body.artSpecs,
      artType: req.body.artType,
      artDetails: req.body.artDetails,
      artistName: req.body.artistName,
      artistBio: req.body.artistBio,
      dateCreated: req.body.creationDate,
      status: req.body.status,
      image: req.body.file.file, // -- Spencer's coded section
    });

    res.status(200).json(artListing);
    console.log("posted");
  } catch (error) {
    res.status(400).json(error.errors);
    console.log(error.message);
  }
});

// view all listings -- Spencer's coded section

app.get("/listings/", async (req, res) => {
  const viewAllListing = await Listing.find({});

  console.log(viewAllListing);

  res.json(viewAllListing);
});

// search for listing by type -- Spencer's coded section
app.get("/searchlistings/:type", async (req, res) => {
  const artType = req.params.type;

  const viewListings = await Listing.find({ artType: artType });

  console.log(viewListings);

  res.json(viewListings);
});

// search for listing by price range -- Spencer's coded section
app.get("/searchlistings/:minValue/:maxValue", async (req, res) => {
  const minValue = req.params.minValue;
  const maxValue = req.params.maxValue;

  console.log(minValue, maxValue);
});

// get listing by Id -- Spencer's coded section

app.get("/listings/:listingsId", async (req, res) => {
  // const listingID = req.params.listingId

  const usersListing = await Listing.findById(req.params.listingsId);

  console.log(usersListing);

  res.json(usersListing);
});

// get listings by creator -- Amiee's code

app.get("/your-listings/:creatorId", async (req, res) => {
  // const listingID = req.params.listingId

  const viewAListing = await Listing.find({ creatorId: req.params.creatorId });

  console.log(viewAListing);

  res.json(viewAListing);
});

// Update listing listing -- Amiees's Code

app.put("/listings/:listingId", async (req, res) => {
  const listingId = req.params.listingId;
  const putListing = req.body;

  const updatedListing = await Listing.findByIdAndUpdate(listingId);

  // modify the original object in the array)
  updatedListing.price = putListing.price;
  updatedListing.artTitle = putListing.artTitle;
  updatedListing.artSpecs = putListing.artSpecs;
  updatedListing.artType = putListing.artType;
  updatedListing.artDetails = putListing.artDetails;
  updatedListing.artistName = putListing.artistName;
  updatedListing.artistBio = putListing.artistBio;
  updatedListing.image = putListing.file.file;

  const post = await updatedListing.save();
  res.json(post);
});

// add listing comments -- Spencer's coded section

app.put("/listings/:id/comments", async (req, res) => {
  const postId = req.params.id;
  const comment = req.body;

  console.log(comment);

  // find the post to add comment by ID

  const post = await Listing.findById(postId);

  post.comments.push(comment);

  const updatedPost = await Listing.findByIdAndUpdate(postId, post);
  res.json(updatedPost);
  console.log("COMMENT ADDED", updatedPost);
});

// -- Spencer's coded section

app.delete("/listings/:listingid/comments/:commentid", async (req, res) => {
  const postId = req.params.listingid;
  const commentId = req.params.commentid;

  const post = await Listing.findById(postId);

  post.comments.pull(commentId);

  const commentsPulled = await post.save();
  res.json(post);

  console.log("Deleted Comment", commentsPulled.post);
});

// delete listing -- Zee's code

app.delete("/listings/:listingId", async (req, res) => {
  const deleteListing = await Listing.findByIdAndDelete(req.params.listingId);
  res.json(deleteListing);

  console.log("POST DELETED", deleteListing);
});

// USERS //

// get users

app.get("/users/signup", async (req, res) => {
  const allUsers = await User.find();

  console.log(allUsers);

  res.json(allUsers);
});

// get user name based on email

app.get("/users/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail;

  const viewUser = await User.find({ email: userEmail });

  console.log(viewUser);

  res.json(viewUser);
});

//////------ Edit Profile Components -------\\\\\\\

// EDIT PROFILE

// updating an existing userprofile -- Amiees
app.put("/users/:userEmail", async (req, res) => {
  // calling the profile
  const userEmail = req.params.userEmail;
  const viewUser = await User.findOne({ email: userEmail });

  // modify the original object in the array)
  viewUser.firstName = req.body.firstName;
  viewUser.lastName = req.body.lastName;
  viewUser.email = req.body.email;

  // save the updates to the user
  const updatedUser = await viewUser.save();
  res.json(viewUser);

  // show the user in the console
  console.log("Updated user", updatedUser);
});

// DELETE PROFILE -- Amiee's code
app.delete("/users/:userId", async (req, res) => {
  const deleteUserId = await User.findByIdAndDelete(req.params.userId);
  res.json(deleteUserId);

  console.log("PROFILE DELETED", deleteUserId);
});

//-----------Routes End-----------

//connection middlewares

mongoose.connect(process.env.KEY).catch((error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  app.listen(process.env.PORT, () => {
    console.log("app active:", process.env.PORT);
  });

  console.log("connection active");
});

mongoose.connection.on("error", () => {
  console.log("error");
});
