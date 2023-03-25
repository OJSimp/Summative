
import { Link, Outlet } from "react-router-dom"

import "./EditListings.scss"

const EditListings = () => {

 return (
  <div className="page edit-listings">
    <Link to="/profile/" className="" >My Profile</Link>
   <p>Edit Listings</p>
  </div>

  )

}


export default EditListings