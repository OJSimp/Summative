import "./Access.scss"

import LogIn from "../components/forms/LogIn"
import SignUp from "../components/forms/SignUp"

import { useState } from "react"

import { useNavigate } from "react-router-dom"

const Access = () => {

 const [showSignUp, setShowSignUp] = useState(true)

 const navigate = useNavigate()

 const navigateToProfile = () => {

  navigate("/profile")

}


 return(
 
  <div className="home-page">

  <div className="access-container">
  <div className="access__header">
    <button className="btn--icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#2A2E45"/>
      </svg>
    </button>
  </div>
   
   <div className="access__nav">
    <button className={`access--button` + (showSignUp ? ` active` : ``)} onClick={() => {setShowSignUp(true)}}>Sign Up</button>
    <button className={`access--button` + (showSignUp ? ` ` : ` active`)} onClick={() => {setShowSignUp(false)}}>Log In</button>
   </div>

   {/* Show sign up and log in is dependant on ternary operator */}

   {showSignUp ? <div className="sign-up-container"> <SignUp/> </div> : <div className="log-in-container"> <LogIn/> </div>}

    <div className="other-access-options">
  
    <p>OR</p>

    <button>Continue with Google</button>
    <button onClick={navigateToProfile}>Continue with Facebook</button>

    {/* ternery operator to display buttons to switch access */}
    { showSignUp ? <button onClick={() => {setShowSignUp(false)}}>Already have an account? Log in</button> : <button onClick={() => {setShowSignUp(true)}}>New here? Register</button> }
   </div> 
  </div>

  <div className="access-fallback-right">
    {/* <img src="https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?b=1&s=612x612&w=0&k=20&c=UfkeC1cZHV-jAB1pUEg5zdr_0wMv32eZWDbPTQn6748=" alt="" /> */}
   </div>

 </div>
  
 )

}

export default Access