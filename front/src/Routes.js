import { Route, Routes } from "react-router-dom";
import Media from "react-media"; // add Media

import Access from "./pages/Access";
import UplaodArt from "./pages/UploadArt";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./components/forms/SignUp";
import LogIn from "./components/forms/LogIn";

import EditProfile from "./components/forms/EditProfile";
import YourListings from "./pages/YourListings";
import EditListingPage from "./pages/EditListingPage";
import Search from "./pages/Search";
import ListingDetails from "./pages/ListingDetails";

import NoMatch from "./components/error/NoMatch";

import { useAuthContext } from "./hooks/useAuthContext";

const AppRoutes = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/search" element={<Search />}></Route>
        <Route
          path="/listing-details/:listingsId"
          element={<ListingDetails />}
        ></Route>

        <Route path="/upload-art" element={<UplaodArt />}></Route>

        <Route path="profile" element={<Profile />}></Route>
        <Route path="profile/edit-profile" element={<EditProfile />}></Route>
        <Route path="profile/edit-listings" element={<YourListings />}></Route>
        <Route
          path="/edit-listings/:listingsId"
          element={<EditListingPage />}
        ></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
