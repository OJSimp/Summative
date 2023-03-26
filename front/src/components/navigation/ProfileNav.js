import "./ProfileNav.scss"

import { useLogOut } from "../../hooks/useLogOut"
import { useAuthContext } from "../../hooks/useAuthContext"


import { NavLink } from "react-router-dom"

const ProfileNav = () => {

 // check if user is logged in from token 
 const { user } = useAuthContext()

  const { logout } = useLogOut()

  const handleLogout = () => {
  
    logout()
  
  }
 
 return(

  <div className="nav-profile">
   <div className="profile__details">
    <h2>My Profile - {/* Zee Insert your Get Request here for name*/}</h2>
    <p>{/* insert your GET request email here */}</p>
   </div>

  <NavLink to="edit-profile" className={({ isActive }) =>(isActive ? 'nav-btn__profile nav-btn__profile--active' : 'nav-btn__profile nav-btn__profile--inactive')}>
   <h3>Edit Profile</h3>
   <span className="right-cheveron"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="#2A2E45"/>
    </svg>
   </span>
  </NavLink>

  <NavLink to="edit-listings" className={({ isActive }) =>(isActive ? 'nav-btn__profile nav-btn__profile--active' : 'nav-btn__profile nav-btn__profile--inactive')} >
   <h3>Edit Listings</h3>
   <span className="right-cheveron"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="#2A2E45"/>
    </svg>
   </span>
  </NavLink>

  {/* if user is logged in then show the logout option */}
  {user && (
  <div className="nav-btn__profile" onClick={handleLogout}>
    <h3>Log Out</h3>
    <span className="right-cheveron"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="#2A2E45"/>
      </svg>
    </span>
   </div>
   )}

   
 </div>

 )

}


export default ProfileNav