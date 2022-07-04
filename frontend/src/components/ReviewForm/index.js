import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import './ReviewForm.css'
import { addReview } from "../../store/review";
import ErrorModal from '../ErrorModal';
import { getRating } from "../../store/business";


const ReviewForm = ({ userId, hideForm }) => {
    const { businessId } = useParams();
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [urlOne, setUrlOne] = useState('');
    const [urlTwo, setUrlTwo] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const errors = []
        if (!rating) errors.push("Please select a rating.")
        if (urlOne !== '') {
            if (!urlOne.endsWith('.jpg') && !urlOne.endsWith('.jpeg') && !urlOne.endsWith('.png')) errors.push("Please enter a valid image URL for the first image.")
        }
        if (urlTwo !== '') {
            if (!urlTwo.endsWith('.jpg') && !urlTwo.endsWith('.jpeg') && !urlTwo.endsWith('.png')) errors.push("Please enter a valid image URL for the second image.")
        }
        setValidationErrors(errors)

    }, [rating, urlOne, urlTwo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validationErrors.length) {
            return setShowModal(true);
        }
        const newRev = {
            userId, businessId, rating, review
        }

        const photos = [urlOne, urlTwo]

        const createdRev = await dispatch(addReview(newRev, photos))
        await dispatch(getRating(businessId))
        if (createdRev) {

            hideForm();
        }
    }



    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    }

    return (
        <div className='add-rev-container'>
            <h3>Write A Review</h3>
            <form onSubmit={handleSubmit}>
                <ErrorModal hideModal={() => setShowModal(false)} showModal={showModal} validationErrors={validationErrors} />
                <h5>Please select a rating:</h5>
                <div id="add-rating-container">
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
                <div id="add-text-container">
                    <textarea
                        id="add-reviewtext"
                        type="review"
                        placeholder="Write a review..."
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

                <div id="add-rev-buttons">
                    <button type="submit" >Submit Review</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )

}

export default ReviewForm;
