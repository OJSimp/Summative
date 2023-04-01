import "./Search.scss"

import { useState, useEffect } from "react"

import ListingCard from "../components/cards/ListingCard"

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {

 const [listingArray, setListingArray] = useState(null)

 const editListingsPage = "listing-details"

 useEffect( () => {

  const returnListingData = async () => {
  
   const resposne = await fetch(`http://localhost:8001/listings/`, {method: "GET"})
   const data = await resposne.json()
   const dataArray = data

   if(resposne.ok){
    setListingArray(dataArray)
  }
 }

  returnListingData()

 }, [])

 return(
  <div className="search__page">
   <button className="btn-search">Search <span><AiOutlineSearch/></span></button>
   {listingArray ? < ListingCard listings={listingArray} link={editListingsPage}/> : null}
  </div>
  )


}


export default Search