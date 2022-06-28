import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBusinesses } from "../../store/business";
import { editReview } from "../../store/review";


const ReviewEditForm = ({ hideForm, rev }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(rev.rating);
    const [review, setReview] = useState(rev.review);
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
        const editedRev = {
            ...rev,
            rating, review
        }
        const edited = await dispatch(editReview(editedRev))
        if (edited) {
            hideForm();
            dispatch(getBusinesses())
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
                    <h4>Please select a rating:</h4>
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
                        type="review"
                        placeholder="Review"
                        required
                        value={review}
                        onChange={e => setReview(e.target.value)} />
                </div>
                <button type="submit" disabled={hasSubmitted && !!validationErrors.length}>Submit Edit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )

}

export default ReviewEditForm;
