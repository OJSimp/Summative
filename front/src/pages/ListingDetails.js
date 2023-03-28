import "./ListingDetails.scss"

import { useState, useEffect } from "react"

import { useParams, useNavigate} from "react-router-dom"

import { useGetUser } from "../hooks/useGetUser"
import { useAuthContext } from "../hooks/useAuthContext"

import Accordion from "../components/accordion/Accordion"
import ListingComments from "../components/cards/ListingComment"
import AddComment from "../components/modals/AddComment"

const ListingDetials = () => {

 const [userEmail, setUserEmail] = useState("")

 const [commentDetails, setCommentDetails] = useState("")

 const [artDetails, setArtDetails] = useState("")
 const [artSpecs, setArtSpecs] = useState("")
 const [artTitle, setArtTitle] = useState("")
 const [artType, setArtType] = useState("")
 const [artistBio, setArtistBio] = useState("")
 const [artistName, setArtistName] = useState("")
 const [price, setPrice] = useState("")
 const [status, setStatus] = useState("")

 const [commentsArray, setCommentsArray] = useState(null)

 const [creatorId, setCreatorId] = useState("")


 // check if user is logged in from token 
 const { user } = useAuthContext()

 // call get user details 
 const { userDetails, ID, firstName, lastName } = useGetUser()

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

  setCommentsArray(details.comments)

  setCreatorId(details.creatorId)

  }

  if(user){
  setUserEmail(user.email)
  userDetails(userEmail)
  }
   
  listingDetails()
  
 }, [user])


 const handleAddComment = () => {

  if(!commentDetails){

    const postComment = {
    creatorId: ID, 
    firstName: firstName,
    lastName: lastName,
    details: commentDetails
    }

  console.log(postComment)

  } else{
  console.log("postComment")
  }

}




return (
 <div className="listing-details">
  <img className=" listing-details__img" src="" alt="" />
 
  <div className="listing-details__info">
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
      <div className="add-comments">
      <textarea className="text-input" name="" id="" cols="30" rows="10" onChange={(e) => setCommentDetails(e.target.value)}/>
      <button onClick={handleAddComment}>+</button>
     </div>
      {commentsArray ? <ListingComments comments={commentsArray} id={ID}/> : null }

      <p>{ID}</p>
      < AddComment /> 
     </div>
    </div>
   
  
  </div>
 </div>
 
 )
}

export default ListingDetials