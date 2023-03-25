
import { useState } from "react"

import "./LogIn.scss"

 
const LogIn = () => {

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")


const handleLogIn = (e) => {
  e.preventDefault()

  const postRequest = {email, password}

  console.log("LOGIN", postRequest)

}

 return(
  <form className="form__log-in" onSubmit={handleLogIn}>
    
    <input type="text" placeholder="Email" className="text-input--icon" id="log-in__email" onChange={(e) => {setEmail(e.target.value)}}/>
    <label htmlFor="log-in__email" className="input-label--icon" id="log-in__email">
     <span>Email address</span>
    </label>

    <input type="text" placeholder="Password" className="text-input--icon" id="log-in__passowrd" onChange={(e) => {setPassword(e.target.value)}}/>
    <label htmlFor="log-in--passowrd" className="input-label--icon" id="log-in__passowrd">
     <span>Password</span>
    </label>

    <button className="priamary-button">Log In</button>

    </form>
  )



}

export default LogIn