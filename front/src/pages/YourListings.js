

import { Link, Outlet } from "react-router-dom"

import ListingCard from "../components/cards/ListingCard"

import { useState } from "react"

import { useAuthContext } from "../hooks/useAuthContext"
import { useGetUser } from "../hooks/useGetUser"
import { useEffect } from "react"


const YourListings = () => {

  const [listingArray, setListingArray] = useState(null)

  const { user } = useAuthContext()

  const { userDetails, ID, firstName, lastName } = useGetUser()

  const editListingsPage = "your-listings"

  useEffect(() => {

  if(user){
  const userEmail = user.email
  userDetails(userEmail)
  }

  }, [user])

  useEffect(() => {
  console.log("next")

  if(ID){
    const returnListingData = async () => {
    const resposne = await fetch(`http://localhost:8001/edit-listings/${ID}`, {method: "GET"})
    const data = await resposne.json()
    const dataArray = data
    console.log(dataArray)
    setListingArray(dataArray)
    
    }
    returnListingData()
  }
  }, [ID])

 return(
  <div>
   <Link to="/profile/" className="" >My Profile</Link>
   <p>Edit Listings</p>

   {listingArray ? < ListingCard listings={listingArray} link={editListingsPage} /> : null}
   </div>
  )

}

export default YourListings