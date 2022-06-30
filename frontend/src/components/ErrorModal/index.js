import React from 'react';
import { Modal } from '../../context/Modal';



function ErrorModal({ hideModal, showModal, validationErrors }) {

  return (
    <>
      {showModal && (
        <Modal onClose={hideModal}>
          <div id="modal-form-container">
            <div id="modal-header">
              <h2>error</h2>
            </div>
            <div id='modal-container'>
              <ul className="errors">
                {
                  validationErrors.map(error => (
                    <li key={error}>{error}</li>
                  ))
                }
                <div id="modal-btn-container">
                <button id="modal-button" onClick={hideModal}>Continue</button>
                </div>
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ErrorModal;
