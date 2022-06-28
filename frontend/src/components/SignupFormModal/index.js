import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from "./SignupForm";



function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='signup-button' onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm hideModal={()=> setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
