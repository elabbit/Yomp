import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/review";
// import ErrorModal from '../ErrorModal';
// import {useEffect} from "react";
import './ReviewEditForm.css'
import { getRating } from "../../store/business";


const ReviewEditForm = ({ hideForm, rev, toggleRev }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(rev.rating);
    const [review, setReview] = useState(rev.review);
    const [urlOne, setUrlOne] = useState('');
    const [urlTwo, setUrlTwo] = useState('');

    useEffect(() => {
    if(rev.Photos[0]) setUrlOne(rev.Photos[0].imageURL);
    if(rev.Photos[1]) setUrlTwo(rev.Photos[1].imageURL);
    }, []);
    // const [validationErrors, setValidationErrors] = useState([]);
    // const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     const errors = []
    //     if (!rating) errors.push("Please select a rating.")
    //     setValidationErrors(errors)

    // }, [rating]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    //     if (validationErrors.length){
    //      return setShowModal(true);
    // }
        const editedRev = {
            ...rev,
            rating, review
        }


        const photos = [urlOne,urlTwo]

        const edited = await dispatch(editReview(editedRev, photos))
        if (edited) {
            await dispatch(getRating(rev.businessId))
            hideForm();
            toggleRev();
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
        toggleRev();
    }

    return (
        <div className='edit-rev-container'>

            <form onSubmit={handleSubmit}>
            {/* <ErrorModal hideModal={()=>setShowModal(false)} showModal={showModal} validationErrors={validationErrors} /> */}
                    <h4>Please select a rating:</h4>
                <div id="edit-rating-container">
                    <div className="wrapper">
                        <input type="radio" name="rate" id="rate1" value={5} onChange={e => setRating(e.target.value)} />
                        <label htmlFor="rate1"></label>
                        <input type="radio" name="rate" id="rate2" value={4} onChange={e => setRating(e.target.value)} />
                        <label htmlFor="rate2"></label>
                        <input type="radio" name="rate" id="rate3" value={3} onChange={e => setRating(e.target.value)} />
                        <label htmlFor="rate3"></label>
                        <input type="radio" name="rate" id="rate4" value={2} onChange={e => setRating(e.target.value)} />
                        <label htmlFor="rate4"></label>
                        <input type="radio" name="rate" id="rate5" value={1} onChange={e => setRating(e.target.value)} />
                        <label htmlFor="rate5"></label>
                    </div>
                </div>
              <div id="edit-text-container">
                    <textarea
                       id="edit-reviewtext"
                        type="review"
                        placeholder="Review"
                        required
                        value={review}
                        onChange={e => setReview(e.target.value)} />
                </div>

                <div className="url-input-container">
                    <h5>Add up to two image URLs ending in .jpg .jpeg or .png:</h5>
                    <div>
                        <input
                            type="urlOne"
                            placeholder="Image URL (Optional)"
                            value={urlOne}
                            onChange={e => setUrlOne(e.target.value)} />
                    </div>
                    <div>
                        <input
                            type="urlTwo"
                            placeholder="Image URL (Optional)"
                            value={urlTwo}
                            onChange={e => setUrlTwo(e.target.value)} />
                    </div>
                </div>



                <div className="edit-rev-buttons">
                <button type="submit" >Submit Edit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default ReviewEditForm;
