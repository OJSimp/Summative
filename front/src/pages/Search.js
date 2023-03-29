import "./Search.scss"

import { useState, useEffect } from "react"

import { useAuthContext } from "../hooks/useAuthContext"

import ListingCard from "../components/cards/ListingCard"

const Search = () => {

 const [listingArray, setListingArray] = useState(null)

 const editListingsPage = "listing-details"

 useEffect( () => {

  const returnListingData = async () => {
  
   const resposne = await fetch(`http://localhost:8001/listings/`, {method: "GET"})
   const data = await resposne.json()
   const dataArray = data
   setListingArray(dataArray)

  }

  returnListingData()

 }, [])

 return(
  <div className="search__page">
   <p>search</p>
   {listingArray ? < ListingCard listings={listingArray} link={editListingsPage}/> : null}
  </div>
  )


}


export default Search