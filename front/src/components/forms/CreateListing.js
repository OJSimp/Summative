import "./CreateListing.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreateListing = () => {
  const [price, setPrice] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artType, setArttype] = useState("");
  const [artdetails, setArtDetails] = useState("");
  const [label, setLabel] = useState("");
  const [artistbio, setArtistbio] = useState("");

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

  const handleLabel = (e) => {
    setLabel(e.target.value);
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
      artdetails,
      label,
      artistbio,
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
    <div className="artfeedcontainer">
      <header>
        <h3>Art Feed</h3>
      </header>
      <header className="TheHeader">
        <p>Add Art</p>
      </header>
      <div className="Art-feed-inputs-container">
        <input
          className="Inputs"
          placeholder="Price"
          type="text"
          onChange={handlePrice}
        />
        <input
          placeholder="Artwork Title"
          className="Inputs"
          type="text"
          onChange={handleArtworkTitle}
        />
        <input
          className="Inputs"
          placeholder="Artwork Specs"
          type="text"
          onChange={handleArtworkSpecs}
        />

        <select
          className="Select"
          name=""
          id=""
          placeholder="Art Type"
          onChange={handleArtworkType}
        >
          <option value="">Art type</option>
          <option value="">Paintings</option>
          <option value="">Sculpture</option>
          <option value="">Literature</option>
          <option value="">Architecture</option>
          <option value="">Cinema</option>
          <option value="">Music</option>
          <option value="">Theater</option>
        </select>
        <textarea
          className="text-areas"
          name="ArtworkDetails"
          placeholder="Artwork Details"
          id=""
          cols="30"
          rows="10"
          onChange={handleArtworkDetails}
        ></textarea>
        <input
          className="Inputs"
          placeholder="Label"
          type="text"
          onChange={handleLabel}
        />
        <textarea
          name="Artist bio"
          className="text-areas"
          placeholder="Artist Bio"
          id=""
          cols="30"
          rows="10"
          onChange={handleArtworkbio}
        ></textarea>
        <div className="image"></div>
        <button onClick={handlePostSubmit} className="whitebutton">
          Upload Image
        </button>
        <button className="publish-button">Publish</button>
        <button className="preview-button">Preview</button>
      </div>
    </div>
  );
};

export default CreateListing;
