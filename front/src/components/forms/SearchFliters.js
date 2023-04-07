import "./SearchFilters.scss";

import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

import SearchAccordion from "../accordion/SearchAccordion";

const SearchFilter = (props) => {
  const [artType, setArtType] = useState("");

  const artTypeObject = [
    "Paintings",
    "Photography",
    "Sculpture",
    "NFTs",
    "Prints",
  ];
  const handleMinMaxPrice = (minValue, maxValue) => {
    props.priceFilter(minValue, maxValue);
  };

  const handleArtType = (e) => {
    setArtType(e.target.id);
    // run search
    // const searchValue = e.target.id;
    const artType = e.target.id;
    props.searchModal(artType);
  };

  const artTypes = artTypeObject.map((types, index) => {
    return (
      <p className="btn-filter" key={index} id={types} onClick={handleArtType}>
        {types}
        <BiChevronRight />
      </p>
    );
  });

  return (
    <>
      {/* search modal only shown when showSearchModal set to true*/}
      <div className="search-filter">
        <div className="seach-modal__body">
          <div className="search-modal__art-type">
            <div className="search-accordion">
              <h4>Art Type</h4>
            </div>
            {artTypes}
          </div>
          <div className="search-modal__ft-artist">
            <SearchAccordion handleMinMaxPrice={handleMinMaxPrice} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
