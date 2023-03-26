import './EditProfile.scss'

import { useState, useEffect } from "react"

import { Link, Outlet } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"


const EditProfile = () => {

 const [userEmail, setUserEmail] = useState("")

 // storage of user information 

 const { user } = useAuthContext()


 return (
  <div className="edit-profile">
  <Link to="/profile/" className="" >My Profile</Link>

{/* user email showing to amieee CAN DELETE */}
   {user && (<p>{user.email}</p>)}
  <div className="edit-profile">
 <h4>Edit Profile Details</h4>
 <form action="./EditProfile.js">
  <input type="text" id="text-input" name="firstname" placeholder="First name" />
  <input type="text" id="text-input" name="lastname" placeholder="Last name" />
  <input type="text" id="text-input" name="email" placeholder="email@gmail.com" />
  <button className="btn-primary">Update Profile</button>
 </form>
</div>
{/* end of edit profile */}  
<div className='delete-profile'>
  <button className='btn-primary'>Delete Profile</button>
</div>

  </div>

  
  )

}

export default EditProfile