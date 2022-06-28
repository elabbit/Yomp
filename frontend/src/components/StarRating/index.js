import './StarRating.css'

const StarRating = ({ rating }) => {
    return (
        <div className='stars'>
            {+rating === 0 ?
                <div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                </div>
                : +rating === 1 ?
                    <div>
                        <div className="fas fa-star"></div>
                        <div className="fas fa-star-half-alt"></div>
                        <div className="far fa-star"></div>
                        <div className="far fa-star"></div>
                        <div className="far fa-star"></div>
                    </div>
                    : +rating === 1.5 ?
                        <div>
                            <div className="fas fa-star"></div>
                            <div className="fas fa-star-half-alt" divd="one-half"></div>
                            <div className="far fa-star"></div>
                            <div className="far fa-star"></div>
                            <div className="far fa-star"></div>
                        </div>
                        : +rating === 2 ?
                            <div>
                                <div className="fas fa-star"></div>
                                <div className="fas fa-star"></div>
                                <div className="far fa-star"></div>
                                <div className="far fa-star"></div>
                                <div className="far fa-star"></div>
                            </div>
                            : +rating === 2.5 ?
                                <div>
                                    <div className="fas fa-star"></div>
                                    <div className="fas fa-star"></div>
                                    <div className="fas fa-star-half-alt"></div>
                                    <div className="far fa-star"></div>
                                    <div className="far fa-star"></div>
                                </div>
                                : +rating === 3 ?
                                    <div>
                                        <div className="fas fa-star"></div>
                                        <div className="fas fa-star"></div>
                                        <div className="fas fa-star"></div>
                                        <div className="far fa-star"></div>
                                        <div className="far fa-star"></div>
                                    </div>
                                    : +rating === 3.5 ?
                                        <div>
                                            <div className="fas fa-star"></div>
                                            <div className="fas fa-star"></div>
                                            <div className="fas fa-star"></div>
                                            <div className="fas fa-star-half-alt"></div>
                                            <div className="far fa-star"></div>
                                        </div>
                                        : +rating === 4 ?
                                            <div className='four'>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="far fa-star"></div>
                                            </div>
                                            : +rating === 4.5 ?
                                                <div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star-half-alt"></div>
                                                </div>
                                                : +rating === 5 ?
                                                    <div>
                                                        <div className="fas fa-star"></div>
                                                        <div className="fas fa-star"></div>
                                                        <div className="fas fa-star"></div>
                                                        <div className="fas fa-star"></div>
                                                        <div className="fas fa-star"></div>
                                                    </div>
                                                    : null

            }
        </div>
    )

}

export default StarRating;
