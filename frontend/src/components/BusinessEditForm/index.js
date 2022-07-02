import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { states } from '../../Data/states';
import { editBusiness } from '../../store/business';
import ErrorModal from '../ErrorModal';
import './BusinessEditForm.css'


const BusinessEditForm = ({ hideForm, business }) => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState(business.title);
    const [description, setDescription] = useState(business.description);
    const [address, setAddress] = useState(business.address);
    const [city, setCity] = useState(business.city);
    const [state, setState] = useState(business.state);
    const [zipcode, setZipcode] = useState(business.zipcode);
    const [phoneNumber, setPhoneNumber] = useState(business.phoneNumber);
    const [website, setWebsite] = useState(business.website);
    const [validationErrors, setValidationErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);



    useEffect(() => {
        const errors = []
        if (title.length > 50) errors.push('Title can not exceed 50 characters.')
        if (description.length > 500) errors.push('Description can not exceed 500 characters.')
        if (address.length > 50) errors.push('Address can not exceed 50 characters.')
        if (city.length > 30) errors.push('City can not exceed 30 characters.')
        if (zipcode.length !== 5 || isNaN(zipcode)) errors.push('Zip Code must be 5 digits.')
        if (phoneNumber.length !== 10 || isNaN(phoneNumber)) errors.push('Phone number must be 10 numerical digits.')
        if (website.length > 300) errors.push('URL can not exceed 300 characters.')
        setValidationErrors(errors)

    }, [title, description, address, city, zipcode, phoneNumber, website]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validationErrors.length) {
            return setShowModal(true);
        }



        const bus = {
            ...business,
            title,
            description,
            address,
            city,
            state,
            zipcode,
            phoneNumber,
            website,
        };

        let editedBus = await dispatch(editBusiness(bus))

        if (editedBus) {
            hideForm();
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();

    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="edit-businessform">
                    <ErrorModal hideModal={()=>setShowModal(false)} showModal={showModal} validationErrors={validationErrors} />
                <h4>Business Name</h4>
                <input
                    className="bus-edit"
                    id="bus-title"
                    type="title"
                    placeholder="Name"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

                <h4>Address</h4>
                <input
                    className="bus-edit"
                    id="bus-address"
                    type="address"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)} />
                <span id='bus-edit-span'>
                    <input
                        className="bus-edit"
                        id="bus-city"
                        type="city"
                        placeholder="City"
                        required
                        value={city}
                        onChange={e => setCity(e.target.value)} />
                    <select className="bus-edit"
                        id="bus-state" onChange={e => setState(e.target.value)} value={state}>
                        {states.map(state =>
                            <option key={state}>{state}</option>
                        )}
                    </select>
                    <input
                        className="bus-edit"
                        id="bus-zipcode"
                        type="zipcode"
                        placeholder="Zip Code"
                        value={zipcode}
                        onChange={e => setZipcode(e.target.value)} />

                </span>
                <h4>Phone Number (no spaces or dashes)</h4>
                <input
                    className="bus-edit"
                    id="bus-phonenumber"
                    type="phonenumber"
                    placeholder="Phone Number (no spaces or dashes)"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)} />
                <h4>Website (Optional)</h4>
                <input
                    className="bus-edit"
                    id="bus-website"
                    type="website"
                    placeholder="Website URL (Optional)"
                    value={website}
                    onChange={e => setWebsite(e.target.value)} />
                <h4>About</h4>
                <textarea
                    className="bus-edit"
                    id="bus-description"
                    type="description"
                    placeholder="Description"
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
<div id="bus-edit-buttons">
                <button type="submit" >Confirm Edit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
</div>
            </form>
        </div>
    );
}

export default BusinessEditForm;
