import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import EditModal from './EditCommentModal.css';
import './EditCommentModal.css';


function EditButton({imageId, userId}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className='delete-button' onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditModal showModal={setShowModal} imageId={imageId} userId={userId}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditButton;
