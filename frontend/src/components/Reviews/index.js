import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../store/review";

function Reviews({business}) {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review)


    useEffect(() => {
        dispatch(getReviews(business.id));
    }, [dispatch])


return (
    <div>
        <ul>

        {reviews.map((rev)=>(
            <li key={rev.id}>{rev.review}</li>
            ))}
            </ul>
    </div>
)

}


export default Reviews;
