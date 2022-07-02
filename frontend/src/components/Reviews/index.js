import React, { useState } from "react";
import { useSelector } from "react-redux";

import ReviewForm from "../ReviewForm";
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFormModal"
import './Reviews.css'
import ReviewSingle from "../ReviewSingle";


function Reviews({ reviews, business, userId }) {
    const sessionUser = useSelector(state => state.session.user);
    const [showRevForm, setShowRevForm] = useState(false);





    return (
        <div id="big-review-container">
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
