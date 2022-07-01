import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import StarRating from "../StarRating";
import './ReviewList.css'
import { getRecentReviews } from "../../store/review";
import { clearReviews } from "../../store/review";


const ReviewList = () => {
    const reviews = useSelector(state => state.review)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentReviews());
        return ()=>dispatch(clearReviews());
    }, [dispatch])

    return (
        reviews ?
            (<div>
                <div id='reviewlist-header'>
                    <h2>Recent Reviews</h2>
                </div>
                <div id='list-container'>
                    {reviews.map(rev => (
rev?.Business ?
                        (
                        <div className='reviewlist-box' key={`div${rev.id}`}>
                            <div id='review-container'>
                                <div id='review-header'>
                                    <div id="review-name">{rev.User.firstName} {rev.User.lastName[0]}.</div>
                                    <div id='review-text'>Wrote a review</div>

                                </div>
                                <div className="reviewlist-nav">
                                    <NavLink key={rev.Business.id} to={`/burgerjoints/${rev.Business.id}`}>{rev.Business.title}</NavLink>
                                </div>
                                <StarRating key={`rating${rev.id}`} rating={rev.rating} />

                                <p className="reviewlist-des">
                                    {rev.review}
                                </p>
                            </div>
                        </div>
                        )
:
null
                    ))}
                </div>
            </div>)
            :
            <h4>Loading...</h4>
    )


}

export default ReviewList;
