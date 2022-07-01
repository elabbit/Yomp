
import { Link } from "react-router-dom";

import StarRating from "../StarRating";
import "./TopBurgers.css"


const TopBurgers = ({ businesses, topThree }) => {

    const sorted = businesses.sort((a, b) => b.rating - a.rating)
    const firstRev = businesses.find(ele => ele.id === +topThree[0][0])
    const secondRev = businesses.find(ele => ele.id === +topThree[1][0])
    const thirdRev = businesses.find(ele => ele.id === +topThree[2][0])


    return (
        <>
            <h2>Current Leaderboard</h2>
            <div className="leaderboard-container">
                <div className="leaderboard-list">
                    <h3>Top Rated Burgers</h3>
                    <div className="burger-container">
                        <div className='each-container'>
                            <i className="fa-solid fa-burger first"></i>
                            <div className='eachlink-container'>
                                <div className="link-div">
                                    <Link to={`/burgerjoints/${sorted[0]?.id}`}>{sorted[0]?.title}</Link>
                                </div>
                                <StarRating rating={sorted[0]?.rating} ></StarRating>
                            </div>
                        </div>
                        <div className='each-container'>
                            <i className="fa-solid fa-burger second"></i>
                            <div className='eachlink-container'>
                                <div className="link-div">
                                    <Link to={`/burgerjoints/${sorted[1]?.id}`}>{sorted[1]?.title}</Link>
                                </div>
                                <StarRating rating={sorted[1]?.rating} ></StarRating>
                            </div>
                        </div>
                        <div className='each-container'>
                            <i className="fa-solid fa-burger third"></i>
                            <div className='eachlink-container'>
                                <div className="link-div">
                                    <Link to={`/burgerjoints/${sorted[2]?.id}`}>{sorted[2]?.title}</Link>
                                </div>
                                <StarRating rating={sorted[2]?.rating} ></StarRating>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leaderboard-list">
                    <h3>Most Reviewed Burgers</h3>
                    <div className="burger-container">
                        <div className='each-container'>
                            <i className="fa-solid fa-burger first"></i>
                            <div className='eachlink-container'>
                                <div className="link-div">
                                    <Link to={`/burgerjoints/${firstRev?.id}`}>{firstRev?.title}</Link>
                                </div>
                                <div className='rev-count'>Review Count:
                                    <span className='rev-count-num'>{topThree && topThree[0][1]}</span></div>
                            </div>
                        </div>
                        <div className='each-container'>
                            <i className="fa-solid fa-burger second"></i>
                            <div className='eachlink-container'>
                                <div className="link-div">
                                    <Link to={`/burgerjoints/${secondRev?.id}`}>{secondRev?.title}</Link>
                                </div>
                                <div className='rev-count'>Review Count:
                                    <span className='rev-count-num'>{topThree && topThree[1][1]}</span></div>
                            </div>
                        </div>
                        <div className='each-container'>
                            <i className="fa-solid fa-burger third"></i>
                            <div className='eachlink-container'>
                                <div className="link-div">
                                    <Link to={`/burgerjoints/${thirdRev?.id}`}>{thirdRev?.title}</Link>
                                </div>
                                <div className='rev-count'>Review Count:
                                    <span className='rev-count-num'>{topThree && topThree[2][1]}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TopBurgers;
