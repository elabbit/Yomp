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
        <div id="big-businesslist-container">
            <div id='businesslist-container'>
                <div id='businesslist-header'>
                    <h2>Browse Burger Joints</h2>
                </div>
                <div id='list-container'>
                    {businesses.map(bus => (
                        <div className='businesslist-box' key={`div${bus.title}`}>
                            <div className="businesslist-nav">
                            <NavLink  key={bus.id} to={`/burgerjoints/${bus.id}`}>{bus.title}</NavLink>
                            </div>
                            <StarRating key={`rating${bus.title}`} rating={bus.rating} />
                            <div className="businesslist-add">
                                <div>{bus.address}</div>
                                <div>{bus.city}, {bus.state} {bus.zipcode}</div>
                            </div>
                            <p className="businesslist-des">
                                {bus.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )


}

export default BusinessList;
