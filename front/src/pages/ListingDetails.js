import "./ListingDetails.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUser } from "../hooks/useGetUser";
import { useAuthContext } from "../hooks/useAuthContext";

import Accordion from "../components/accordion/Accordion";
import EditListingPage from "../components/forms/EditListings";

import ListingComments from "../components/cards/ListingComment";
import FormHeader from "../components/headers/FormHeader";

import { AiOutlineSend } from "react-icons/ai";

const ListingDetials = () => {
  const [commentDetails, setCommentDetails] = useState("");

  const [artDetails, setArtDetails] = useState("");
  const [artSpecs, setArtSpecs] = useState("");
  const [artTitle, setArtTitle] = useState("");
  const [artType, setArtType] = useState("");
  const [artistBio, setArtistBio] = useState("");
  const [artistName, setArtistName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const [commentsArray, setCommentsArray] = useState(null);
  const [commentsError, setCommentsError] = useState("");

  const [creatorId, setCreatorId] = useState("");

  // check if user is logged in from token
  const { user } = useAuthContext();

  // call get user details
  const { userDetails, ID, firstName, lastName } = useGetUser();

  // pull the id from the URL
  const listingId = useParams().listingsId;

  // check if there is a user logged in that their data is stored

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      userDetails(userEmail);
    } else {
      console.log("No use is logged in");
    }
  }, [user]);

  // load data once on page load

  useEffect(() => {
    listingDetails();
  }, []);

  // get listing details

  const listingDetails = async () => {
    const resposne = await fetch(
      `http://localhost:8001/listings/${listingId}`,
      { method: "GET" }
    );
    const details = await resposne.json();

    setCommentsArray(details.comments);

    setArtDetails(details.artDetails);
    setArtSpecs(details.artSpecs);
    setArtTitle(details.artTitle);
    setArtType(details.artType);
    setArtistBio(details.artistBio);
    setArtistName(details.artistName);
    setPrice(details.price);
    setStatus(details.status);
    setImage(details.image);

    setCreatorId(details.creatorId);
  };

  // adds comment to listing

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!user) {
      setCommentsError("Log in to comment on this post");
    }
    if (user) {
      // If there is comment data
      if (commentDetails) {
        const postArray = {
          creatorId: ID,
          firstName: firstName,
          lastName: lastName,
          details: commentDetails,
        };

        const putComment = async () => {
          const resposne = await fetch(
            `http://localhost:8001/listings/${listingId}/comments`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(postArray),
            }
          );
          const data = await resposne.json();
          console.log(data);
          // reload data after PUT request is fired
          listingDetails();
        };
        putComment(postArray);

        // If there is no comment data
      }
      if (!commentDetails) {
        setCommentsError("Please add a comment");
      }
    }

    // clear the input aftter PUT request
    setCommentDetails("");
  };

  return (
    <div className="listing-details">
      <img className=" listing-details__img" src={image} alt="" />

      <div className="listing-details__info">
        <div className="listing-details__container listing-details__header">
          <h3>{artTitle}</h3>
          <p>
            <span>Artist: </span>
            {artistName}
          </p>
          <p>
            <span>Price: </span>
            {price}
          </p>
        </div>
        <div className="listing-details__container listing-details__buttons">
          <Link className="btn-primary" to="/checkout">
            Purcahse Artwork
          </Link>
          <button className="btn-outline">Add To Cart</button>
        </div>

        <Accordion
          details={artDetails}
          artType={artType}
          artSpecs={artSpecs}
          heading="Artwork Details"
          index="0"
        />

        <Accordion details={artistBio} heading="Artist Details" index="1" />

        <div className="listing-details__comments">
          <FormHeader header={"Comments"} />
          {commentsArray ? (
            <ListingComments
              listingId={listingId}
              comments={commentsArray}
              id={ID}
              reloadData={listingDetails}
            />
          ) : null}
          <form className="form--add-comments" onSubmit={handleAddComment}>
            <textarea
              className={commentsError ? "text-input--error" : "text-input"}
              name=""
              id="comment-input"
              cols="30"
              rows="3"
              value={commentDetails}
              onChange={(e) => setCommentDetails(e.target.value)}
            />
            <span className="text-error">{commentsError}</span>
            <label className="text-input__label" htmlFor="comment-input">
              Add Comment
            </label>
            <button className="btn-primary">
              <AiOutlineSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListingDetials;
