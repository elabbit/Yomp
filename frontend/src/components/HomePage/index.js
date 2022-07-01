import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import ReviewList from "../ReviewList";
import TopBurgers from "../TopBurgers";


const HomePage = () => {
    const businesses = Object.values(useSelector(state => state.business))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])


    return (
        <div className="body-container">
            <div className="body-content">
<TopBurgers businesses={businesses}/>
<ReviewList/>

            </div>
        </div>
    )

}

export default HomePage;
