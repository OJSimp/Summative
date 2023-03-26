const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

const listingRoute = require("./routes/listingRoutes")
const userRoute = require("./routes/userRoutes")

//models
const Image = require("./models/image");
const Listing = require("./models/listing")
const User = require("./models/user.js");

const e = require("express");

// create servers
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// routes will be issues here
// app.use('/listings', listingRoute)
app.use('/users', userRoute)

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

app.post("/listings", async(req, res) => {

   const newListing = await Listing.create(req.body)
   res.json(newListing)

   console.log("POST CREATED", newListing)

 })

app.get("/listings/", async (req, res) => {

  const viewAllListing = await Post.find({})

  console.log(viewAllListing)

  res.json(viewAllListing)

});


 app.delete("/listings/:listingsId", async(req, res) => {

  const deleteListing = await Listing.findByIdAndDelete(req.params.postId)
  res.json(deleteListing)

  console.log("POST DELETED", deleteListing)

 })




// POST request - uplaoding image with Multer
// name = image-attachment

// app.post("/images", upload.single("image-attachment"), async (req, res) => {
//   if (!req.file) {
//     res.json({ message: "no image received" });
//   } else {
//     const image = new Image({
//       data: fs.readFileSync(
//         path.join(__dirname + "/uploads/" + req.file.filename)
//       ),
//       contentType: "image/png",
//     });

//     await image.save();

//     fs.unlinkSync(path.join(__dirname + "/uploads/" + req.file.filename));
//     res.json({ message: "hello" });
//   }
// });

// GET request - receiveing an image using Multer

//  app.get("/images", async (req, res) => {

//   const requestedimage = await Image.find().lean()

//   console.log(requestedimage)

//   res.json(requestedimage)

// });






// USERS //

// get users 

app.get("/users/signup", async (req, res) => {

  const allUsers = await User.find()

  console.log(allUsers)

  res.json(allUsers)

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
