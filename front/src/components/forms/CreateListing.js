import "./CreateListing.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  const [creatorId, setCreatorId] = useState("");

  const [imagePreview, setImagePreview] = useState(null);

  const [dropdownActive, setDropdownActive] = useState(false);

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

  // select options for artwork type
  const artTypeArray = [
    "Paintings",
    "Sculpture",
    "Photography",
    "Prints",
    "NFTs",
  ];

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

  // upload file javascript

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // prep image for post request
    let imgB63 = await toBase64(image);
    const file = { file: imgB63 };

    // set a creation date
    const creationDate = new Date();

    // set the status of the listing to active
    const status = "active";

    setCreatorId(ID);
    console.log(ID);
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

    const ThePost = () => {
      fetch("http://localhost:8001/listings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
    };

    ThePost();

    navigate("/search");
  };

  // upload image
  const handleImageUpload = async (e) => {
    const fileInput = e.target.files[0];
    setImage(fileInput);

    const imgUrl = URL.createObjectURL(fileInput);

    setImagePreview(imgUrl);
  };

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

  // Add the stuff
  return (
    <div className="wrapper-upload__art">
      <FormHeader header={header} />

      <form className="form__upload-art" onSubmit={handlePostSubmit}>
        <ProgressBar progress={progressFilled} />
        {/* Section ONE */}
        <div
          className={
            togglePage === 1
              ? "upload-art__section--active"
              : "upload-art__section--inactive"
          }
        >
          {/* Price */}
          <input
            className="text-input"
            placeholder=""
            type="text"
            id="upload-art--price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label
            htmlFor="upload-art--price"
            className="text-input__label"
            id="log-in--password"
          >
            <span>Price</span>
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

        {/* Section TWO */}
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

        {/* Section THREE */}

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
