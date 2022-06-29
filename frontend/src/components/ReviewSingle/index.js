import RevEditToggle from "../RevEditToggle";
import StarRating from "../StarRating";

const ReviewSingle = ({reviews, sessionUser}) =>{

    return(
        reviews.map((rev) => (
            <div key={rev.id} className="single-review">
                <div>{`${rev.User.firstName} ${rev.User.lastName[0]}.`}</div>
                <StarRating rating={rev.rating} />
                <div>{rev.review}</div>
                {sessionUser?.id === rev.userId &&
                    (
                        <RevEditToggle rev={rev} />
                    )
                }
            </div>
                  ))
    )
}

export default ReviewSingle;
