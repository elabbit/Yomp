import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBusinesses } from "../../store/business";
import BusinessEditForm from '../BusinessEditForm'
import DeleteBusModal from "../DeleteBusModal";
import Reviews from "../Reviews";
import StarRating from "../StarRating";
import './BusinessDetails.css'



const BusinessDetails = () => {
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);

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
                            <StarRating key={`rating${business.title}`} rating={business.rating} />
                            {showEditForm ?
                                <BusinessEditForm hideForm={() => setShowEditForm(false)} business={business} />
                                :
                                <>
                                    {sessionUser?.id === business?.ownerId &&
                                        (
                                            <div>
                                                <button onClick={() => setShowEditForm(true)}>Edit</button>
                                                <DeleteBusModal businessTitle={business.title} />
                                            </div>
                                        )
                                    }

                                    <div>Owner: {`${business.User.firstName} ${business.User.lastName}`}</div>
                                    <div>{business.description}</div>
                                </>}
                        </div>
                        <Reviews business={business} userId={sessionUser?.id} />
                    </>
                    :
                    (
                        <div>Loading...</div>
                    )}

            </div>
        </div>
    )
}
export default BusinessDetails;
