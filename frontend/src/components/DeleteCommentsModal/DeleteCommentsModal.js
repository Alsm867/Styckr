import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import {deleteAComment} from "../../store/comments";
import './DeleteCommentsModal.css';

function DeleteCommentsButton({showModal, imageId, userId, comments}) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("THIS IS IN THE DELETE BUTTON", comments);

  const handleDelete = (e) =>{
    e.preventDefault();
      dispatch(deleteAComment(comments))
      history.push(`/images/${userId}/${imageId}`)
    }
  const handleCancelClick = (e) => {
    e.preventDefault();

    showModal(false)
  };


  return (
    <div>
      <h2>Are you sure you want to DELETE this comment?</h2>
      <button onClick={handleDelete}>Of Course</button>
      <button onClick={handleCancelClick}>Nah...</button>
    </div>
    );
}

export default DeleteCommentsButton;
