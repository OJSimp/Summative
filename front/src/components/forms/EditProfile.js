import "./EditProfile.scss";

import { useState, useEffect } from "react";

// Hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGetUser } from "../../hooks/useGetUser";

const EditProfile = () => {
  //  const [email, setEmail] = useState("")
  const [editfirstName, setFirstName] = useState("");
  const [editlastName, setLastName] = useState("");

  // storage of user information
  const { user } = useAuthContext();

  // useGetUser function - get user information
  const { userDetails, firstName, lastName, email, ID } = useGetUser();

  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      userDetails(userEmail);
    }
  }, [user]);

  // method delete (aysnc function)
  const handleDeleteProfile = async () => {
    console.log(ID);

    // await fetch
    await fetch(`http://localhost:8001/users/${ID}`, { method: "DELETE" });
  };

  const updateProfile = (e) => {
    e.preventdefault();
    console.log("save");

    const put = { editfirstName, editlastName };
    fetch(`http://localhost:8001/users/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(put),
    });
  };

  return (
    <div className="edit-profile">
      {/* <Link to="/profile/" className="btn-text" >My Profile</Link> */}
      <form className="form-profile__edit" id="editUserDetails">
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
      </form>{" "}
      {/* form ends */}
    </div>
  );
};

export default EditProfile;
