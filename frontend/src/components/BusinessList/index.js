import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBusinesses } from "../../store/business";
import { NavLink } from 'react-router-dom'


const BusinessList = () => {
    const businesses = Object.values(useSelector(state => state.business))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])

    return (
        <div>
            {businesses.map(bus => (
                <NavLink key={bus.id} to={`/business/${bus.id}`}>
                    <div>
                        {bus.title}
                    </div>
                </NavLink>
            ))}
        </div>
    )


}

export default BusinessList;
