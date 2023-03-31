import "./CreateListing.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CreateListing = () => {
  const [price, setPrice] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artType, setArtType] = useState("");
  const [artDetails, setArtDetails] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistbio] = useState("");

  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const [dropdownActive, setDropdownActive] = useState(false)

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleArtworkTitle = (e) => {
    setArtTitle(e.target.value);
  };

  const handleArtworkSpecs = (e) => {
    setArtSpecs(e.target.value);
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


  // select options for artwork type
  const artTypeArray = ["Paintings", "Sculpture", "Photography", "Prints", "NFTs"]

  const artTypeSelect = artTypeArray.map((option, index) => {
  
    const handleSetArtType = (e) => {
    setArtType(option)
    }

    return (<li key={index} onClick={handleSetArtType} className={artType == option ? "select-input__option--active" : "select-input__option--inactive"} >{option}</li>)
  })


  // upload file javascript

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  
  const handleImageSubmit = async (e) => {
    e.preventDefault()

    let imgB63 = await toBase64(image)
    const file = { file: imgB63}
    
    // const post = { 

    //   price,
    //   artTitle,
    //   artSpecs,
    //   artType,
    //   artDetails,
    //   artistName,
    //   artistBio,
    //   file 
    
    // }

    const ThePost = () => {
      fetch("http://localhost:8001/listings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(file),
      });
    };
    ThePost(imgB63);
    
  }

  const handleImageUpload = async (e) => {
   const fileInput = e.target.files[0]
   setImage(fileInput)

   const imgUrl = URL.createObjectURL(fileInput)

   setImagePreview(imgUrl)


  //  const base64 = await (file)
  //  console.log(base64)

  }



  // Add the stuff
  return (
    <div className="wrapper-upload__art">

      <h3>Upload Iamge</h3>

      <form action="upload-image" onSubmit={handleImageSubmit}>
        <label htmlFor="image">Add Image</label>
        <br />
        <br />
        <input onChange={(e) => handleImageUpload(e)} className="btn btn-outline" type="file" name="image" id="image" accept=".jpeg, .png, .jpg" />
        <button >Upload Image</button>
        <div className="image-placeholder">
          <img src={imagePreview} alt="" />
        </div>

      </form>

      <header className="form-header">
        <p>Add Art</p>
      </header>

      

      <form className="form__upload-art">

      

        <input
          className="text-input"
          placeholder=""
          type="text"
          id="upload-art--price"
          onChange={handlePrice}
        />
        <label htmlFor="upload-art--price" className="text-input__label" id="log-in--password">
          <span>Price</span>
        </label>

        <input
          placeholder=""
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
          placeholder=""
          type="text"
          id="upload-art--art-specs"
          onChange={handleArtworkSpecs}
        />
         <label htmlFor="upload-art--art-specs" className="text-input__label" id="log-in--password">
          <span>Artwork Specs</span>
        </label>

        {/* custoom selector */}
        <div className="select-input" id="upload-art--artwork-type">
          
          <div className={ dropdownActive ? "select-input__button" : "select-input__button"} onClick={() => {setDropdownActive(!dropdownActive)}}>
            <div className="select-input__details">
              <label className="select-input__label" htmlFor="upload-art--artwork-type"><span>Artwork Type</span></label>
              <p className={!artType ? "select-input__value--inactive" : "select-input__value--active" }>{!artType ? "-" : artType }</p>
            </div>
            <span>{ dropdownActive ? < FaChevronUp /> : < FaChevronDown/> }</span>
          </div>

      <div className={dropdownActive ? "select-input__options--active" : "select-input__options--inactive"}>
        <ul>
        {artTypeSelect}
        </ul>
      </div> 

      </div>

        <textarea
          className="text-input"
          name="ArtworkDetails"
          placeholder=""
          id="upload-art--art-details"
          cols="30"
          rows="3"
          onChange={handleArtworkDetails}
        ></textarea>
        <label htmlFor="upload-art--art-details" className="text-area__label" id="log-in--password">
          <span>Artwork Details</span>
        </label>


        <input
          className="text-input"
          placeholder=""
          type="text"
          id="upload-art--artist-name"
          onChange={handleArtistName}
        />
        <label htmlFor="upload-art--art-name" className="text-input__label" id="log-in--password">
          <span>Artist Name</span>
        </label>

        
        <textarea
          name="Artist bio"
          className="text-input"
          placeholder=""
          id="upload-art--artist-details"
          cols="30"
          rows="3"
          onChange={handleArtworkbio}
        ></textarea>
        <label htmlFor="upload-art--artist-details" className="text-area__label" id="log-in--password">
          <span>Artist Bio</span>
        </label>

        <br />
        {/*  */}
        
        {/*  */}
         <br />

        <button onClick={handlePostSubmit} className="btn btn-primary">Publish</button>
        <br />
        <button className="btn btn-outline">Preview</button>
      </form>
    </div>
  );
};


export default CreateListing;


