import "./Accordion.scss";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

const Accordion = (props) => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    // using index to target individual accordions by giving them a value

    if (open == index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <>
      <div
        className="accordion"
        onClick={() => {
          handleToggle(props.index);
        }}
      >
        <div className="accordion__header">
          <h4>{props.heading}</h4>
          <span>
            {open == props.index ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>

        <div
          className={
            open == props.index
              ? "accordion__content accordion__content--active"
              : "accordion__content accordion__content--inactive"
          }
        >
          {/* If there are subdetails return header Art Specs*/}

          {props.artType ? (
            <p>
              <span>Art Type: </span>
              {props.artType}
            </p>
          ) : null}
          {props.artSpecs ? (
            <p>
              <span>Art Specs: </span>
              {props.artSpecs}
            </p>
          ) : null}

          <p>{props.details}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
