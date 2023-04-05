import "./Profile.scss";

import NavProfile from "../components/navigation/ProfileNav";

import { Outlet } from "react-router-dom";

import Media from "react-media"; // add Media

const Profile = () => {
  return (
    <div className="profile">
      {/* --MEDIA QUERY START-- */}
      {/* If desktop display porfile information next to the nav */}
      {/* If mobile navigate to a new page when click on nav*/}
      <Media query="(max-width: 599px)">
        {(matches) =>
          matches ? (
            <div className="mobile">
              <NavProfile />
            </div>
          ) : (
            <div className="desktop">
              <NavProfile />
              {/* Outlet displays information next to nav profile rather than nav to new page */}
              <Outlet />
            </div>
          )
        }
      </Media>
      {/* --MEDIA QUERY END-- */}
    </div>
  );
};

export default Profile;
