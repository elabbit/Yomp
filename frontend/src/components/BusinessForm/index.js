import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { states } from '../../Data/states';
import { addBusiness } from '../../store/business';


const addBusinessForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSubmit = async (e) => {
e.preventDefault();

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

if(createdBus) {
    history.push(`/business/${createdBus.id}`)
}
    }

    const handleCancelClick = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Add A Business</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    );
}

export default addBusinessForm;
