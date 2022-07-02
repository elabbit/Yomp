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
                    <div className='single-star-div'>
                        <StarRating rating={rev.rating} id={null} />
                    </div>
                    <div>{rev.review}</div>
                    {rev?.Photos?.length ?
                        <div className="rev-img-container">
                            {rev.Photos.map((photo) => (
                                <div key={photo.id} className="rev-img">

                                        <img src={photo.imageURL}></img>

                                </div>
                            ))
                            }
                        </div>
                        :
                        null
                    }

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
