const User = require("../models/user")
const mogoose = require("mongoose")

// login user

const loginUser = async (req, res) => {
 res.json({message: "log in"})
}

// signup a new user 

const signupUser = async (req, res) => {

 const { firstName, lastName, email, password } = req.body

 try {

  const user = await User.signup( firstName, lastName, email, password)

  res.status(200).json({ user })
 
 } catch(error){
 
  res.status(400).json({ error: error.message })

 }
 
}




 module.exports = { loginUser, signupUser }
