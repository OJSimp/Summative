import "./Access.scss";

import LogIn from "../components/forms/LogIn";
import SignUp from "../components/forms/SignUp";

import { useState } from "react";

import { NavLink, useNavigate, Outlet } from "react-router-dom";

const Access = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="home-page">
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

          <button>Continue with Google</button>
          <button onClick={navigateToProfile}>Continue with Facebook</button>

          {/* ternery operator to display buttons to switch access */}
          {showSignUp ? (
            <button
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

      <div className="access-fallback-right">
        {/* <img src="https://media.istockphoto.com/id/1134512518/photo/abstract-hand-painted-art-background-on-canvas.jpg?b=1&s=612x612&w=0&k=20&c=UfkeC1cZHV-jAB1pUEg5zdr_0wMv32eZWDbPTQn6748=" alt="" /> */}
      </div>
    </div>
  );
};

export default Access;
