import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Media from 'react-media'; // add Media

import Access from "./pages/Access"
import UplaodArt from './pages/UploadArt'
import Profile from './pages/Profile'
import EditProfile from "./components/forms/EditProfile"
import Editlistings from "./components/forms/EditListings"
import Search from "./pages/Search";

import NoMatch from "./components/error/NoMatch";


const AppRoutes = () => {

  // const [isDesktop, setIsDesktop] = useState(null)

  // useEffect(() => {

  // }, isDesktop)


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

    <Route path='/' element={< Access/>}></Route>

    {/* Profile Routes */}

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

    {/* Profile Routes */}

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
