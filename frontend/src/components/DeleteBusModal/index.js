import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBusiness } from "../../store/business";


function DeleteBusModal({businessTitle}) {
    const [showModal, setShowModal] = useState(false);
    const { businessId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();


    const handleDelete = async () => {
        const deleted = await dispatch(deleteBusiness(businessId))
        if(deleted) history.push('/');
    }
    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div id="modal-form-container">
                    <div id="modal-header">
                        <h2>delete confirmation</h2>
                        </div>
                        <div id='modal-container'>
                        <div>{`Are you sure you want to remove ${businessTitle}?`}</div>
                        </div>
                        <div id="modal-btn-container">
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default DeleteBusModal;
