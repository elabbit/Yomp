import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/business";


import Reviews from "../Reviews";
import StarRating from "../StarRating";
import './BusinessDetails.css'



const BusinessDetails = () => {
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])


    return (
        <div id='big-business-container'>

            <div id='business-container'>

                {business ?
                    <>
                        <div>
                            <h1>{business.title}</h1>
                            <div id="large-stars">
                            <StarRating key={`rating${business.title}`} rating={business.rating} />
                            </div>
                            <h4>Owner: {`${business.User.firstName} ${business.User.lastName}`}</h4>

                        </div>
                        <Reviews business={business} userId={sessionUser?.id} />
                    </>
                    :
                    (
                        <div>Please wait or return
                            <Link to="/">home.</Link>
                        </div>
                    )}

            </div>
        </div>
    )
}
export default BusinessDetails;
