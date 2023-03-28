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
  
  if(user){
  setUserEmail(user.email)
  userDetails(userEmail)
  }

}, [user])

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
   
  listingDetails()
  
 }, [])


 const handleAddComment = (e) => {
  e.preventDefault()

  if(commentDetails){

    const postArray = {
    creatorId: ID, 
    name: firstName, lastName,
    details: commentDetails
    }

    const postComment = async () => {

      await fetch("http://localhost:8001/listings/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postArray),
        
      })
    } 
    postComment(postArray)
  }

  else{
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
     <div className="header header--form">
      <h4>Comments</h4>
     </div>
      
      <form className="form--add-comments" onSubmit={handleAddComment}>
      <textarea className="text-input" name="" id="comment-input" cols="30" rows="3" onChange={(e) => setCommentDetails(e.target.value)}/>
      <label className="text-input__label" htmlFor="comment-input">Add Comment</label>
      <button >+</button>
     </form>

     {commentsArray ? <ListingComments comments={commentsArray} id={ID}/> : null}

      {/* {commentsArray ? <ListingComments comments={commentsArray} id={ID} /> : null } */}
    </div>
   
  
  </div>
 </div>
 
 )
}

export default ListingDetials