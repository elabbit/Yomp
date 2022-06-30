import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { deleteReview} from "../../store/review";




function DeleteBusModal({ rev }) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = async () => {
     await dispatch(deleteReview(rev.id))
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
                        <div>{`Are you sure you want to delete this review?`}</div>
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
