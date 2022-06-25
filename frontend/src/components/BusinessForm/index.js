import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { states } from '../../Data/states';
import { addBusiness } from '../../store/business';


const BusinessForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = []
        if (title.length > 50) errors.push('Title can not exceed 50 characters.')
        if (description.length > 250) errors.push('Description can not exceed 250 characters.')
        if (address.length > 50) errors.push('Address can not exceed 50 characters.')
        if (city.length > 30) errors.push('City can not exceed 30 characters.')
        if (zipcode.length !== 5 || isNaN(zipcode)) errors.push('Zip Code must be 5 digits.')
        setValidationErrors(errors)

    }, [title, description, address, city, zipcode]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (validationErrors.length) return;

        const newBus = {
            title,
            description,
            address,
            city,
            state,
            zipcode,
            ownerId: sessionUser.id
        };

        let createdBus = await dispatch(addBusiness(newBus))

        if (createdBus) {
            history.push(`/business/${createdBus.id}`)
        }
    }

    const handleCancelClick = () => {
        history.goBack()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {hasSubmitted &&
                    <ul className="errors">
                        {
                            validationErrors.map(error => (
                                <li key={error}>{error}</li>
                            ))
                        }
                    </ul>}
                <input
                    type="title"
                    placeholder="Title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <textarea
                    type="description"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
                <input
                    type="address"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)} />
                <input
                    type="city"
                    placeholder="City"
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                <select onChange={e => setState(e.target.value)} value={state}>
                    {states.map(state =>
                        <option key={state}>{state}</option>
                    )}
                </select>
                <input
                    type="zipcode"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)} />

                <button type="submit"  disabled={hasSubmitted && !!validationErrors.length}>Add A Business</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
}

export default BusinessForm;
