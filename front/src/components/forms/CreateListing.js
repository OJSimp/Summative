import "./CreateListing.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreateListing = () => {
  const [price, setPriceNumber] = useState("");
  const [artwork, setArtworkTitle] = useState("");
  const [ArtworkSpecs, setArtworkSpecs] = useState("");
  const [ArtworkType, setArtworktype] = useState("");
  const [ArtworkDetails, setArtworkDetails] = useState("");
  const [label, setLabel] = useState("");
  const [Artistbio, setArtistbio] = useState("");

  const handlePrice = (e) => {
    setPriceNumber(e.target.value);
  };
  const handleArtworkTitle = (e) => {
    setArtworkTitle(e.target.value);
  };

  const handleArtworkSpecs = (e) => {
    setArtworkSpecs(e.target.value);
  };

  const handleArtworkType = (e) => {
    setArtworktype(e.target.value);
  };

  const handleArtworkDetails = (e) => {
    setArtworkDetails(e.target.value);
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
      artwork,
      ArtworkSpecs,
      ArtworkType,
      ArtworkDetails,
      label,
      Artistbio,
    };
    console.log(Artpost);

    const ThePost = () => {
      fetch("http://localhost:8001/", {
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
      <div className="Artfeedinputscontainer">
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
        <form action="">
          <select
            className="Select"
            name=""
            id=""
            onChange={handleArtworkSpecs}
          >
            <option value="">Artwork type</option>
          </select>
        </form>
        <textarea
          className="textareas"
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
          className="textareas"
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
        <button className="naveybutton">Publish</button>
        <button className="whitebutton">Preview</button>
      </div>
    </div>
  );
};

export default CreateListing;
