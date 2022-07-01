import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import ReviewList from "../ReviewList";
import TopBurgers from "../TopBurgers";
import { getTopReviewed } from "../../store/misc";


const HomePage = () => {
    const businesses = Object.values(useSelector(state => state.business))
    const topThree = useSelector(state => state.misc.topThreeRev)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBusinesses());
        dispatch(getTopReviewed());
    }, [dispatch])


    return (
        <div className="body-container">
            <div className="body-content">
                {businesses && topThree ?
                    <>
                        <TopBurgers businesses={businesses} topThree={topThree} />
                        <ReviewList />
                    </>
                    :
                    <h4>Loading...</h4>
                }

            </div>
        </div>
    )

}

export default HomePage;
