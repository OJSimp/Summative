import "./FooterNav.scss";

import { NavLink } from "react-router-dom";

import { FaHome, FaSearch, FaPlus, FaUser } from "react-icons/fa";

const FooterNav = () => {
  return (
    <div className="nav__footer">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
        }
      >
        <p>Home</p>
        <span className="btn-nav__icon">
          <FaHome />
        </span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
        }
      >
        <p>Search</p>
        <span className="btn-nav__icon">
          <FaSearch />
        </span>
      </NavLink>

      <NavLink
        to="/upload-art"
        className={({ isActive }) =>
          isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
        }
      >
        <p>Add art</p>
        <span className="btn-nav__icon">
          <FaPlus />
        </span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
        }
      >
        <p>Profile</p>
        <span className="btn-nav__icon">
          <FaUser />
        </span>
      </NavLink>
    </div>
  );
};

export default FooterNav;
