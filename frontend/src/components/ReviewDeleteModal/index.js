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
                    <div>
                        <h2>DELETE CONFIRMATION</h2>
                        <div>{`Are you sure you want to remove this review?`}</div>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default DeleteBusModal;
