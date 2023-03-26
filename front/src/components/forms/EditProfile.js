
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
   <p>Edit Profile</p>

   {/* user email showing to amieee CAN DELETE */}
   {user && (<p>{user.email}</p>)}
   
  </div>
  
  )

}

export default EditProfile