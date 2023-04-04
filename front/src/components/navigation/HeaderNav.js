import "./HeaderNav.scss";

import { NavLink } from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa";

const HeaderNav = () => {
  return (
    <div className="nav-header">
      <div className="af__logo">
        <h5>Art feed</h5>
      </div>
      <div className="about__link">
        <NavLink
          to="./about"
          className={({ isActive }) =>
            isActive ? "btn-nav btn-nav--active" : "btn-nav btn-nav--inactive"
          }
        >
          <p>About</p>
          <span className="btn-nav__icon">
            <FaInfoCircle />
          </span>
        </NavLink>
      </div>
    </div>
  );
};
export default HeaderNav;
