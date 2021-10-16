import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import EditModal from './EditCommentModal';
import './EditCommentModal.css';


function EditButton({imageId, userId, comment}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditModal showModal={setShowModal} imageId={imageId} userId={userId} comment={comment}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditButton;
