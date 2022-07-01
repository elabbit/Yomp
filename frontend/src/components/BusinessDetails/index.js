import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/business";
import { clearReviews, getReviews } from "../../store/review";


import Reviews from "../Reviews";
import StarRating from "../StarRating";
import './BusinessDetails.css'



const BusinessDetails = () => {
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.review)
    const dispatch = useDispatch();

useEffect(()=>{
    clearReviews();
},[])



    useEffect(() => {
        dispatch(getReviews(businessId));
        dispatch(getBusinesses());

    }, [dispatch,businessId])


    return (
        <div className="body-container">

        <div className="body-content">
        <div id='big-business-container'>

            <div id='business-container'>

                {business && reviews?
                    <>
                        <div>
                            <h1>{business.title}</h1>
                            <div id="large-stars">
                            <StarRating key={`rating${business.title}`} rating={business.rating} id={business.id}/>
                            </div>
                            <h4>Owner: {`${business.User.firstName} ${business.User.lastName}`}</h4>

                        </div>
                        <Reviews reviews={reviews} business={business} userId={sessionUser?.id} />
                    </>
                    :
                    (
                        <div id="notfound">
                        <h2>Please wait or return
                            <Link to="/">home.</Link>
                        </h2>
                        </div>
                    )}

            </div>
        </div>
        </div>
        </div>

    )
}
export default BusinessDetails;
