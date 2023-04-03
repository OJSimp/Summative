import "./SearchModal.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

import FormHeader from "../headers/FormHeader";

const SearchModal = (props) => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showArtType, setShowArtType] = useState(false);

  const navigate = useNavigate();

  const artTypeObject = [
    "Paintings",
    "Photography",
    "Sculpture",
    "NFT’s",
    "Prints",
  ];

  const handleSearchValue = (e) => {
    setSearchValue(e.target.id);
    // run search
    // const searchValue = e.target.id;
    const searchValue = e.target.id;
    props.searchModal(searchValue);
  };

  const artTypes = artTypeObject.map((types, index) => {
    return (
      <p
        className="btn-filter"
        key={index}
        id={types}
        onClick={handleSearchValue}
      >
        {types}
        <BiChevronRight />
      </p>
    );
  });

  return (
    searchValue,
    (
      <>
        {/* button to activate modal */}
        <button
          className="btn-search"
          onClick={() => {
            setSearchModal(true);
          }}
        >
          Search
          <span>
            <AiOutlineSearch />
          </span>
        </button>

        {/* search modal only shown when showSearchModal set to true*/}
        {searchModal ? (
          <div className="search-modal">
            <div className="search-modal__header">
              <div className="search-modal__header-title">
                <h2>Search by</h2>
                <button
                  className="btn-icon"
                  onClick={() => {
                    setSearchModal(false);
                    setShowArtType(false);
                  }}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="search-modal__header-input">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <span>
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
            <div className="seach-modal__body">
              <div className="search-modal__art-type">
                <FormHeader header="Art Type" />
                {artTypes}
              </div>
              <div className="search-modal__ft-artist">
                <FormHeader header="Featured Artists" />
              </div>
            </div>

            {/* conditonal rendering the search options */}
            {/* when show art type is true pick filter by art type*/}
          </div>
        ) : null}
      </>
    )
  );
};

export default SearchModal;
