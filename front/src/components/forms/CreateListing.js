import "./CreateListing.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreateListing = () => {
  const [price, setPrice] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artType, setArttype] = useState("");
  const [artDetails, setArtDetails] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistbio] = useState("");

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleArtworkTitle = (e) => {
    setArtTitle(e.target.value);
  };

  const handleArtworkSpecs = (e) => {
    setArtSpecs(e.target.value);
  };

  const handleArtworkType = (e) => {
    setArttype(e.target.value);
  };

  const handleArtworkDetails = (e) => {
    setArtDetails(e.target.value);
  };

  const handleArtistName = (e) => {
    setArtistName(e.target.value);
  };

  const handleArtworkbio = (e) => {
    setArtistbio(e.target.value);
  };

  const handleUploadImage = (e) => {
  e.preventDefault();

  
  
  }

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const Artpost = {
      price,
      artTitle,
      artSpecs,
      artType,
      artDetails,
      artistName,
      artistBio,
    };
    console.log(Artpost);

    const ThePost = () => {
      fetch("http://localhost:8001/listings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Artpost),
      });
    };
    ThePost(Artpost);
  };


  // Add the stuff
  return (
    <div className="wrapper-upload__art">

      <header className="form-header">
        <p>Add Art</p>
      </header>
      <form className="form__upload-art">

        <input
          className="text-input"
          placeholder="Price"
          type="text"
          id="upload-art--price"
          onChange={handlePrice}
        />
        <label htmlFor="upload-art--price" className="text-input__label" id="log-in--password">
          <span>Price</span>
        </label>


        <input
          placeholder="Artwork Title"
          className="text-input"
          type="text"
          id="upload-art--art-title"
          onChange={handleArtworkTitle}
        />
        <label htmlFor="upload-art--art-title" className="text-input__label" id="log-in--password">
          <span>Artwork Title</span>
        </label>


        <input
          className="text-input"
          placeholder="Artwork Specs"
          type="text"
          id="upload-art--art-specs"
          onChange={handleArtworkSpecs}
        />
         <label htmlFor="upload-art--art-specs" className="text-input__label" id="log-in--password">
          <span>Artwork Specs</span>
        </label>

        {/* custoom selector */}
        <div className="select-input" id="upload-art--artwork-type">
          <div className="select-input__button">
            <label htmlFor="upload-art--artwork-type"><span>Artwork Type</span></label>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z" fill="#2A2E45"/>
              </svg>
            </span>
          </div>


          <div className="select-input__options">
            <ul>
              <li className="select-input__option">Paintings</li>
              <li className="select-input__option">Sculpture</li>
              <li className="select-input__option">Prints</li>
              <li className="select-input__option">Photography</li>
              <li className="select-input__option">Literature</li>
            </ul>
          </div>

        </div>


        {/* <select
          className="select-input"
          name=""
          id="upload-art--art-type"
          placeholder="Art Type"
          onChange={handleArtworkType}
        >
          <option value="">Paintings</option>
          <option value="">Sculpture</option>
          <option value="">Prints</option>
          <option value="">Photography</option>
          <option value="">NFT</option>
          <option value="">Literature</option>
        </select>
        <label htmlFor="upload-art--art-type" className="text-input__label" id="log-in--password">
          <span>Artwork Type</span>
        </label> */}


        <textarea
          className="text-areas"
          name="ArtworkDetails"
          placeholder="Artwork Details"
          id="upload-art--art-details"
          cols="30"
          rows="10"
          onChange={handleArtworkDetails}
        ></textarea>
        <label htmlFor="upload-art--art-details" className="text-input__label" id="log-in--password">
          <span>Artwork Details</span>
        </label>


        <input
          className="Inputs"
          placeholder="ArtistName"
          type="text"
          id="upload-art--artist-name"
          onChange={handleArtistName}
        />
        <label htmlFor="upload-art--art-name" className="text-input__label" id="log-in--password">
          <span>Artist Name</span>
        </label>

        
        <textarea
          name="Artist bio"
          className="text-areas"
          placeholder="Artist Bio"
          id="upload-art--artist-details"
          cols="30"
          rows="10"
          onChange={handleArtworkbio}
        ></textarea>
        <label htmlFor="upload-art--artist-details" className="text-input__label" id="log-in--password">
          <span>Artist Bio</span>
        </label>

        <br />

        <button className="btn btn-outline" onClick={handleUploadImage}>Upload Image</button>
        <div className="image-placeholder"></div>

         <br />
         <br />

        <button onClick={handlePostSubmit} className="btn btn-primary">Publish</button>
        <button className="btn btn-outline">Preview</button>
      </form>
    </div>
  );
};

export default CreateListing;
