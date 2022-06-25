import { NavLink, Route, useParams, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBusinesses } from "../../store/business";
import BusinessEditForm from '../BusinessEditForm'
import { deleteBusiness } from "../../store/business";


const BusinessDetails = () => {

    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);
    const history = useHistory();

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])

    const handleDelete = async () => {
        const deleted = await dispatch(deleteBusiness(businessId))
        if(deleted) history.push('/');
    }

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
                            <div>
                            <button onClick={()=>setShowEditForm(true)}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                            </div>
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
