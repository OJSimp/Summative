import { useState } from "react"

export const useGetUser = () => {

 const [ firstName, setFirstName ] = useState()
 const [ lastName, setLastName ] = useState()
 const [ email, setEmail ] = useState()

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

 return { userDetails, firstName, lastName }

}

