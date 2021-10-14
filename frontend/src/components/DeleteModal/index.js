import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import DeleteModal from './Delete-modal';
import './Delete-modal.css';

function DeleteButtonModal({imageId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-button' onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteModal showModal={setShowModal} imageId={imageId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteButtonModal;
