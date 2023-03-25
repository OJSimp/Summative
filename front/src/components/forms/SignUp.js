import { useState } from "react"

import { useSignUp } from "../../hooks/useSignUp"

import "./SignUp.scss"


const SignUp = () => {

 const [firstName, setFristName] = useState("")
 const [lastName, setLastName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const {signup, error, loading} = useSignUp()


 const handleSignUp = async (e) => {
 e.preventDefault()

  // POST request being sent to useSignUp.js Hook 
  await signup( firstName, lastName, email, password )

 }


 return(
  <div>
   <form className="form__sign-up" onSubmit={handleSignUp}>

    <input type="text" placeholder="" className="text-input--icon" id="log-in--first-name" onChange={(e) => {setFristName(e.target.value)}} value={firstName}/>
    <label htmlFor="log-in--first-name" className="input-label--icon" id="log-in__first-name">
     <span>First name</span>
    </label>

    <input type="text" placeholder="" className="text-input--icon" id="log-in__last-name" onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
    <label htmlFor="log-last-name" className="input-label--icon" id="log-in__last-name">
     <span>Last name</span>
    </label>

    <input type="text" placeholder="" className="text-input--icon" id="log-in__email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
    <label htmlFor="log-in__email" className="input-label--icon" id="log-in__email">
     <span>Email address</span>
    </label>

    <input type="password" placeholder="" className="text-input--icon" id="log-in__passowrd" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
    <label htmlFor="log-in--passowrd" className="input-label--icon" id="log-in__passowrd">
     <span>Password</span>
    </label>

    {/* error received from backend (userModel & userController) and displayed here using the hook useSignUp */}
    {error && <div className="form-error">{error}</div>}
   
   <button className="primary-button">Sign Up</button>
   
   </form>

  </div>
  )



}

export default SignUp