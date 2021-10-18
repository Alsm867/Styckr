import React from "react";
import { useDispatch } from "react-redux";
// import {useHistory} from 'react-router-dom';
import {deleteAComment} from "../../store/comments";
import './DeleteCommentsModal.css';

function DeleteCommentsButton({setShowModal, imageId, userId, comment}) {
  const dispatch = useDispatch();
  // const history = useHistory();
  // console.log("THIS IS IN THE DELETE BUTTON", imageId);

  // const ha = comment.map(comment => comment.comment)
  // console.log("THIS IS WHAT HA IS: ",ha)
  const handleDelete = (e) =>{
    e.preventDefault();


      dispatch(deleteAComment(comment.id))
      setShowModal(false)
      // history.push(`/images/${userId}/${imageId}`)
    }
  const handleCancelClick = (e) => {
    e.preventDefault();

    setShowModal(false)
  };


  return (
    <div className='comment-delete'>
      <h2>Regret this comment?</h2>
      <button className='of-course' onClick={handleDelete}>Of Course!</button>
      <button className='nah' onClick={handleCancelClick}>Nah...</button>
    </div>
    );
}

export default DeleteCommentsButton;
