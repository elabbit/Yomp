import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const BusinessDetails = () => {
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]);



    return (

        business ? (
            <div>
                <div>{business.title}</div>
                <div>Owner: {`${business.User.firstName} ${business.User.lastName}`}</div>
                <div>{business.description}</div>
            </div>
        )
            :
            (
            <div>Loading...</div>
            )
    )

}
export default BusinessDetails;
