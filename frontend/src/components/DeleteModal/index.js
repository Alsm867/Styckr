import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import DeleteModal from './Delete-modal';
import './Delete-modal.css';

function DeleteButtonModal({imageId, userId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-button' onClick={() => setShowModal(true)}>Delete Image</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteModal showModal={setShowModal} imageId={imageId} userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteButtonModal;
