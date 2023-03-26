
import { useState, useEffect } from "react"

import { Link, Outlet } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"


const EditProfile = () => {

 const [userEmail, setUserEmail] = useState("")

 // storage of user information 

 const { user } = useAuthContext()

// there is a delay between when the page laods and the local storage email

 useEffect(() => {
  if (user){
  console.log("Delivery for Amiee:", user.email)
  setUserEmail(user.email)

  // once there is a user get their information from server
  getUser()
  } else {
  console.log("no user yet")

 }})

// get request to server to get the user information 

const getUser = async () => {

// user email comes from the seteUserEmail useState()
const response = await fetch(`http://localhost:8001/users/${userEmail}`, {method: "GET"})
const userResponse = await response.json()

const user = userResponse[0]
console.log(user)

}



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