import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBusinesses } from "../../store/business";
import BusinessList from "../BusinessList";
import "./BusinessListSorter.css"



const BusinessListSorter = () => {
    const businesses = Object.values(useSelector(state => state.business))
    const [sortType, setSortType] = useState('default');
    const [sorted, setSorted] = useState(null)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch])

    useEffect(() => {

        if (sortType === 'default') {
            setSortType(businesses)
        } else if (sortType === 'highest') {
            setSorted(businesses.sort((a, b) => b.rating - a.rating))
        } else if (sortType === 'lowest') {
            setSorted(businesses.sort((a, b) => a.rating - b.rating))
        } else if (sortType === 'alpha') {
            setSorted(businesses.sort((a, b) => {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1; }
                return 0;
            }))
        }
        console.log(sorted)
    }, [sortType])


    return (
        <div className="body-container">
            <div className="body-content">
                <div id="big-businesslist-container">
                    <div id='businesslist-container'>
                        <div id='businesslist-header'>
                            <h2>Browse Burger Joints</h2>
                            <div className='sort-nav-div'>
                                <div className='button-container'>

                                    <button className='sort-nav-but' onClick={() => setSortType('highest')}>Highest Rated</button>
                                    <button className='sort-nav-but' onClick={() => setSortType('lowest')}>Lowest Rated</button>
                                    <button className='sort-nav-but' onClick={() => setSortType('alpha')}>A-Z</button>
                                </div>
                            </div>
                        </div>
                        {sorted ?
                            <BusinessList businesses={sorted} />
                            :
                            (businesses &&
                                (<BusinessList businesses={businesses} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BusinessListSorter;
