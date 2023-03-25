const User = require("../models/user")
const jwt = require("jsonwebtoken")

const userToken = (_id) => {
 // sending the user _id exlusively as a payload to user cookie data
 return jwt.sign({_id}, process.env.TOKEN, {expiresIn: '3d'})
}

// login user

const loginUser = async (req, res) => {
 
const { email, password } = req.body 

 try {

  const user = await User.login( email, password)
  const token = userToken(user._id)

  res.status(200).json({ user, token })
 
  // cannot signup user 
 } catch(error){
 
  res.status(400).json({ error: error.message })

 }
}

// signup a new user 

const signupUser = async (req, res) => {

 const { firstName, lastName, email, password } = req.body

 try {

  const user = await User.signup( firstName, lastName, email, password)

  // after user is signed up take the id and create the token
  const token = userToken(user._id)

  res.status(200).json({ user, token })
 
  // cannot signup user 
 } catch(error){
 
  res.status(400).json({ error: error.message })

 }
 
}




 module.exports = { loginUser, signupUser }
