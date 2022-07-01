
import { NavLink } from 'react-router-dom'
import StarRating from "../StarRating";
import './BusinessList.css'


const BusinessList = ({ businesses }) => {

    const formatNumber = (number) => {
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
    }

    return (
        <>

            <div id='list-container'>
                {businesses.map(bus => (
                    <div className='businesslist-box' key={`div${bus.title}`}>
                        <div className="businesslist-nav">
                            <NavLink key={bus.id} to={`/burgerjoints/${bus.id}`}>{bus.title}</NavLink>
                        </div>
                        <StarRating key={`rating${bus.title}`} rating={bus.rating} />
                        <div className="businesslist-add">
                            <div>{bus.address}</div>
                            <div>{bus.city}, {bus.state} {bus.zipcode}</div>
                            <div id="phone-number">{formatNumber(bus.phoneNumber)}</div>
                        </div>

                        <p className="businesslist-des">
                            {bus.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )

}

export default BusinessList;
