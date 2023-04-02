import "./Profile.scss";

import NavProfile from "../components/navigation/ProfileNav";

import { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";

import Media from "react-media"; // add Media

const Profile = () => {
  return (
    <div className="profile">
      {/* Insert header here */}

      <Media query="(max-width: 599px)">
        {(matches) =>
          matches ? (
            <div className="mobile">
              <NavProfile />
            </div>
          ) : (
            <div className="desktop">
              <NavProfile />

              <Outlet />
            </div>
          )
        }
      </Media>

      {/* Display Profile Edit and Post Edit underneath hide on keyframes  */}
    </div>
  );
};

export default Profile;
