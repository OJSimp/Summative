import "./ListingComment.scss";

import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

const ListingComments = (props) => {
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
    const data = await response.json();
    console.log(data);
    props.reloadData();
  };

  const commentsArray = props.comments;

  const commentCards = commentsArray.map((comment, index) => {
    // if commentCreator = userID then option to edit
    const commentCreator = comment.creatorId;

    return (
      <div className="card-comment" key={comment._id}>
        <h4>
          {comment.firstName} {comment.lastName}
        </h4>
        <p>{comment.details}</p>

        {/* if the signed in user created the comment show the edit and delete button */}
        {commentCreator == props.id ? (
          <div className="card-comment__utility">
            {/* <button className="btn-text" onClick={handleEdit}>
              Edit <AiOutlineEdit />
            </button> */}
            <button
              className="btn-text"
              id={comment._id}
              onClick={handleDelete}
            >
              Delete <AiFillDelete />
            </button>
          </div>
        ) : null}
      </div>
    );
  });

  return <div>{commentCards}</div>;
};

export default ListingComments;
