import { csrfFetch } from './csrf';

const TOPREV_BUS = 'review/TOPREV_BUS';


const getTopRev = topThreeList => ({
    type: TOPREV_BUS,
    topThreeList

    })

export const getTopReviewed = () => async dispatch =>{
    const response = await csrfFetch(`/api/business/topreviewed`);

    if (response.ok) {
      const topThreeList = await response.json();
      dispatch(getTopRev(topThreeList));
    }
  };


  const miscReducer = (state = {}, action) => {
    switch (action.type) {

  case TOPREV_BUS:
     const newState = {};

     newState.topThreeRev = [...action.topThreeList];
    // action.topThreeList.forEach((ele)=> newState[ele[0]] = ele[1])


    return newState;
      default:
        return state;
    }
  }
  export default miscReducer;
