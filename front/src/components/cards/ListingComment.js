import "./ListingComment.scss"

import { useAuthContext } from "../../hooks/useAuthContext"
import { useGetUser } from "../../hooks/useGetUser"

import { useState } from "react"

const ListingComments = (props) => {

  const { user } = useAuthContext()
  const { userDetails, ID } = useGetUser()

  const { commentsArray, setCommentsArray } = useState(null)

 // the comments for a post
 const userEmail = user.email

 // get the signed-in users id
 userDetails(userEmail)

 console.log(commentsArray)

 

//  const commentCards = commentsArray.map((comment, index) => {
//  // if commentCreator = userID then option to edit 
//   const commentCreator = comment.creatorId

// return (
//   <div className="card-comment" key={index} >
//    <p>{comment.name}</p>
//    <p>{comment.details}</p>
//    {/* if the signed in user created the comment show the edit and delete button */}
//    {commentCreator == ID ? <div className="card-comment__utility">
//     <button>Edit</button>
//     <button>Delete</button>
//    </div>
//    : null}
//   </div> 
//   )
// })

 return(
  <div>
    <p>Comment Cards</p>

   {/* {commentCards} */}
   
  </div>
  )
}

export default ListingComments