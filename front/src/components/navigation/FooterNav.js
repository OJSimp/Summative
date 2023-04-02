import "./FooterNav.scss";

import { NavLink } from "react-router-dom";

import { FaHome, FaSearch, FaPlus, FaUser } from "react-icons/fa";

import { useAuthContext } from "../../hooks/useAuthContext";

const FooterNav = () => {
  // if there is a user change the link for the nav to home
  const { user } = useAuthContext();

  return (
    <div className="nav__footer">
      <NavLink
        to={user ? "/" : "/sign-up"}
        className={({ isActive }) =>
          isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
        }
      >
        Home
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
        Search
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
        Add Art
        <span className="btn-nav__icon">
          <FaPlus />
        </span>
      </NavLink>

      <NavLink
        // to={user ? "/profile" : "/sign-up"}
        to="/profile"
        className={({ isActive }) =>
          isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
        }
      >
        Profile
        <span className="btn-nav__icon">
          <FaUser />
        </span>
      </NavLink>
    </div>
  );
};

export default FooterNav;
