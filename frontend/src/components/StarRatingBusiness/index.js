import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRating } from '../../store/business';

const StarRatingBusiness = ({id}) => {
    const businessRating = useSelector(state => state.business[id].rating);

const dispatch = useDispatch();

    const rounded = Math.round(businessRating / 0.5) * 0.5;
    useEffect(() => {
    dispatch(getRating(id))},[dispatch])




    return (
        businessRating &&
        <div className='stars'>
            {rounded === 0 ?
                <div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                    <div className="far fa-star"></div>
                </div>
                : rounded === 1 ?
                    <div>
                        <div className="fas fa-star"></div>
                        <div className="far fa-star"></div>
                        <div className="far fa-star"></div>
                        <div className="far fa-star"></div>
                        <div className="far fa-star"></div>
                    </div>
                    : rounded === 1.5 ?
                        <div>
                            <div className="fas fa-star"></div>
                            <div className="fas fa-star-half-alt" divd="one-half"></div>
                            <div className="far fa-star"></div>
                            <div className="far fa-star"></div>
                            <div className="far fa-star"></div>
                        </div>
                        : rounded === 2 ?
                            <div>
                                <div className="fas fa-star"></div>
                                <div className="fas fa-star"></div>
                                <div className="far fa-star"></div>
                                <div className="far fa-star"></div>
                                <div className="far fa-star"></div>
                            </div>
                            : rounded === 2.5 ?
                                <div>
                                    <div className="fas fa-star"></div>
                                    <div className="fas fa-star"></div>
                                    <div className="fas fa-star-half-alt"></div>
                                    <div className="far fa-star"></div>
                                    <div className="far fa-star"></div>
                                </div>
                                : rounded === 3 ?
                                    <div>
                                        <div className="fas fa-star"></div>
                                        <div className="fas fa-star"></div>
                                        <div className="fas fa-star"></div>
                                        <div className="far fa-star"></div>
                                        <div className="far fa-star"></div>
                                    </div>
                                    : rounded === 3.5 ?
                                        <div>
                                            <div className="fas fa-star"></div>
                                            <div className="fas fa-star"></div>
                                            <div className="fas fa-star"></div>
                                            <div className="fas fa-star-half-alt"></div>
                                            <div className="far fa-star"></div>
                                        </div>
                                        : rounded === 4 ?
                                            <div className='four'>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="fas fa-star"></div>
                                                <div className="far fa-star"></div>
                                            </div>
                                            : rounded === 4.5 ?
                                                <div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star"></div>
                                                    <div className="fas fa-star-half-alt"></div>
                                                </div>
                                                : rounded === 5 ?
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

export default StarRatingBusiness;
