import "./Access.scss";

import LogIn from "../components/forms/LogIn";
import SignUp from "../components/forms/SignUp";

import { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";

const Access = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="access-page">
      <div className="access-container">
        <div className="access__nav">
          <NavLink
            to="sign-up"
            className={({ isActive }) =>
              isActive
                ? "btn-access btn-access--active"
                : "btn-access btn-access--inactive"
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="log-in"
            className={({ isActive }) =>
              isActive
                ? "btn-access btn-access--active"
                : "btn-access btn-access--inactive"
            }
          >
            Log In
          </NavLink>
        </div>

        {/* Nested routes to show sigup form underneeth */}

        <Outlet />

        <div className="other-access-options">
          <p>OR</p>

          <button className="btn-outline">Continue with Google</button>
          <button className="btn-outline">Continue with Facebook</button>

          {/* ternery operator to display buttons to switch access */}
          {showSignUp ? (
            <button
              className="btn-outline"
              onClick={() => {
                setShowSignUp(false);
              }}
            >
              Already have an account? Log in
            </button>
          ) : (
            <button
              onClick={() => {
                setShowSignUp(true);
              }}
            >
              New here? Register
            </button>
          )}
        </div>
      </div>

      <div className="access-desktop"></div>
    </div>
  );
};

export default Access;
