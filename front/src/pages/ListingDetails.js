import "./ListingDetails.scss"

import { useState, useEffect } from "react"

import { useParams, useNavigate} from "react-router-dom"

import Accordion from "../components/accordion/Accordion"

import AddComment from "../components/modals/AddComment"

const ListingDetials = () => {

 const [artDetails, setArtDetails] = useState("")
 const [artSpecs, setArtSpecs] = useState("")
 const [artTitle, setArtTitle] = useState("")
 const [artType, setArtType] = useState("")
 const [artistBio, setArtistBio] = useState("")
 const [artistName, setArtistName] = useState("")
 const [price, setPrice] = useState("")
 const [status, setStatus] = useState("")

 const [creatorId, setCreatorId] = useState("")


 // pull the ide from the URL 
 const listingId = useParams().listingsId

 useEffect( () => {

  const listingDetails =  async() => {
  
  const resposne = await fetch(`http://localhost:8001/listings/${listingId}`, {method: "GET"})
  const details = await resposne.json()

  console.log(details)

  setArtDetails(details.artDetails)
  setArtSpecs(details.artSpecs)
  setArtTitle(details.artTitle)
  setArtType(details.artType)
  setArtistBio(details.artistBio)
  setArtistName(details.artistName)
  setPrice(details.price)
  setStatus(details.status)

  setCreatorId(details.creatorId)

  }

  listingDetails()
 
 }, [])


const handleOpenModal = () => {

 console.log("open")

}


return (
 <div>
  <p>Listing Details</p>
  <div className="listing-details">

   <img className=" listing-details__img" src="" alt="" />

   <div className="listing-details__container listing-details__header" >
    <h3>{artTitle}</h3>
    <p>{artistName}</p>
    <p>{price}</p>
   </div>

   < Accordion details={artDetails} heading="Artwork Details" index="0"/>

   < Accordion details={artistBio} heading="Artist Details" index="1"/>

   <div className="listing-details__container listing-details__buttons" >
    <button className="btn-primary">Purcahse Artwork</button>
    <button className="btn-outlie">Add To Cart</button>
   </div>

    <div className="listing-details__comments">
     <div className="comments-header">
      <h4>Comments</h4>
     </div>
     <div className="comments-display">

     </div>

     <div className="comments-button">
      <button onClick={handleOpenModal}>Add Comment</button> 
     </div>
    </div>
   
   < AddComment /> 
  </div>
 </div>
 
 )
}

export default ListingDetials