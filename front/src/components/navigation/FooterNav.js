
import "./FooterNav.scss"

import { NavLink, Outlet } from "react-router-dom"

const FooterNav = () => {

return (
 <div className="nav__footer">
  <NavLink to="/" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Home
   <span className="btn-nav__icon">
    +
   </span>
  </NavLink>

  <NavLink to="/search" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Search
   <span className="btn-nav__icon">
    +
   </span>
  </NavLink>

  <NavLink to="/upload-art" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Add Art
   <span className="btn-nav__icon">
    +
   </span>
  </NavLink>

  <NavLink to="/profile" className={({ isActive }) =>(isActive ? 'btn-nav btn-nav--active' : 'btn-nav btn-nav--inactive')}>Profile
   <span className="btn-nav__icon">
    +
   </span>
  </NavLink>
 </div>
 
 )

}

export default FooterNav