import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Media from 'react-media'; // add Media

import Access from "./pages/Access"
import UplaodArt from './pages/UploadArt'

import Home from "./pages/Home";
import Profile from './pages/Profile'
import SignUp from './components/forms/SignUp'
import LogIn from './components/forms/LogIn'

import EditProfile from "./components/forms/EditProfile"
import Editlistings from "./components/forms/EditListings"
import Search from "./pages/Search";

import NoMatch from "./components/error/NoMatch";

import { useAuthContext } from "./hooks/useAuthContext"


const AppRoutes = () => {

const { user } = useAuthContext()

 return(

  <div>
  <Routes>
   
   <Route path="*" element={ null }></Route>
   <Route path="*/" element={ <NoMatch /> }></Route>
   
  </Routes>
  
  <Media query="(max-width: 599px)">
    {matches => matches ? 

  <Routes>

    {/* MOBILE Routes */}

    {/* user is not logged in */}
    {!user && (
    <Route path='/' element={< Access/>}>
      <Route path='/sign-up' element={< SignUp/>}></Route>
      <Route path='/log-in' element={< LogIn/>}></Route>
    </Route>
    )}

    {/* user is logged in */}
    {user && (
    <Route path='/' element={< Home />}></Route>
    )}

   <Route path="profile" element={< Profile/>}></Route>
   <Route path="profile/edit-listings" element={< Editlistings/>}></Route>
   <Route path="profile/edit-profile" element={< EditProfile/>}></Route>

   <Route path='/upload-art' element={< UplaodArt/>}></Route>

   <Route path='/search' element={< Search/>}></Route>
    
  </Routes> 
  : 
  <Routes>

    {/* DESKTOP Routes */}

    <Route path='/' element={< Access/>}></Route>

    {/* user is not logged in */}
    {!user && (
    <Route path='/' element={< Access/>}>
      <Route path='/sign-up' element={< SignUp/>}></Route>
      <Route path='/log-in' element={< LogIn/>}></Route>
    </Route>
    )}

    {/* user is logged in */}
    {user && (
    <Route path='/' element={< Home />}></Route>
    )}
    
    <Route path="/profile" element= {< Profile/>}>
    <Route path="edit-listings" element={< Editlistings/>}></Route>
    <Route path="edit-profile" element={< EditProfile/>}></Route>
   </Route>
    
   <Route path='/upload-art' element={< UplaodArt/>}></Route>

   <Route path='/search' element={< Search/>}></Route>

  </Routes>}

  </Media>

  </div>
  
  
  )

}


export default AppRoutes
