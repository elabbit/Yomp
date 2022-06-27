import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBusinesses } from "../../store/business";
import { NavLink } from 'react-router-dom'
import StarRating from "../StarRating";


const BusinessList = () => {
    const businesses = Object.values(useSelector(state => state.business))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])

    return (
        <div>
            {businesses.map(bus => (
                <div key={`div${bus.title}`}>
                    <NavLink key={bus.id} to={`/business/${bus.id}`}>{bus.title}</NavLink>
                    <StarRating key={`rating${bus.title}`} rating={bus.rating} />
                </div>
            ))}
        </div>
    )


}

export default BusinessList;
