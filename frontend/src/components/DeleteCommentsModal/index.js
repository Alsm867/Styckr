import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import DeleteCommentsButton from './DeleteCommentsModal';
import './DeleteCommentsModal.css';

function DeleteCommentsModal({imageId, userId, comments}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-button' onClick={() => setShowModal(true)}>Delete Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentsButton showModal={setShowModal} imageId={imageId} userId={userId} comments={comments}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentsModal;
