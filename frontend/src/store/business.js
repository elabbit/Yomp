import { csrfFetch } from './csrf';

const GET_ALLBUS = 'business/GET_ALLBUS';
const ADD_BUS = 'business/ADD_BUS';
const EDIT_BUS = 'business/EDIT_BUS';
const DELETE_BUS = 'business/DELETE_BUS';
const GET_RAT = 'business/GET_RAT;'

const getAllBus = busList => ({
  type: GET_ALLBUS,
  busList
})

const addBus = bus => ({
  type: ADD_BUS,
  bus
})

const editBus = bus => ({
  type: EDIT_BUS,
  bus
})

const deleteBus = id => ({
  type: DELETE_BUS,
  id
})

const getRat = payload => ({
  type: GET_RAT,
  payload
})


export const getRating = (id) => async dispatch => {

  const response = await csrfFetch(`/api/business/rating/${id}`);

  if (response.ok) {

    const updatedBusiness = await response.json();
    dispatch(getRat(updatedBusiness));

  }
};

export const getBusinesses = () => async dispatch => {

  const response = await csrfFetch(`/api/business`);

  if (response.ok) {
    const busList = await response.json();
    dispatch(getAllBus(busList));
  }
};

export const addBusiness = (newBus) => async dispatch => {

  const response = await csrfFetch(`/api/business`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBus)
  });

  if (response.ok) {
    const createdBus = await response.json();
    dispatch(addBus(createdBus));
    return createdBus;
  }
};

export const editBusiness = (bus) => async dispatch => {

  const response = await csrfFetch(`/api/business/${bus.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bus)
  });

  if (response.ok) {
    const editedBus = await response.json();
    dispatch(editBus(editedBus));
    return editedBus;
  }
};

export const deleteBusiness = (id) => async dispatch => {

  const response = await csrfFetch(`/api/business/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const businessId = await response.json();
    dispatch(deleteBus(businessId));
    return businessId;
  }
};






const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALLBUS:
      const loadState = { ...state }
      action.busList.forEach(bus => (loadState[bus.id] = bus))
      return loadState;

    case ADD_BUS:
      return { ...state, [action.bus.id]: { ...action.bus } }

    case EDIT_BUS:
      return { ...state, [action.bus.id]: { ...action.bus } }
    case DELETE_BUS:
      const newState = { ...state };
      delete newState[action.id];
      return newState;

    case GET_RAT:
      const updBus = action.payload;
      const newState2 = { ...state }
      newState2[updBus.id].rating = updBus.rating;
      return newState2;
    default:
      return state;
  }
}
export default businessReducer;
