import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import DeleteCommentsButton from './DeleteCommentsModal';
import './DeleteCommentsModal.css';

function DeleteCommentsModal({imageId, userId, comment}) {
  // console.log('INSIDE INDEX', comment)
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-comment-button' onClick={() => setShowModal(true)}>X</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentsButton setShowModal={setShowModal} imageId={imageId} userId={userId} comment={comment}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentsModal;
