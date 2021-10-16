import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
// import {deleteImage} from "../../store/images";
import './EditCommentModal.css';
import { editComment } from "../../store/comments";

function EditModal({showModal, comment}) {
    const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const {imageId} = useParams();
  const [commentBody, setComment] = useState()
  const handleComment = (e) =>{
      e.preventDefault();
      const payload = {
          userId: sessionUser.id,
          userName: sessionUser.username,
          imageId: imageId,
          comment: commentBody,
          id: comment.id
      }
      dispatch(editComment(payload, comment.id));
      showModal(false)
  }
  const handleCancelClick = (e) => {
    e.preventDefault();

    showModal(false)
  };

  return (
    <div>
        <label>
          Change your mind about the photo?
          <textarea
            name="comment"
            value={commentBody}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>

      <button onClick={handleComment}>Submit</button>
      <button onClick={handleCancelClick}>CANCEL</button>
    </div>
    );
}

export default EditModal;
