
const express = require("express")
const router = express.Router()

// controller functions

const { loginUser, signupUser } = require("../controllers/userController")

 // Log In route - login page
 router.post('/login', loginUser)


 // Sign up route - signup page
 router.post('/signup', signupUser)

module.exports = router
