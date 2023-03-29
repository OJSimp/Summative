import './EditProfile.scss'

import { useState, useEffect } from "react"

import { Link, Outlet } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"


const EditProfile = () => {

 const [email, setEmail] = useState("")
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")

 // storage of user information 
 const { user } = useAuthContext()

 // pull the ide from the URL –– not sure i need this here Spencer??
 const userDetails = (userEmail) => {

  console.log("getuser", userEmail)

  const getUserDetails = async () => {
  const response = await fetch(`http://localhost:8001/users/${userEmail}`, {method: "GET"})
  const userResponse = await response.json()

  const user = userResponse[0]
  setFirstName(user.firstName)
  setLastName(user.lastName)
  setEmail(user.email)

  console.log(user)
  
  }

  getUserDetails()
 
 }

 return (
  <div className="edit-profile">
  <Link to="/profile/" className="" >My Profile</Link>

{/* user email showing to amieee CAN DELETE */}
   {user && (<p>{user.email}</p>)}
  <div className="wrapper-profile__edit">
 
 <form className="profile__edit" id="editUserDetails">
  <h4>Edit Profile </h4>

  <input type="text" placeholder="First name" className="text-input--icon" id="first-name" onChange={(e) => {setFirstName(e.target.value)}} value={firstName}/>
    <label htmlFor="log-in--first-name" className="input-label--icon" id="log-in__first-name">
    </label>

    <input type="text" placeholder="Last name" className="text-input--icon" id="log-in__last-name" onChange={(e) => {setLastName(e.target.value)}} value={lastName}/> 
    <label htmlFor="log-last-name" className="input-label--icon" id="log-in__last-name">
    </label>

    <input type="text" placeholder="email@gmail.com" className="text-input--icon" id="log-in__email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
    <label htmlFor="log-in__email" className="input-label--icon" id="log-in__email">
    </label>

    <button className='btn-primary'>Save Changes</button>

 </form>  {/* form ends */}
  <div className='delete-profile'>
  <button className='btn-primary'>Delete Profile</button>
  </div>  {/* Delete Button ends */}
  </div>  {/* Wrapper ends */}

  </div>
  
  )

}

export default EditProfile