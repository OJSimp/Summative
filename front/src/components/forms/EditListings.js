import './EditListings.scss';

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

import { useEffect, useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";


const EditListings = () => {

  // const [ID, setID] = useState("")
  const [price, setPrice] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artType, setArtType] = useState("");
  const [artDetails, setArtDetails] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
   
    // pull the id from the URL
    const listingId = useParams().listingsId;

    // get listing details
     const listingDetails = async () => {
   
     const response = await fetch(
      `http://localhost:8001/listings/${listingId}`, 
      { method: "GET" }
      );
      
     const details = await response.json()

     setPrice(details.price);
     setArtTitle(details.artTitle);
     setArtSpecs(details.artSpecs);
     setArtType(details.artType);
     setArtDetails(details.artDetails);
     setArtistName(details.artistName);
     setArtistBio(details.artistBio);
     setStatus(details.status);
     setImage(details.image);
     };
   
     listingDetails();
    //  console.log(listingId);
    
   

 

  // // storage of listings information 
  // const { listing } = useAuthContext()

  // get listing information
//   const getListing = () => { price, artTitle, artSpecs, artType, artDetails, artistName, artistBio } 
//   listingId()

//   useEffect(() =>{
//       const usersListing = async () => {
//       await fetch (`http://localhost:8001/listings/${listingId}`, {method: "GET"})
//       }
//     usersListing()
// }, [])

// // update the listing
// const updateListing = (e) => {
//  e.preventdefault()
//  console.log("save")

//  const put = { price, artTitle, artSpecs, artType, artDetails, artistName, artistBio }
// fetch(`http://localhost:8001/listings/${listingId}`, {
//    method: "PUT",
//    headers: {"Content-Type": "application/json"},
//    body: JSON.stringify(put),
//  }) 

  // const listingId = useParams().listingsId;
  // console.log(listingId);


 return (
    <div className="edit-listing">
      <form className="form-listing__edit" >
  <h4>My Listing </h4>

  <input type="text" placeholder="NZ$" className="text-input--icon" id="edit__price" onChange={(e) => {setPrice (e.target.value)}} />
    <label htmlFor="edit__price" className="input-label--icon" >
    </label>

    <input type="text" placeholder="Artwork title" className="text-input--icon" id="edit__art-title" onChange={(e) => {setArtTitle(e.target.value)}} /> 
    <label htmlFor="edit__art-title" className="input-label--icon" >
    </label>

    <input type="text" placeholder="Artwork specifications" className="text-input--icon" id="edit__art-specs" onChange={(e) => {setArtSpecs(e.target.value)}} /> 
    <label htmlFor="edit__art-specs" className="input-label--icon" >
    </label>

    <input type="text" placeholder="Select art category" className="text-input--icon" id="edit__art-type" onChange={(e) => {setArtType(e.target.value)}} /> 
    <label htmlFor="edit__art-type" className="input-label--icon" >
    </label>

    <input type="text" placeholder="About the artwork" className="text-input--icon" id="edit__art-details" onChange={(e) => {setArtDetails(e.target.value)}} /> 
    <label htmlFor="edit__art-details" className="input-label--icon" >
    </label>

    <input type="text" placeholder="Artist name" className="text-input--icon" id="edit__artist-name" onChange={(e) => {setArtistName(e.target.value)}} /> 
    <label htmlFor="edit__artist-name" className="input-label--icon" >
    </label>

    <input type="text" placeholder="About the artist" className="text-input--icon" id="edit__artist-bio" onChange={(e) => {setArtistBio(e.target.value)}} /> 
    <label htmlFor="edit__artist-bio" className="input-label--icon" >
    </label>

    <input type="text" placeholder="Image update" className="text-input--icon" id="edit__image" onChange={(e) => {setImage(e.target.value)}} /> 
    <label htmlFor="edit__image" className="input-label--icon" >
    </label>

    <input type="text" placeholder="Title of work" className="text-input--icon" id="edit__art-title" onChange={(e) => {setArtTitle(e.target.value)}} /> 
    <label htmlFor="edit__art-title" className="input-label--icon" >
    </label>

    {/* <button className='btn-primary' onClick={updateListing}>Save Changes</button>
  
  <button className='btn-outline' onClick={handleDeleteListing}>Delete Listing</button> */}

 </form>  {/* form ends */}
      <button className="btn-primary" >
   {/* onClick={updateListing}  */}
        Save Changes
      </button>
    </div>
  )

};

export default EditListings;

