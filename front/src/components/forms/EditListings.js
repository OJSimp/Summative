import { useParams } from "react-router-dom";

import { useEffect } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useGetUser } from "../../hooks/useGetUser";

const EditListings = () => {
  const listingId = useParams().listingsId;

  const { user } = useAuthContext();

  const { userDetails, ID, firstName, lastName } = useGetUser();

  console.log(listingId);

  // Render Logged-In user Details
  useEffect(() => {
    if (user) {
      const userEmail = user.email;
      userDetails(userEmail);
    }
  }, [user]);

  // Render listing details

  useEffect(() => {}, [listingId]);

  const handleDeleteListings = async () => {
    console.log("Deleteing");

    await fetch(`http://localhost:8001/listings/${listingId}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="">
      <button onClick={handleDeleteListings} className="btn-primary">
        Delete
      </button>
    </div>
  );
};

export default EditListings;
