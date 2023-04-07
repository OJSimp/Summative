import "./YourListings.scss";

import { Link } from "react-router-dom";

import ListingCard from "../components/cards/ListingCard";

import { useState, useEffect } from "react";

import { FaChevronLeft } from "react-icons/fa";

import { useAuthContext } from "../hooks/useAuthContext";
import { useGetUser } from "../hooks/useGetUser";

const YourListings = () => {
  const [listingArray, setListingArray] = useState(null);

  const { user } = useAuthContext();

  const { userDetails, ID } = useGetUser();

  const editListingsPage = "edit-listings";

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      userDetails(userEmail);
    }
  }, [user]);

  useEffect(() => {
    if (ID) {
      const returnListingData = async () => {
        const resposne = await fetch(
          `http://localhost:8001/your-listings/${ID}`,
          { method: "GET" }
        );
        const data = await resposne.json();
        const dataArray = data;
        console.log(dataArray);
        setListingArray(dataArray);
      };
      returnListingData();
    }
  }, [ID]);

  return (
    <div>
      <div className="navigation-header">
        <Link to="/profile">
          <FaChevronLeft />
          <p>My Profile</p>
        </Link>
      </div>
      <div className="card-grid--profile">
        {listingArray ? (
          <ListingCard listings={listingArray} link={editListingsPage} />
        ) : null}
      </div>
    </div>
  );
};

export default YourListings;
