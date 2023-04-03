import "./SearchModal.scss";

import { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const SearchModal = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("hello");
  const [showArtType, setShowArtType] = useState(false);

  return (
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
            <h2>Search by - {}</h2>
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
          {/* conditonal rendering the search options */}
          {/* when show art type is true pick filter by art type*/}
          {showArtType ? (
            <div className="search-modal__body--art-type">
              <h3>Art Type</h3>
              <button
                onClick={() => {
                  setShowArtType(false);
                }}
              >
                back
              </button>
            </div>
          ) : (
            <div className="search-modal__body">
              <div className="nav-btn--search">
                <h3>Price</h3>
                <span className="btn-icon">
                  <BiChevronRight />
                </span>
              </div>
              <div
                className="nav-btn--search"
                onClick={() => {
                  setShowArtType(true);
                }}
              >
                <h3>Art Type</h3>
                <span className="btn-icon">
                  <BiChevronRight />
                </span>
              </div>
              <div className="nav-btn--search">
                <h3>Artist</h3>
                <span className="btn-icon">
                  <BiChevronRight />
                </span>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default SearchModal;
