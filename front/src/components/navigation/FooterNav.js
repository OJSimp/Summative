
import "./FooterNav.scss"

import { NavLink } from "react-router-dom"

import { FaHome, FaSearch, FaPlus, FaUser } from "react-icons/fa";

const FooterNav = () => {

return (
 <div className="nav__footer">
  <NavLink to="/" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Home
   <span className="btn-nav__icon">
    < FaHome /> 
   </span>
  </NavLink>

  <NavLink to="/search" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Search
   <span className="btn-nav__icon">
    < FaSearch /> 
   </span>
  </NavLink>

  <NavLink to="/upload-art" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Add Art
   <span className="btn-nav__icon">
    < FaPlus /> 
   </span>
  </NavLink>

  <NavLink to="/profile" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Profile
   <span className="btn-nav__icon">
    < FaUser />
   </span>
  </NavLink>
 </div>
 
 )

}

export default FooterNav