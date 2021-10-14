import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import deleteImage from "../../store/images";
import './Delete-modal.css';

function DeleteButton({showModal}) {
  const dispatch = useDispatch();

  const handleDelete = (e) =>{
    e.preventDefault();
    deleteImage()
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
