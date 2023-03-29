

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

  const viewAllListing = await Listing.find({})

  console.log(viewAllListing)

  res.json(viewAllListing)

});

// get listing by Id

app.get("/listings/:listingsId", async (req, res) => {

  // const listingID = req.params.listingId

  const viewAListing = await Listing.findById(req.params.listingsId)

  console.log(viewAListing)

  res.json(viewAListing)

});


 app.delete("/listings/:listingsId", async(req, res) => {

  const deleteListing = await Listing.findByIdAndDelete(req.params.listingId)
  res.json(deleteListing)

  console.log("POST DELETED", deleteListing)

 })




// USERS //

// get users 

app.get("/users/signup", async (req, res) => {

  const allUsers = await User.find()

  console.log(allUsers)

  res.json(allUsers)

});

// get user name based on email

app.get("/users/:userEmail", async (req, res) => {

  const userEmail = req.params.userEmail

  const viewUser = await User.find({email: userEmail})

  console.log(viewUser)

  res.json(viewUser)

});



// edit user profile

// using userEmail as an ID to find and get all user data
app.get("/users/:userEmail", async (req, res) => {
  const userEmail = req.params.userEmail
  const viewUser = await User.find({email: userEmail})
  console.log(viewUser)
  res.json(viewUser) 
 });

  // posting updated user data 
    app.post("/users/:userEmail", (req, res) => {
    const userEmail = req.params.userEmail
    const viewUser = User.find({email: userEmail})

  // decoding to JS
    const array = JSON.parse(userEmail);

  // defining schems
    const updateProfile = {
    id: userEmail(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    };

  // // updating data
  //   array.update(updateProfile);

  //complete update
      res.json(updateProfile);
      console.log("Profile Updated!", updateProfile);
  });  




//////------ OPTION 2 -------\\\\\\\

//updating an existing userprofile
app.put("/users/:userEmail", async (req, res) => {

  // calling the profile
  const userEmail = req.params.userEmail;
  const viewUser = await User.find({email: userEmail});
 
  // decode buffer to JS to get the user array
  const array = JSON.parse(userEmail);

  // modify the original object in the array)
  viewUser.firstName = req.body.firstName;
  viewUser.lastName = req.body.lastName;
  viewUser.email = req.body.email;

  //check item is updated
  console.log(array);

  // overwrite old file with new data – not sure if this applies with mongoose... confused
  fs.writeFileSync("/users/:userEmail", JSON.stringify(array));

  res.json(viewUser);

});



// Delete Profile
 app.delete("/users/:userId", async(req, res) => {

  const deleteUserId = await userId.findByIdAndDelete(req.params.userId)
  res.json(deleteUserId)

  console.log("PROFILE DELETED", deleteUserId)

 });




// SPENCER IS PUTTIN SOME INTENSE STUFF PAST THIS POINT //

// POST request - uplaoding image with Multer
// name = image-attachment

// app.post("/images", upload.single("image-attachment"), async (req, res) => {
//   if (!req.file) {
//     res.json({ message: "no image received" });
//   } else {
//     const image = new Image({`
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