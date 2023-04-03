import "./Search.scss";

import { useState, useEffect } from "react";

import ListingCard from "../components/cards/ListingCard";
import SearchModal from "../components/modals/SearchModal";

const Search = () => {
  const [listingArray, setListingArray] = useState(null);

  const [searchValue, setSearchValue] = useState(null);

  const editListingsPage = "listing-details";

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
  const searchModal = (searchValue) => {
    console.log(searchValue);
    setSearchValue(searchValue);
    // re-run the get request once information received
    const getSearchData = async () => {
      const response = await fetch(
        `http://localhost:8001/searchlistings/${searchValue}`,
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

  return (
    <div className="search__page">
      <div className="search__header">
        <SearchModal searchModal={searchModal} />
      </div>
      {listingArray ? (
        <ListingCard listings={listingArray} link={editListingsPage} />
      ) : null}
    </div>
  );
};

export default Search;
