import { csrfFetch } from './csrf';

const GET_ALLREV = 'review/GET_ALLREV';
const ADD_REV = 'review/ADD_REV';
const EDIT_REV = 'review/EDIT_REV';
const DELETE_REV = 'review/DELETE_REV';
const CLEAR_REV = 'review/CLEAR_REV';


const getAllRev = revList => ({
  type: GET_ALLREV,
  revList
})

const addRev = rev => ({
  type: ADD_REV,
  rev
})

const editRev = rev => ({
  type: EDIT_REV,
  rev
})

const deleteRev = id => ({
  type: DELETE_REV,
  id
})

export const clearReviews = () => ({
  type: CLEAR_REV
})




export const getRecentReviews = () => async dispatch => {
  const response = await csrfFetch(`/api/review/recent`);

  if (response.ok) {
    const revList = await response.json();
    dispatch(getAllRev(revList));
  }
};

export const getReviews = (id) => async dispatch => {

  const response = await csrfFetch(`/api/review/${id}`);

  if (response.ok) {
    const revList = await response.json();
    dispatch(getAllRev(revList));
  }
};

export const addReview = (newRev, photos) => async dispatch => {

  const response = await csrfFetch(`/api/review/${newRev.businessId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({newRev, photos})
  });

  if (response.ok) {
    const createdRev = await response.json();
    dispatch(addRev(createdRev));
    return createdRev;
  }
};

export const editReview = (editedRev, photos) => async dispatch => {

  const response = await csrfFetch(`/api/review/${editedRev.businessId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({editedRev, photos})
  });

  if (response.ok) {
    const edited = await response.json();
    dispatch(editRev(edited));
    return edited;
  }
};

export const deleteReview = (id) => async dispatch => {

  const response = await csrfFetch(`/api/review/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const id = await response.json();
    dispatch(deleteRev(id));
    return id;
  }
};


const reviewReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALLREV:
      return [...action.revList];

    case ADD_REV:
      return [action.rev, ...state]

    case EDIT_REV:
      const editState = [...state]
      const replaceRev = editState.find((rev) => rev.id === action.rev.id)
      replaceRev.Photos = [...action.rev.Photos]
      replaceRev.rating = action.rev.rating;
      replaceRev.review = action.rev.review;
      return editState;
    case DELETE_REV:
      const newState = [...state];
      const delIndex = newState.findIndex(obj => obj.id === +action.id)
      newState.splice(delIndex, 1)
      return newState;
case CLEAR_REV:
  return null;

    default:
      return state;
  }
}
export default reviewReducer;
