import { useState } from "react";
import RevEditToggle from "../RevEditToggle";
import StarRating from "../StarRating";
import "./ReviewSingle.css"

const ReviewSingle = ({ rev, sessionUser }) => {
    const [showRev, setShowRev] = useState(true);

    return (
        <div key={rev.id} className="single-review">
            {showRev &&
                <>
                    <div>{`${rev.User.firstName} ${rev.User.lastName[0]}.`}</div>
                    <StarRating rating={rev.rating} />
                    <div>{rev.review}</div>
                </>
            }
            {sessionUser?.id === rev.userId &&
                (
                    <RevEditToggle rev={rev} toggleRev={() => setShowRev(!showRev)} />
                )
            }
        </div>

    )
}

export default ReviewSingle;
