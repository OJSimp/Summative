import "./ProfileNav.scss";

import { useEffect } from "react";

import { useLogout } from "../../hooks/useLogOut";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGetUser } from "../../hooks/useGetUser";

import { BiChevronRight } from "react-icons/bi";

import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  // check if user is logged in from token
  const { user } = useAuthContext();

  // call log out function from userLogOut - hook
  const { logout } = useLogout();

  // call get user details
  const { userDetails, firstName } = useGetUser();

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      // once there is a user get their information from server
      userDetails(userEmail);
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div>
          <div className="nav-profile">
            <div className="profile__details">
              <h2>
                My Profile - {firstName}{" "}
                {/* Zee Insert your Get Request here for name*/}
              </h2>
              {user && <p>{user.email}</p>}
            </div>

            <NavLink
              to="edit-profile"
              className={({ isActive }) =>
                isActive
                  ? "nav-btn__profile nav-btn__profile--active"
                  : "nav-btn__profile nav-btn__profile--inactive"
              }
            >
              <h3>Edit Profile</h3>
              <span className="right-cheveron">
                <span className="btn-icon">
                  <BiChevronRight />
                </span>
              </span>
            </NavLink>

            <NavLink
              to="edit-listings"
              className={({ isActive }) =>
                isActive
                  ? "nav-btn__profile nav-btn__profile--active"
                  : "nav-btn__profile nav-btn__profile--inactive"
              }
            >
              <h3>Edit Listings</h3>
              <span className="btn-icon">
                <BiChevronRight />
              </span>
            </NavLink>

            {/* if user is logged in then show the logout option // onclick call the logout function*/}
            {user && (
              <div
                className="nav-btn__profile"
                onClick={() => {
                  logout();
                }}
              >
                <h3>Log Out</h3>
                <span className="btn-icon">
                  <BiChevronRight />
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <button className="btn-outline">Log In</button>
          <button className="btn-outline">Sign Up</button>
        </div>
      )}
    </>
  );
};

export default ProfileNav;
