import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBusinesses } from "../../store/business";
import { NavLink } from 'react-router-dom'
import StarRating from "../StarRating";
import './BusinessList.css'


const BusinessList = () => {
    const businesses = Object.values(useSelector(state => state.business))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])

    return (
        <div id='business-container'>
            <div id='business-header'>

        <h2>Browse Businesses</h2>
            </div>
        <div id='list-container'>
            {businesses.map(bus => (
                <div className='business-box' key={`div${bus.title}`}>
                    <NavLink key={bus.id} to={`/business/${bus.id}`}>{bus.title}</NavLink>
                    <StarRating key={`rating${bus.title}`} rating={bus.rating} />
                    <div className="business-des">
                        {bus.description}
                    </div>
                </div>
            ))}
        </div>
            </div>
    )


}

export default BusinessList;
