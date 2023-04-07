import "./CreateListing.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../navigation/ProgressBar";
import FormHeader from "../headers/FormHeader";

import { useGetUser } from "../../hooks/useGetUser";
import { useAuthContext } from "../../hooks/useAuthContext";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CreateListing = () => {
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

  // Error handling
  const [error, setError] = useState("");
  // Errors for inputs
  const [errorPrice, setErrorPrice] = useState(null);
  const [errorArtTitle, setErrorArtTitle] = useState(null);
  const [errorArtSpecs, setErrorArtSpecs] = useState(null);
  const [errorArtType, setErrorArtType] = useState(null);
  const [errorArtDetails, setErrorArtDetails] = useState(null);
  const [errorArtistName, setErrorArtistName] = useState(null);
  const [errorArtistBio, setErrorArtistBio] = useState(null);

  // Form navigation

  const [togglePage, setTogglePage] = useState(1);
  const [progressFilled, setprogressFilled] = useState(0);
  const [header, setHeader] = useState("Add Art");

  // navigate to search
  const navigate = useNavigate();

  // check if user is logged in from token
  const { user } = useAuthContext();

  // call get user details
  const { userDetails, ID } = useGetUser();

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      userDetails(userEmail);
    }
  }, [user]);

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

  // Submit POST request - Create Art Listing
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // prep image for post request
    let imgB63 = await toBase64(image);
    const file = { file: imgB63 };

    // set a creation date
    const creationDate = new Date();

    // set the status of the listing to active - only show active - can pause listings later in dev
    const status = "active";
    const creatorId = ID;

    const post = {
      creatorId,
      price,
      artTitle,
      artSpecs,
      artType,
      artDetails,
      artistName,
      artistBio,
      creationDate,
      status,
      file,
    };

    // POST data to mongoDB -- Zee's code untouched
    // basic logic/ error handling for POST request

    const ThePost = async () => {
      const resposne = await fetch("http://localhost:8001/listings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      const json = await resposne.json();

      if (!resposne.ok) {
        setError("Please fill all information correctly");
        // set the errors to inform the user
        setErrorPrice(json.price.kind);
        setErrorArtTitle(json.artTitle.kind);
        setErrorArtType(json.artType.kind);
        setErrorArtSpecs(json.artSpecs.kind);
        setErrorArtDetails(json.artDetails.kind);
        setErrorArtistName(json.artistName.kind);
        setErrorArtistBio(json.artistBio.kind);
      }
      if (resposne.ok) {
        // set all errors to null
        setErrorPrice(null);
        setErrorArtTitle(null);
        setErrorArtType(null);
        setErrorArtSpecs(null);
        setErrorArtDetails(null);
        setErrorArtistName(null);
        setErrorArtistBio(null);
        // go to search page if everything is okay
        navigate("/search");
      }
    };

    ThePost();
  };

  // navigate between sections of form
  const handleSectionNavigate = (index) => {
    setTogglePage(index);

    if (index === 1) {
      setprogressFilled(0);
      // setHeader("About the art");
    }
    if (index === 2) {
      setprogressFilled(50);
      // setHeader("About the Artsit");
    }
    if (index === 3) {
      setprogressFilled(100);
      // setHeader("Upload an image");
    }
  };

  return (
    <div className="wrapper-upload__art">
      <FormHeader header={header} />

      <form className="form__upload-art" onSubmit={handlePostSubmit}>
        <ProgressBar progress={progressFilled} />
        {/* SECTION ONE */}
        <div
          className={
            togglePage === 1
              ? "upload-art__section--active"
              : "upload-art__section--inactive"
          }
        >
          {/* Price */}
          <input
            className={errorPrice ? "text-input--error" : "text-input"}
            placeholder=""
            type="text"
            id="upload-art--price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label
            htmlFor="upload-art--price"
            className={
              errorPrice ? "text-input__label--error" : "text-input__label"
            }
            id="log-in--password"
          >
            <span>Price</span>
            {errorPrice ? (
              <span className="text-error"> Price is {errorPrice}</span>
            ) : null}
          </label>

          {/* Art Title */}
          <input
            placeholder=""
            className="text-input"
            type="text"
            id="upload-art--art-title"
            onChange={(e) => setArtTitle(e.target.value)}
          />
          <label
            htmlFor="upload-art--art-title"
            className="text-input__label"
            id="log-in--password"
          >
            <span>Artwork Title</span>
          </label>

          {/* Art Specs */}
          <input
            className="text-input"
            placeholder=""
            type="text"
            id="upload-art--art-specs"
            onChange={(e) => setArtSpecs(e.target.value)}
          />
          <label
            htmlFor="upload-art--art-specs"
            className="text-input__label"
            id="log-in--password"
          >
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
              <span>
                {dropdownActive ? <FaChevronUp /> : <FaChevronDown />}
              </span>
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

          {/* Artwork Details */}
          <textarea
            className="text-input"
            name="ArtworkDetails"
            placeholder=""
            id="upload-art--art-details"
            cols="30"
            rows="3"
            onChange={(e) => setArtDetails(e.target.value)}
          ></textarea>
          <label
            htmlFor="upload-art--art-details"
            className="text-area__label"
            id="log-in--password"
          >
            <span>Artwork Details</span>
          </label>

          <div className="btn-outline" onClick={() => handleSectionNavigate(2)}>
            Next
          </div>
        </div>

        {/* SECTION TWO */}
        <div
          className={
            togglePage === 2
              ? "upload-art__section--active"
              : "upload-art__section--inactive"
          }
        >
          {/* Artist Name */}
          <input
            className="text-input"
            placeholder=""
            type="text"
            id="upload-art--artist-name"
            onChange={(e) => setArtistName(e.target.value)}
          />
          <label
            htmlFor="upload-art--art-name"
            className="text-input__label"
            id="log-in--password"
          >
            <span>Artist Name</span>
          </label>

          {/* Artist Details */}
          <textarea
            name="Artist bio"
            className="text-input"
            placeholder=""
            id="upload-art--artist-details"
            cols="30"
            rows="3"
            onChange={(e) => setArtistBio(e.target.value)}
          ></textarea>
          <label
            htmlFor="upload-art--artist-details"
            className="text-area__label"
            id="log-in--password"
          >
            <span>Artist Bio</span>
          </label>

          <div className="upload-art__navigation">
            <div
              className="btn-outline"
              onClick={() => handleSectionNavigate(1)}
            >
              {" "}
              Back{" "}
            </div>
            <div
              className="btn-outline"
              onClick={() => handleSectionNavigate(3)}
            >
              Next
            </div>
          </div>
        </div>

        {/* SECTION THREE */}

        {/* Upload Images */}
        <div
          className={
            togglePage === 3
              ? "upload-art__section--active"
              : "upload-art__section--inactive"
          }
        >
          {/* upload images section */}
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
            {image ? <img src={imagePreview} alt="" /> : null}
          </div>
          {error ? <span>{error}</span> : null}
          <div className="upload-art__navigation">
            <div
              className="btn-outline"
              onClick={() => handleSectionNavigate(2)}
            >
              Back
            </div>
            <button className="btn-primary">Publish</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
