import "./Search.scss";

import { useState, useEffect } from "react";

import ListingCard from "../components/cards/ListingCard";
import SearchModal from "../components/modals/SearchModal";
import SearchFilter from "../components/forms/SearchFliters";

import { useAuthContext } from "../hooks/useAuthContext";

const Search = () => {
  const [listingArray, setListingArray] = useState(null);
  const { dispatch } = useAuthContext();

  const editListingsPage = "listing-details";

  // log in user if there is a user in local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  // on page load get all data

  useEffect(() => {
    const getAllData = async () => {
      const resposne = await fetch(`http://localhost:8001/listings/`, {
        method: "GET",
      });
      const data = await resposne.json();
      const dataArray = data;
      setListingArray(dataArray);
    };

    getAllData();
  }, []);

  // take the search value taken from the modal
  const searchModal = (artType) => {
    // re-run the get request once information received
    const getSearchData = async () => {
      const response = await fetch(
        `http://localhost:8001/searchlistings/${artType}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      const dataArray = data;
      setListingArray(dataArray);
    };
    getSearchData();
  };

  const priceFilter = async (minValue, maxValue) => {
    console.log(minValue, maxValue);
    const response = await fetch(
      `http://localhost:8001/searchlistings/${minValue}/${maxValue}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    const dataArray = data;
    setListingArray(dataArray);
  };

  return (
    <div className="search__page">
      <div className="search__header">
        <SearchFilter searchModal={searchModal} />
        <SearchModal searchModal={searchModal} priceFilter={priceFilter} />
      </div>
      <div className="listing-card__gird">
        {listingArray ? (
          <ListingCard listings={listingArray} link={editListingsPage} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
