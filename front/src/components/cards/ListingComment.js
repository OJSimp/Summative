import "./ListingComment.scss";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useGetUser } from "../../hooks/useGetUser";

import { useNavigate } from "react-router-dom";

const ListingComments = (props) => {
  const { user } = useAuthContext();
  const { userDetails, ID } = useGetUser();

  // the comments for a post
  const userEmail = user.email;

  // get the signed-in users id
  userDetails(userEmail);

  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("Edit Comment");
  };

  const handleDelete = async (e) => {
    const commentID = e.target.id;
    const listingId = props.listingId;

    const response = await fetch(
      `http://localhost:8001/listings/${listingId}/comments/${commentID}`,
      {
        method: "DELETE",
      }
    );
    console.log("reload");
  };

  const commentsArray = props.comments;

  const commentCards = commentsArray.map((comment, index) => {
    // if commentCreator = userID then option to edit
    const commentCreator = comment.creatorId;

    return (
      <div className="card-comment" key={comment._id}>
        <p>
          {comment.firstName} {comment.lastName}
        </p>
        <p>{comment.details}</p>

        {/* if the signed in user created the comment show the edit and delete button */}
        {commentCreator == ID ? (
          <div className="card-comment__utility">
            <button onClick={handleEdit}>Edit</button>
            <button id={comment._id} onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) : null}
      </div>
    );
  });

  return <div>{commentCards}</div>;
};

export default ListingComments;
