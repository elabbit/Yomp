import React from 'react';
import { Modal } from '../../context/Modal';
import "./ErrorModal.css"


function ErrorModal({hideModal, showModal, validationErrors}) {

  return (
    <>
      {showModal && (
          <Modal onClose={hideModal}>
            <h3>The following errors have occured:</h3>
                <ul className="errors">
                        {
                            validationErrors.map(error => (
                                <li key={error}>{error}</li>
                                ))
                            }
                            <button id="login-button" onClick={hideModal}>Continue</button>
                    </ul>
        </Modal>
      )}
    </>
  );
}

export default ErrorModal;
