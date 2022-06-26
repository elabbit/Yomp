import { csrfFetch } from './csrf';

const GET_ALLREV = 'review/GET_ALLREV';
const ADD_REV = 'review/ADD_REV';
const EDIT_REV = 'review/EDIT_REV';
const DELETE_REV = 'review/DELETE_REV';

const getAllRev = revList => ({
  type: GET_ALLREV,
  revList
})

const addRev = bus => ({
  type: ADD_REV,
  bus
})

const editRev = bus => ({
  type: EDIT_REV,
  bus
})

const deleteRev = id => ({
  type: DELETE_REV,
  id
})


export const getReviews = (id) => async dispatch => {

  const response = await csrfFetch(`/api/review/${id}`);

  if (response.ok) {
    const revList = await response.json();
    dispatch(getAllRev(revList));
  }
};

export const addReview = (newBus) => async dispatch => {

  const response = await csrfFetch(`/api/business`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBus)
  });

  if (response.ok) {
    const createdBus = await response.json();
    dispatch(addRev(createdBus));
    return createdBus;
  }
};

export const editReview = (bus) => async dispatch => {

  const response = await csrfFetch(`/api/business/${bus.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bus)
  });

  if (response.ok) {
    const editedBus = await response.json();
    dispatch(editRev(editedBus));
    return editedBus;
  }
};

export const deleteReview = (id) => async dispatch => {

  const response = await csrfFetch(`/api/business/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const businessId = await response.json();
    dispatch(deleteRev(businessId));
    return businessId;
  }
};



const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALLREV:
      return [...action.revList];

    case ADD_REV:
      return {...state, [action.bus.id]: {...action.bus}}

    case EDIT_REV:
      return {...state, [action.bus.id]: {...action.bus}}
case DELETE_REV:
  const newState = {...state};
  delete newState[action.id];
  return newState;

    default:
      return state;
  }
}
export default reviewReducer;
