import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';
import {deleteImage} from "../../store/images";
import './Delete-modal.css';

function DeleteButton({showModal, imageId, userId}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteId = imageId
  console.log("THIS IS IN THE DELETE BUTTON", deleteId)
  const handleDelete = (e) =>{
    e.preventDefault();
    dispatch(deleteImage(deleteId, userId))
    history.push(`/images/${userId}`)
  }
  const handleCancelClick = (e) => {
    e.preventDefault();

    showModal(false)
  };

  return (
    <div>
      <h2>Are you sure you want to DELETE this?</h2>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleCancelClick}>CANCEL</button>
    </div>
    );
}

export default DeleteButton;
