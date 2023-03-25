import { useState } from "react"

import "./SignUp.scss"


const SignUp = () => {

 const [firstName, setFristName] = useState("")
 const [lastName, setLastName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const handleCreateUser = (e) => {
 e.preventDefault()

 const postRequest = {firstName, lastName, email, password}

 const PostUser = async() => {

  await fetch("http://localhost:8001/users/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(postRequest)
  }).then((data) => console.log("User Created", data.statusText))}

  PostUser()
 
 }


 return(
  <div>
   <form className="form__sign-up" onSubmit={handleCreateUser}>

    <input type="text" placeholder="First name" className="text-input--icon" id="log-in--first-name" onChange={(e) => {setFristName(e.target.value)}}/>
    <label htmlFor="log-in--first-name" className="input-label--icon" id="log-in__first-name">
     <span>First name</span>
    </label>

    <input type="text" placeholder="Last name" className="text-input--icon" id="log-in__last-name" onChange={(e) => {setLastName(e.target.value)}}/>
    <label htmlFor="log-last-name" className="input-label--icon" id="log-in__last-name">
     <span>Last name</span>
    </label>

    <input type="text" placeholder="Email" className="text-input--icon" id="log-in__email" onChange={(e) => {setEmail(e.target.value)}}/>
    <label htmlFor="log-in__email" className="input-label--icon" id="log-in__email">
     <span>Email address</span>
    </label>

    <input type="text" placeholder="Password" className="text-input--icon" id="log-in__passowrd" onChange={(e) => {setPassword(e.target.value)}}/>
    <label htmlFor="log-in--passowrd" className="input-label--icon" id="log-in__passowrd">
     <span>Password</span>
    </label>

   <button className="primary-button">Sign Up</button>
   </form>

  </div>
  )



}

export default SignUp