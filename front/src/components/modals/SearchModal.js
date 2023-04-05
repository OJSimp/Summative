import "./SearchModal.scss";

import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

import SearchAccordion from "../accordion/SearchAccordion";

const SearchModal = (props) => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showArtType, setShowArtType] = useState(false);
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);

  const artTypeObject = [
    "Paintings",
    "Photography",
    "Sculpture",
    "NFTs",
    "Prints",
  ];

  const handleSearchValue = (e) => {
    setSearchValue(e.target.id);
    // run search
    // const searchValue = e.target.id;
    const searchValue = e.target.id;
    props.searchModal(searchValue);
    setSearchModal(false);
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
                  <MdOutlineClose />
                </button>
              </div>
              <div className="search-modal__header-input">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <span className="input-icon">
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
            <div className="seach-modal__body">
              <div className="search-modal__art-type">
                <div className="search-accordion">
                  <h4>Art Type</h4>
                  <span>
                    <BiChevronDown />
                  </span>
                </div>
                {artTypes}
              </div>
              <div className="search-modal__ft-artist">
                <SearchAccordion
                  setSearchModal={setSearchModal}
                  setSearchValue={setSearchValue}
                  setPriceMin={setPriceMin}
                  setPriceMax={setPriceMax}
                />
              </div>
            </div>
          </div>
        ) : null}
      </>
    )
  );
};

export default SearchModal;
