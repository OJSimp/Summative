import "./HeaderNav.scss";

import { NavLink, Link } from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa";

const HeaderNav = () => {
  return (
    <>
      <div className="nav-header--mobile">
        
        <Link to="./home" className="app__logo">
          <h5>+ Art</h5></Link> 
       
        <div className="about__link">
          <NavLink
            to="./about"
            className={({ isActive }) =>
              isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
            }>    <span className="btn-nav__icon">
              <FaInfoCircle />
            </span>
            <p>About</p>
        
          </NavLink>
        </div>
      </div>

      <div className="nav-header--desktop">
        <div className="af__logo">
          <h5>+ Art</h5>
        </div>
        <div className="header__nav-links">
          <NavLink to="/" className="btn-text">
            Home
          </NavLink>
          <NavLink to="/search" className="btn-text">
            Search
          </NavLink>
          <NavLink to="/upload-art" className="btn-text">
            Add Art
          </NavLink>
          <NavLink to="/about" className="btn-text">
            About
          </NavLink>
        </div>
        <div className="header__profile">
          <button className="btn-outline">
            Profile
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#717171"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderNav;
