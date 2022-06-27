import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRating } from "../../store/rating";


const StarRating = ({businessId}) => {
console.log(businessId)
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getRating(businessId))
})



    return (
        <div>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
<i className="far fa-star"></i>

        </div>
    )
}

export default StarRating;
