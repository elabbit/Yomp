import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../store/review";
import ReviewForm from "../ReviewForm";
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFormModal"
import './Reviews.css'
import ReviewSingle from "../ReviewSingle";

function Reviews({ business, userId }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review)
    const [showRevForm, setShowRevForm] = useState(false);

    useEffect(() => {
        dispatch(getReviews(business.id));
    }, [dispatch, business.id])

    const formatNumber = (number) => {
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
    }

    return (
        <div id="big-review-container">
            <div id="info-container">
                <div id="business-info">
                    <h4>Address</h4>
                    <div>{business.address}</div>
                    <div>{business.city}, {business.state} {business.zipcode}</div>
                    <h4>Phone Number</h4>
                    <div>{formatNumber(business.phoneNumber)}</div>
                    <h4>Website</h4>
                    <a id="website-link" href={business.website}>{business.website}</a>
                    <h4>About the Business</h4>
                    <div>{business.description}</div>
                </div>
            </div>

            <div id="review-container">
                <h2>Reviews</h2>
                {showRevForm ?
                    <ReviewForm hideForm={() => setShowRevForm(false)} business={business} userId={userId} />
                    :
                    <>
                        {sessionUser ?
                            <div id="write-container">
                                <button id="write-review-button" onClick={() => setShowRevForm(true)}>Write A Review</button>
                            </div>
                            :
                            <div>
                                <span id="review-log">
                                    <LoginFormModal />
                                </span>
                                <span> or </span>
                                <span id="review-sign">
                                    <SignupFormModal />
                                </span>
                                <span> to leave a review!</span>
                            </div>
                        }
                        <div>
                            {reviews.map((rev) => (
                                <ReviewSingle key={rev.id} rev={rev} sessionUser={sessionUser} />
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
    )

}


export default Reviews;
