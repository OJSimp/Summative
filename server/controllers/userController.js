const User = require("../models/user")


// create a new user 

 const createNewUser = async (req, res) => {
    
  try {

  // if there is an existing user - Return an error and the user data

  const existingUser = await User.findOne( {email : req.body.email} )
  if (existingUser){
    console.log("Existing User", existingUser)
  }

  // if the user is a new user - Create the user

    // encrypt the password for the user
    // const encryptPassword = await bcrypt.hash(req.body.password, 10)

  const newUser = await User.create(req.body)
  res.json(newUser, newUser)
  console.log("User Created")
    
  } catch (error) {

  // if the user cannot be created return the error 
  console.log("User Not Created", error)
  
  }

 }


 module.exports = {
  createNewUser
 
 }
