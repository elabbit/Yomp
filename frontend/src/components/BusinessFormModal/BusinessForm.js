import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { states } from '../../Data/states';
import { addBusiness } from '../../store/business';
import "./BusinessForm.css"


const BusinessForm = ({ hideModal }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = []
        if (title.length > 50) errors.push('Title can not exceed 50 characters.')
        if (description.length > 500) errors.push('Description can not exceed 500 characters.')
        if (address.length > 50) errors.push('Address can not exceed 50 characters.')
        if (city.length > 30) errors.push('City can not exceed 30 characters.')
        if (zipcode.length !== 5 || isNaN(zipcode)) errors.push('Zip Code must be 5 numerical digits.')
        if (phoneNumber.length !== 10 || isNaN(phoneNumber)) errors.push('Phone number must be 10 numerical digits.')
        if (website.length > 300) errors.push('URL can not exceed 300 characters.')
        setValidationErrors(errors)

    }, [title, description, address, city, zipcode, phoneNumber, website]);


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
            phoneNumber,
            website,
            ownerId: sessionUser.id
        };

        let createdBus = await dispatch(addBusiness(newBus))

        if (createdBus) {
            history.push(`/burgerjoints/${createdBus.id}`)
            hideModal();
        }
    }

    return (
        <div id="addbus-form-container">
            <div id="addbus-header">
                <h2>add burger joint</h2>
            </div>

            <div id="error-container">
                {hasSubmitted &&
                    <ul className="errors">
                        {
                            validationErrors.map(error => (
                                <li key={error}>{error}</li>
                            ))
                        }
                    </ul>}
            </div>

            <form id="addbus-form" onSubmit={handleSubmit}>
                <div id="addbus-input-container">

                    <input
                        className="addbus-input single"
                        type="title"
                        placeholder="Name"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)} />

                    <input
                        className="addbus-input single"
                        type="address"
                        placeholder="Address"
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)} />
                    <div id="bus-add-span" className='single'>
                        <input
                        id="add-city"
                            className="addbus-input"
                            type="city"
                            placeholder="City"
                            required
                            value={city}
                            onChange={e => setCity(e.target.value)} />
                        <select className="addbus-input" id="add-state" onChange={e => setState(e.target.value)} value={state}>
                            {states.map(state =>
                                <option key={state}>{state}</option>
                            )}
                        </select>
                        <input
                        id="add-zipcode"
                        maxLength={5}
                            className="addbus-input"
                            type="zipcode"
                            placeholder="Zip Code"
                            value={zipcode}
                            onChange={e => setZipcode(e.target.value)} />
                    </div>
                    <input
                        className="addbus-input single"
                        type="phonenumber"
                        placeholder="Phone Number (no spaces or dashes)"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} />
                    <input
                        className="addbus-input single"
                        type="website"
                        placeholder="Website URL (Optional)"
                        value={website}
                        onChange={e => setWebsite(e.target.value)} />
                    <textarea
                    id="add-description"
                        className="addbus-input single"
                        type="description"
                        placeholder="Description"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <div id="addbus-btn-container">
                    <button type="submit" disabled={hasSubmitted && !!validationErrors.length}>Add Business</button>
                    <button onClick={hideModal}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default BusinessForm;
