import { NavLink, Route, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBusinesses } from "../../store/business";
import BusinessEditForm from '../BusinessEditForm'


const BusinessDetails = () => {

    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);
    console.log(showEditForm)

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])

    return (
        showEditForm ?
            <BusinessEditForm hideForm={()=>setShowEditForm(false)}  business={business} />
            :
            (
                business ? (
                    <div>
                        <div>{business.title}</div>
                        {sessionUser?.id === business?.ownerId &&
                        (
                            <button onClick={()=>setShowEditForm(true)}>Edit</button>
                        )
                        }
                        <div>Owner: {`${business.User.firstName} ${business.User.lastName}`}</div>
                        <div>{business.description}</div>
                    </div>
                )
                    :
                    (
                        <div>Loading...</div>
                    )
            )
    )
}
export default BusinessDetails;
