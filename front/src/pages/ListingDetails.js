import "./ListingDetails.scss"

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import { useGetUser } from "../hooks/useGetUser"
import { useAuthContext } from "../hooks/useAuthContext"

import Accordion from "../components/accordion/Accordion"
import ListingComments from "../components/cards/ListingComment"

const ListingDetials = () => {

 const [commentDetails, setCommentDetails] = useState("")

 const [artDetails, setArtDetails] = useState("")
 const [artSpecs, setArtSpecs] = useState("")
 const [artTitle, setArtTitle] = useState("")
 const [artType, setArtType] = useState("")
 const [artistBio, setArtistBio] = useState("")
 const [artistName, setArtistName] = useState("")
 const [price, setPrice] = useState("")
 const [status, setStatus] = useState("")
 const [image, setImage] = useState("")

 const [commentsArray, setCommentsArray] = useState(null)

 const [creatorId, setCreatorId] = useState("")


 // check if user is logged in from token 
 const { user } = useAuthContext()

 // call get user details 
 const { userDetails, ID, firstName, lastName } = useGetUser()

 // pull the id from the URL 
 const listingId = useParams().listingsId

 // check if there is a user logged in that their data is stored

 useEffect(() => {

  if(user){
  const userEmail = user.email
  userDetails(userEmail)
  }

}, [user])


 useEffect( () => {

  const listingDetails =  async () => {
  
  const resposne = await fetch(`http://localhost:8001/listings/${listingId}`, {method: "GET"})
  const details = await resposne.json()

  // console.log(details.comments)

  setCommentsArray(details.comments)

  setArtDetails(details.artDetails)
  setArtSpecs(details.artSpecs)
  setArtTitle(details.artTitle)
  setArtType(details.artType)
  setArtistBio(details.artistBio)
  setArtistName(details.artistName)
  setPrice(details.price)
  setStatus(details.status)
  setImage(details.image)

  setCreatorId(details.creatorId)

  }
   
  listingDetails()

  
 }, [])


 const handleAddComment = (e) => {
  
  e.preventDefault()

  if(commentDetails){

    const postArray = {
    creatorId: ID, 
    firstName: firstName,
    lastName: lastName,
    details: commentDetails
    }

    const putComment = async () => {

      await fetch(`http://localhost:8001/listings/${listingId}/comments`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postArray),
  
      })
         
    } 
    putComment(postArray)
    
  }

  else{
  console.log("Cannot postComment")
  }

}


return (
 <div className="listing-details">
  <img className=" listing-details__img" src={image} alt="" />
 
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
     <div className="header header--form">
      <h4>Comments</h4>
     </div>

     {commentsArray ? <ListingComments listingId={listingId} comments={commentsArray} id={ID}/> : null}
      
      <form className="form--add-comments" onSubmit={handleAddComment}>
      <textarea className="text-input" name="" id="comment-input" cols="30" rows="3" onChange={(e) => setCommentDetails(e.target.value)}/>
      <label className="text-input__label" htmlFor="comment-input">Add Comment</label>
      <button >+</button>
     </form>

     
    </div>
   
  
  </div>
 </div>
 
 )
}

export default ListingDetials