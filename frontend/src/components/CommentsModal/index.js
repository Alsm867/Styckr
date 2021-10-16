import React, { useState} from 'react';
import { Modal } from '../../context/Modal';
import CommentButton from './Comments-Modal';
import './Comments-Modal.css';


function CommentButtonModal({imageId, userId}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className='comment-button' onClick={() => setShowModal(true)}>Comment</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CommentButton showModal={setShowModal} imageId={imageId} userId={userId}/>
          </Modal>
        )}
      </>
    );
  }

  export default CommentButtonModal;
