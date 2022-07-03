import React from 'react';
import { Modal } from '../../context/Modal';



function PhotoModal({ hideModal, showModal }) {

  return (
    <>
      {showModal && (
        <Modal onClose={hideModal}>
          <div id="modal-form-container">

          </div>
        </Modal>
      )}
    </>
  );
}

export default PhotoModal;
