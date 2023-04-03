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

// LISTINGS //
// POST a listing

app.post("/listings", async (req, res) => {
  await Listing.create({
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
    image: req.body.file.file,
  });

  console.log("posted");
  res.send("posted");
});

// view all listings

app.get("/listings/", async (req, res) => {
  const viewAllListing = await Listing.find({});

  console.log(viewAllListing);

  res.json(viewAllListing);
});

// // search for listing by
app.get("/searchlistings/:type", async (req, res) => {
  const artType = req.params.type;

  const viewListings = await Listing.find({ artType: artType });

  console.log(viewListings);

  res.json(viewListings);
});

// get listing by Id

app.get("/listings/:listingsId", async (req, res) => {
  // const listingID = req.params.listingId

  const usersListing = await Listing.findById(req.params.listingsId);

  console.log(usersListing);

  res.json(usersListing);
});

// get listings by creator

app.get("/your-listings/:creatorId", async (req, res) => {
  // const listingID = req.params.listingId

  const viewAListing = await Listing.find({ creatorId: req.params.creatorId });

  console.log(viewAListing);

  res.json(viewAListing);
});

// add listing comments

// add listing

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

app.delete("/listings/:listingid/comments/:commentid", async (req, res) => {
  const postId = req.params.listingid;
  const commentId = req.params.commentid;

  const post = await Listing.findById(postId);

  post.comments.pull(commentId);

  const commentsPulled = await post.save();
  res.json(post);

  console.log("Deleted Comment", commentsPulled.post);
});

app.delete("/listings/:listingId", async (req, res) => {
  const deleteListing = await Listing.findByIdAndDelete(req.params.listingId);
  res.json(deleteListing);

  console.log("POST DELETED", deleteListing);
});

// delete listing comments

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

// updating an existing userprofile
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

// DELETE PROFILE
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
