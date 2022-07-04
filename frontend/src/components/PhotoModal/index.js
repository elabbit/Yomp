import React from 'react';
import { Modal } from '../../context/Modal';



function PhotoModal({ hideModal, showModal, imageURL }) {

  return (
    <>
      {showModal && (
        <Modal onClose={hideModal}>
          <div id="photo-modal">
            <div id='photo-container'>
              <img className='actual-photo' src={imageURL} alt=''></img>
            </div>
            <div id="modal-btn-container">
              <button id="photo-modal-button" onClick={hideModal}>Continue</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default PhotoModal;
