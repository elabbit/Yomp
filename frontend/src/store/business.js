import { csrfFetch } from './csrf';

const GET_ALLBUS = 'business/GET_ALLBUS';
const GET_ONEBUS = 'business/GET_ONEBUS';
const ADD_BUS = 'business/ADD_BUS';
const EDIT_BUS = 'business/EDIT_BUS';
const DELETE_BUS = 'business/DELETE_BUS';

const getAllBus = busList => ({
  type: GET_ALLBUS,
  busList
})

const addBus = bus => ({
  type: ADD_BUS,
  bus
})


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



const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALLBUS:
      const loadState = { ...state }
      action.busList.forEach(bus => (loadState[bus.id] = bus))
      return loadState;

    case ADD_BUS:
      console.log(action)
      return {...state, [action.bus.id]: {...action.bus}}
    default:
      return state;
  }
}
export default businessReducer;
