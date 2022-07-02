import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getBusinesses } from "../../store/business";
import { clearReviews, getReviews } from "../../store/review";
import BusinessEditForm from '../BusinessEditForm'
import DeleteBusModal from "../DeleteBusModal";


import Reviews from "../Reviews";
import StarRating from "../StarRating";
import './BusinessDetails.css'


const BusinessDetails = () => {
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.review)
    const [showEditForm, setShowEditForm] = useState(false);
    const dispatch = useDispatch();



    useEffect(() => {
        clearReviews();
    }, [])



    useEffect(() => {
        dispatch(getReviews(businessId));
        dispatch(getBusinesses());

    }, [dispatch, businessId])

    const formatNumber = (number) => {
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
    }


    return (
        <div className="body-container">

            <div className="body-content">


                {business && reviews ?
                    <>
                        <div className="topbus-container">
                            <div className='column-one'>
                                <div id='business-title'>
                                    <h1>{business.title}</h1>
                                    <div id="large-stars">
                                        <StarRating key={`rating${business.title}`} rating={business.rating} id={business.id} />
                                    </div>
                                    <h4>Owner: {`${business.User.firstName} ${business.User.lastName}`}</h4>
                                </div>
                            </div>
                            <div className='column-two'>

                                <div id="info-container">
                                    {showEditForm ?
                                        <div id="business-info">
                                            <BusinessEditForm hideForm={() => setShowEditForm(false)} business={business} />
                                        </div>
                                        :
                                        <div id="business-info">
                                            {sessionUser?.id === business?.ownerId &&
                                                (
                                                    <span id="edit-delete-bus-buttons">
                                                        <button onClick={() => setShowEditForm(true)}>Edit</button>
                                                        <DeleteBusModal businessTitle={business.title} />
                                                    </span>
                                                )
                                            }
                                            <div>
                                                <h4>Address</h4>
                                                <div>{business.address}</div>
                                                <div>{business.city}, {business.state} {business.zipcode}</div>
                                            </div>
                                            <div>
                                                <h4>Phone Number</h4>
                                                <div>{formatNumber(business.phoneNumber)}</div>
                                            </div>
                                            <div>
                                                <h4>Website</h4>
                                                <div><a id="website-link" href={business.website}>{business.website}</a></div>
                                            </div>
                                            <div>
                                                <h4>About the Business</h4>
                                                <div>{business.description}</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div id='spacer'>

                                </div>

                            </div>


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


    )
}
export default BusinessDetails;
