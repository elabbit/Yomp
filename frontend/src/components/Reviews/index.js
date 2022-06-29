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
    }, [dispatch, business])

    return (
        <div id="big-review-container">
            <div id="review-container">
                <h2>Reviews</h2>
                {showRevForm ?
                    <ReviewForm hideForm={() => setShowRevForm(false)} business={business} userId={userId} />
                    :
                    <>
                        {sessionUser ?
                            <div>
                                <button onClick={() => setShowRevForm(true)}>Write A Review</button>
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
                            <ReviewSingle rev={rev} sessionUser={sessionUser} />
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
    )

}


export default Reviews;
