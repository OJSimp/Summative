import { useState } from "react"

export const useGetUser = () => {

 const [ firstName, setFirstName ] = useState()
 const [ lastName, setLastName ] = useState()
 const [ email, setEmail ] = useState()
 const [ ID, setID] = useState()

 const userDetails = (userEmail) => {

  const getUserDetails = async () => {
  const response = await fetch(`http://localhost:8001/users/${userEmail}`, {method: "GET"})
  const userResponse = await response.json()

  const user = userResponse[0]
  
  setFirstName(user.firstName)
  setLastName(user.lastName)
  setEmail(user.email)
  setID(user._id)
  }

  getUserDetails()
 
 }

 return { userDetails, firstName, lastName, email, ID }

}

