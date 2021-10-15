import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
// import {deleteImage} from "../../store/images";
import './Comments-Modal.css';
import { PostComment } from "../../store/comments";

function CommentButton({showModal}) {
    const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const {imageId} = useParams();
  const history = useHistory();
  const [comment, setComment] = useState()
  const handleComment = (e) =>{
      e.preventDefault();
      const payload = {
          userId: sessionUser.id,
          userName: sessionUser.username,
          imageId: imageId,
          comment
      }
      dispatch(PostComment(payload));
      history.push(`/images/${sessionUser.id}/${imageId}`);
  }
  const handleCancelClick = (e) => {
    e.preventDefault();

    showModal(false)
  };

  return (
    <div>
        <label>
          Comment
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>

      <button onClick={handleComment}>Comment</button>
      <button onClick={handleCancelClick}>CANCEL</button>
    </div>
    );
}

export default CommentButton;
