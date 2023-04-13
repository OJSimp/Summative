import "./EditListings.scss";

import { useParams, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormHeader from "../headers/FormHeader";

import { useAuthContext } from "../../hooks/useAuthContext";

import { FaChevronDown, FaChevronUp, FaChevronLeft } from "react-icons/fa";

const EditListings = () => {
  const [price, setPrice] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artType, setArtType] = useState("");
  const [artDetails, setArtDetails] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [image, setImage] = useState(null);

  const [imagePreview, setImagePreview] = useState(null);

  const [dropdownActive, setDropdownActive] = useState(false);

  // pull the id from the URL
  const listingId = useParams().listingsId;

  const navigate = useNavigate();

  // fetch listing details
  useEffect(() => {
    const listingDetails = async () => {
      const response = await fetch(
        `http://localhost:8001/listings/${listingId}`,
        { method: "GET" }
      );

      const details = await response.json();

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
  }, []);

  const handleDeleteListing = async () => {
    await fetch(`http://localhost:8001/listings/${listingId}`, {
      method: "DELETE",
    });
    navigate("/search");
  };

  // update the listing – List Artwork
  const updateListing = async () => {
    // prep image for post request
    let imgB63 = await toBase64(image);
    const file = { file: imgB63 };

    console.log("save");

    const put = {
      price,
      artTitle,
      artSpecs,
      artType,
      artDetails,
      artistName,
      artistBio,
      file,
    };
    fetch(`http://localhost:8001/listings/${listingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(put),
    });
    navigate("/search");
  };

  // CUSTOM SELECTOR
  // select options for artwork type
  const artTypeArray = [
    "Paintings",
    "Sculpture",
    "Photography",
    "Prints",
    "NFTs",
  ];
  // Map options to custom selector
  const artTypeSelect = artTypeArray.map((option, index) => {
    const handleSetArtType = (e) => {
      setArtType(option);
    };
    return (
      <li
        key={index}
        onClick={handleSetArtType}
        className={
          artType == option
            ? "select-input__option--active"
            : "select-input__option--inactive"
        }
      >
        {option}
      </li>
    );
  });

  // MAGIC FUNCTION - turns file to base64 so monboDB can read
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // upload image
  const handleImageUpload = async (e) => {
    const fileInput = e.target.files[0];
    setImage(fileInput);

    const imgUrl = URL.createObjectURL(fileInput);

    setImagePreview(imgUrl);
  };

  return (
    <div className="edit-listing">
      <div className="navigation-header">
        <Link to="/profile/edit-listings">
          <FaChevronLeft />
          <p>My Profile</p>
        </Link>
      </div>
      <FormHeader header="Edit Your Listing" />
      <div className="form-listing__edit">
        <input
          value={price}
          type="text"
          placeholder="NZ$"
          className="text-input--icon"
          id="edit__price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label htmlFor="edit__price" className="text-input__label">
          <span>NZD</span>
        </label>

        <input
          value={artTitle}
          type="text"
          placeholder="Artwork title"
          className="text-input--icon"
          id="edit__art-title"
          onChange={(e) => {
            setArtTitle(e.target.value);
          }}
        />
        <label htmlFor="edit__art-title" className="text-input__label">
          <span>Art Title</span>
        </label>

        <input
          value={artSpecs}
          type="text"
          placeholder="Artwork specifications"
          className="text-input--icon"
          id="edit__art-specs"
          onChange={(e) => {
            setArtSpecs(e.target.value);
          }}
        />
        <label htmlFor="edit__art-specs" className="text-input__label">
          <span>Artwork Specs</span>
        </label>

        {/* Art Type - custom selector */}
        <div className="select-input" id="upload-art--artwork-type">
          {/* dropdown button */}
          <div
            className={
              dropdownActive
                ? "select-input__btn--active"
                : "select-input__btn--inactive"
            }
            onClick={() => {
              setDropdownActive(!dropdownActive);
            }}
          >
            <div className="select-input__details">
              <label
                className="select-input__label"
                htmlFor="upload-art--artwork-type"
              >
                <span>Artwork Type</span>
              </label>
              <p
                className={
                  !artType
                    ? "select-input__value--inactive"
                    : "select-input__value--active"
                }
              >
                {!artType ? "-" : artType}
              </p>
            </div>
            <span>{dropdownActive ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {/* the dropdown */}
          <div
            className={
              dropdownActive
                ? "select-input__options--active"
                : "select-input__options--inactive"
            }
          >
            <ul>{artTypeSelect}</ul>
          </div>
        </div>

        <input
          value={artDetails}
          type="text"
          placeholder="About the artwork"
          className="text-input--icon"
          id="edit__art-details"
          onChange={(e) => {
            setArtDetails(e.target.value);
          }}
        />
        <label htmlFor="edit__art-details" className="text-input__label">
          <span>About The Art</span>
        </label>

        <input
          type="text"
          value={artistName}
          placeholder="Artist name"
          className="text-input--icon"
          id="edit__artist-name"
          onChange={(e) => {
            setArtistName(e.target.value);
          }}
        />
        <label htmlFor="edit__artist-name" className="text-input__label">
          <span>Artist Name</span>
        </label>

        <input
          type="text"
          value={artistBio}
          placeholder="About the artist"
          className="text-input--icon"
          id="edit__artist-bio"
          onChange={(e) => {
            setArtistBio(e.target.value);
          }}
        />
        <label htmlFor="edit__artist-bio" className="text-input__label">
          <span>About Artist</span>
        </label>

        <label className="btn-outline" htmlFor="image">
          Add Image
        </label>
        <input
          onChange={(e) => handleImageUpload(e)}
          className="hide"
          type="file"
          name="image"
          id="image"
          accept=".jpeg, .png, .jpg"
        />
        <div className="image-placeholder">
          {/* conditional rendering of placeholder */}
          {image ? <img src={image} alt="" /> : null}
          {imagePreview ? <img src={imagePreview} alt="" /> : null}
        </div>

        <button className="btn-primary" onClick={updateListing}>
          {" "}
          List Artwork{" "}
        </button>

        <button className="btn-outline" onClick={handleDeleteListing}>
          Delete Listing
        </button>
      </div>{" "}
      {/* form ends */}
    </div>
  );
};

export default EditListings;
