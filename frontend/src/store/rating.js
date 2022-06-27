import { csrfFetch } from './csrf';

const GET_RATING = 'business/GET_RATING';

const getRat = (ratingInfo) => ({
    type: GET_RATING,
    ratingInfo
  })

  export const getRating = (businessId) => async dispatch => {

    const response = await csrfFetch(`/api/rating/${businessId}`);

    if (response.ok) {
      const ratingInfo = await response.json();
      dispatch(getRat(ratingInfo));
    }
  };


  const ratingReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_RATING:
        const loadState = {...state}
 loadState[action.businessId] = action.ratingInfo;
        return loadState;

      default:
        return state;
    }
}

    export default ratingReducer;
