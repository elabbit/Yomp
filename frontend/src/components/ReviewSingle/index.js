import { useState } from "react";
import RevEditToggle from "../RevEditToggle";
import StarRating from "../StarRating";
import "./ReviewSingle.css"

import PhotoSingle from "../PhotoSingle";

const ReviewSingle = ({ rev, sessionUser }) => {
    const [showRev, setShowRev] = useState(true);


    const datify = (date) => {
        const newDate = new Date(date)
        return newDate.toDateString();

    }

    return (
        <div key={rev.id} className="single-review">
            {showRev &&
                <>
                    <div className='user-date-container'>
                        <div className='rev-name'>{`${rev.User.firstName} ${rev.User.lastName[0]}.`}</div>
                    </div>
                    <div className='single-star-div'>
                        <StarRating rating={rev.rating} />
                        <div className='rev-date'>{datify(rev.createdAt)}</div>
                    </div>
                    <div>{rev.review}</div>
                    {rev?.Photos?.length ?
                        <div className="rev-img-container">
                            {rev.Photos.map((photo) => (
                                <div key={photo.id} className="rev-img">
                                    <PhotoSingle imageURL={photo.imageURL} />
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
