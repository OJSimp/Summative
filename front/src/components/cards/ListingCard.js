import "./ListingCard.scss";

import { Link, Outlet, useNavigate } from "react-router-dom";

// import palceHolderImg from "../../../public/"

const ListingCard = (props) => {
  const navigate = useNavigate();

  const listingArray = props.listings;
  const cardNavigation = props.link;

  const listingCards = listingArray.map((listing, index) => {
    const navigateListingDetails = () => {
      navigate(`/${cardNavigation}/${listing._id}`);
    };

    return (
      <div key={listing._id} className="card--listing">
        <img
          className="card--listing__image"
          src={listing.image}
          alt="placeholder-image"
        />
        <div
          className="card--listing__details"
          onClick={navigateListingDetails}
        >
          <div className="card--listing__header">
            <h4 className="card--listing__font">{listing.artTitle}</h4>
            <h4 className="card--listing__font">{listing.price}</h4>
          </div>

          <div className="card--listing__footer">
            <p>{listing.artistName}</p>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
                  fill="#2A2E45"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return <>{listingCards}</>;
};

export default ListingCard;
