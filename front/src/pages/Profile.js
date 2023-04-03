import "./Profile.scss";

import NavProfile from "../components/navigation/ProfileNav";
import EditProfile from "../components/forms/EditProfile";

import { Outlet } from "react-router-dom";

import Media from "react-media"; // add Media

const Profile = () => {
  return (
    <div className="profile">
      {/* --MEDIA QUERY START-- */}
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
      {/* --MEDIA QUERY END-- */}

      {/* <EditProfile /> */}
      {/* Display Profile Edit and Post Edit underneath hide on keyframes  */}
    </div>
  );
};

export default Profile;
