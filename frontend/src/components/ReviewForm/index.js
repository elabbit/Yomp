import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './ReviewForm.css'
import { addReview } from "../../store/review";
import { getBusinesses } from "../../store/business";

const ReviewForm = ({ userId, hideForm }) => {
    const { businessId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);


    useEffect(() => {
        const errors = []
        if (!rating) errors.push("Please select a rating.")

        setValidationErrors(errors)

    }, [rating]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) return;
        const newRev = {
            userId, businessId, rating, review
        }
        const createdRev = await dispatch(addReview(newRev))
        if (createdRev) {
            setRating(0);
            setReview('');
            setHasSubmitted(false);
            hideForm();
            dispatch(getBusinesses())
            history.push(`/business/${createdRev.businessId}`)
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                {hasSubmitted &&
                    <ul className="errors">
                        {
                            validationErrors.map(error => (
                                <li key={error}>{error}</li>
                            ))
                        }
                    </ul>}
                <h5>Please select a rating:</h5>
                <div id="rating-container">
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
                <div>
                    <textarea
                        id="add-reviewtext"
                        type="review"
                        placeholder="Write a review..."
                        required
                        value={review}
                        onChange={e => setReview(e.target.value)} />
                </div>
                <button type="submit" disabled={hasSubmitted && !!validationErrors.length}>Submit Review</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )

}

export default ReviewForm;
