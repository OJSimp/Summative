import './EditProfile.scss'

import { Link, Outlet } from "react-router-dom"

const EditProfile = () => {

 return (
  <div className="edit-profile">
  <Link to="/profile/" className="" >My Profile</Link>
  <div className="edit-profile">
 <h4>Edit Profile Details</h4>
 <form action="./EditProfile.js">
  <input type="text" id="text-input" name="firstname" placeholder="First name" />
  <input type="text" id="text-input" name="lastname" placeholder="Last name" />
  <input type="text" id="text-input" name="email" placeholder="email@gmail.com" />
  <button className="btn-primary">Update Profile</button>
 </form>
</div>
{/* end of edit profile */}  
<div className='delete-profile'>
  <button className='btn-primary'>Delete Profile</button>
</div>
  </div>

  
  )

}

export default EditProfile