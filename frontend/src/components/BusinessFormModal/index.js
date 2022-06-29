import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BusinessForm from './BusinessForm';

function BusinessFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='nav-button' onClick={() => setShowModal(true)}>Add Business</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BusinessForm hideModal={()=> setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default BusinessFormModal;
