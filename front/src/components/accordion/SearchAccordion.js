import { useState } from "react";

import { BiChevronRight, BiChevronDown } from "react-icons/bi";

const SearchAccordion = ({
  setSearchModal,
  setPriceMin,
  setPriceMax,
  handleMinMaxPrice,
}) => {
  // capture the input values
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  return (
    <>
      <div className="search-accordion__header">
        <h4>Price</h4>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setMinValue(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setMaxValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // only set the min and max search values onClick
            // setPriceMin(minValue);
            // setPriceMax(maxValue);
            setSearchModal(false);
            handleMinMaxPrice(maxValue, minValue);
          }}
        >
          GO
        </button>
      </div>
    </>
  );
};

export default SearchAccordion;
