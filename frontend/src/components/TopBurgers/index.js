
import { Link } from "react-router-dom";
import StarRating from "../StarRating";
import "./TopBurgers.css"


const TopBurgers = ({ businesses }) => {


    const sorted = businesses.sort((a, b) => b.rating - a.rating)

    console.log(sorted);

    return (
        sorted ?
            (
                <div>
                    <h2>Top Rated Burgers</h2>
                    <div id="burger-container">
                        <div className='each-container'>
                            <i id="first" class="fa-solid fa-burger"></i>
                            <div className='eachlink-container'>
                                <Link>{sorted[0]?.title}</Link>
                                <StarRating rating={sorted[0]?.rating} ></StarRating>
                            </div>
                        </div>
                        <div className='each-container'>
                            <i id="second" class="fa-solid fa-burger"></i>
                            <div className='eachlink-container'>
                                <Link>{sorted[1]?.title}</Link>
                                <StarRating rating={sorted[1]?.rating} ></StarRating>
                            </div>
                        </div>
                        <div className='each-container'>
                            <i id="third" class="fa-solid fa-burger"></i>
                            <div className='eachlink-container'>
                                <Link>{sorted[2]?.title}</Link>
                                <StarRating rating={sorted[2]?.rating} ></StarRating>
                            </div>
                        </div>
                    </div>

                </div>


            )
            :
            <h4>Loading...</h4>
    )
}

export default TopBurgers;
