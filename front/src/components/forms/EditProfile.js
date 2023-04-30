// Amiee's code

import "./EditProfile.scss";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaChevronLeft } from "react-icons/fa";

// Hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogOut";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState();

  // storage of user information
  const { user } = useAuthContext();

  const { logout } = useLogout();

  const navigate = useNavigate();

  // useGetUser function - get user information
  // const { userDetails, firstName, lastName, email, ID } = useGetUser();

  useEffect(() => {
    if (user) {
      const userEmail = user.email;

      const getUserDetails = async () => {
        const response = await fetch(
          `http://localhost:8001/users/${userEmail}`,
          { method: "GET" }
        );
        const userResponse = await response.json();

        const user = userResponse[0];

        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setID(user._id);
      };

      getUserDetails();
    }
  }, [user]);

  // method delete (aysnc function)
  const handleDeleteProfile = async () => {
    console.log(ID);

    // await fetch
    await fetch(`http://localhost:8001/users/${ID}`, { method: "DELETE" });
    logout();
    navigate("/search");
  };

  const updateProfile = () => {
    const put = { firstName, lastName, email };
    fetch(`http://localhost:8001/users/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(put),
    });
    navigate("/search");
  };

  return (
    <div className="edit-profile">
      <div className="navigation-header">
        <Link to="/profile">
          <FaChevronLeft />
          <p>My Profile</p>
        </Link>
      </div>
      {/* <Link to="/profile/" className="btn-text" >My Profile</Link> */}
      <div className="form-profile__edit" id="editUserDetails">
        <h4>My profile </h4>

        <input
          value={firstName}
          type="text"
          placeholder="First name"
          className="text-input"
          id="first-name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label
          htmlFor="log-in--first-name"
          className="text-input__label"
          id="log-in__first-name"
        >
          <span>First Name</span>
        </label>

        <input
          value={lastName}
          type="text"
          placeholder="Last name"
          className="text-input--icon"
          id="log-in__last-name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label
          htmlFor="log-last-name"
          className="text-input__label"
          id="log-in__last-name"
        >
          <span>Last Name</span>
        </label>

        <input
          value={email}
          type="text"
          placeholder="email@gmail.com"
          className="text-input--icon"
          id="log-in__email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="log-in__email"
          className="text-input__label"
          id="log-in__email"
        >
          <span>Email</span>
        </label>

        <button className="btn-primary" onClick={updateProfile}>
          Save Changes
        </button>

        <button className="btn-outline" onClick={handleDeleteProfile}>
          Delete Profile
        </button>
      </div>{" "}
      {/* form ends */}
    </div>
  );
};

export default EditProfile;
