import "./ListingComment.scss";
import { useState } from "react";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ListingComments = (props) => {
  const handleEdit = () => {
    console.log("Edit Comment");
  };

  const [modal, setModal] = useState(false);

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
  // modal

  const toggleModal = () => {
    setModal(!modal);
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
        {commentCreator == props.id ? (
          <div className="card-comment__utility">
            <button className="btn-text" onClick={toggleModal}>
              Edit <AiOutlineEdit />
            </button>
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
  {
  }

  return (
    <div>
      {commentCards}
      {/* Modal HTML */}
      {modal ? (
        <div className="edit-modal__overlay">
          <div className="modal">
            <header className="modal-top-header_element">
              <h2 className="edit-header_text">Edit your comment</h2>
              <button onClick={toggleModal} className="btn-icon">
                <MdClose />
              </button>
            </header>
            <body className="modal-body_element">
              <input
                placeholder="Comment Details"
                className="edit-comment_input"
                type="text"
                name=""
                id=""
              />
            </body>
            <footer className="modal-footer_element">
              <button
                onClick={handleEdit}
                className="btn-primary edit-button_size "
              >
                edit
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ListingComments;
