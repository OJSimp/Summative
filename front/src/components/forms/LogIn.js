
import { useState } from "react"

import { useLogIn } from "../../hooks/useLogin"
import { useAuthContext } from "../../hooks/useAuthContext"

import "./LogIn.scss"

 
const LogIn = () => {

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const {login, error, loading} = useLogIn()

 // check if user is logged in from token 
 const { user } = useAuthContext()


const handleLogIn = async (e) => {
  e.preventDefault()

  await login(email, password )

}

 return(
  <form className="form__log-in" onSubmit={handleLogIn}>
    
    <input type="text" placeholder="" className="text-input--icon" id="log-in__email" onChange={(e) => {setEmail(e.target.value)}}/>
    <label htmlFor="log-in__email" className="input-label--icon" id="log-in__email">
     <span>Email address</span>
    </label>

    <input type="text" placeholder="" className="text-input--icon" id="log-in__passowrd" onChange={(e) => {setPassword(e.target.value)}}/>
    <label htmlFor="log-in--passowrd" className="input-label--icon" id="log-in__passowrd">
     <span>Password</span>
    </label>

    {/* error received from backend (userModel & userController) and displayed here using the hook useLogIn */}
    {error && <div className="form-error">{error}</div>}

    <button className="priamary-button">Log In</button>

    </form>
  )



}

export default LogIn