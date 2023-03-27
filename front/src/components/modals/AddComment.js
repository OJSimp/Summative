import "./AddComment.scss"

import { useState, useEffect } from "react"

const AddComment = () => {

  // open modal handlers

 const [openAddCom, setOpenAddCom] = useState(false)

 const handleOpenModal = () => {
 setOpenAddCom(!openAddCom)

}

const handleCloseModal = () => {
setOpenAddCom(!openAddCom)

}

 return(
  
  <div>
   <button onClick={handleOpenModal} className="btn-primary">Add Comment</button> 
   {openAddCom && (
   <div className="overlay">
    <div className="modal modal--add-comments">
     <div className="modal__header">
      <h2 >Add Comment Modal</h2>
      <button className="btn-icon" onClick={handleCloseModal}>
       <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z" fill="#2A2E45"/>
       </svg>
      </button>
     </div>
     <div className="modal_body">
      <textarea className="modal__form" name="" id="" cols="30" rows="4"></textarea>
      <label className="modal__label" htmlFor="">Comment details</label>
     </div>
     <button className="btn-primary">Add</button>
    </div>
   </div>
   )}
   </div>
   
  )


}

export default AddComment