import './EditListings.scss';

import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom"

import { useEffect, useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";


const EditListings = () => {

  const [price, setPrice] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artType, setArtType] = useState("");
  const [artDetails, setArtDetails] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [image, setImage] = useState("");

    // storage of listing info
    const { listing } = useAuthContext()
   
    // pull the id from the URL
    const listingId = useParams().listingsId;

    // fetch listing details
  useEffect(() => {

  
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
     setImage(details.image);

    //  console.log(details)
     };
   
     listingDetails();
    }, [])


    const handleDeleteListing = async() => {

       await fetch(
        `http://localhost:8001/listings/${listingId}`, 
        { method: "DELETE" }
        );
    }
    


// update the listing – List Artwork
const updateListing = () => {
 console.log("save")

 const put = { price, artTitle, artSpecs, artType, artDetails, artistName, artistBio }
fetch(`http://localhost:8001/listings/${listingId}`, {
   method: "PUT",
   headers: {"Content-Type": "application/json"},
   body: JSON.stringify(put),
 }) 

}



 return (
    <div className="edit-listing">
      <div className="form-listing__edit" >
  <h4>My Listing </h4>

  <input value={price
  } type="text" placeholder="NZ$" className="text-input" id="edit__price" onChange={(e) => {setPrice (e.target.value)}} />
    <label htmlFor="edit__price" className="input-label__label" >
      <span>NZD</span>
    </label>

    <input value={artTitle}  type="text" placeholder="Artwork title" className="text-input--icon" id="edit__art-title" onChange={(e) => {setArtTitle(e.target.value)}} /> 
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

  

    <button className="btn-primary" onClick={updateListing}>  List Artwork </button>
  
    <button className='btn-outline' onClick={handleDeleteListing}>
    
    Delete Listing
    </button> 

  </div>  {/* form ends */}
  
      </div>
    )
  }

export default EditListings;

