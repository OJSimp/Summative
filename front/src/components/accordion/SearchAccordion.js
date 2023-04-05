import { useState } from "react";

import { BiChevronRight, BiChevronDown } from "react-icons/bi";

const SearchAccordion = ({
  setSearchModal,
  setSearchValue,
  setPriceMin,
  setPriceMax,
}) => {
  const [minPrice, setMinPrice] = useState("");

  console.log(minPrice);

  return (
    <>
      <div className="search-accordion__header">
        <h4>Price</h4>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setPriceMin(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setPriceMax(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setSearchModal(false);
          }}
        >
          GO
        </button>
      </div>
    </>
  );
};

export default SearchAccordion;
