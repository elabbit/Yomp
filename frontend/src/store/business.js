
const GET_ALLBUS = 'business/GET_ALLBUS';
const GET_ONEBUS = 'business/GET_ONEBUS';
const ADD_BUS = 'business/ADD_BUS';
const EDIT_BUS = 'business/EDIT_BUS';
const DELETE_BUS = 'business/DELETE_BUS';

const getAllBus = busList => ({
    type: GET_ALLBUS,
    busList
})


export const getBusinesses = () => async dispatch => {

    const response = await fetch(`/api/business`);

    if (response.ok) {
        const busList = await response.json();
      dispatch(getAllBus(busList));
    }
  };




  const businessReducer = (state = [], action) => {
    switch(action.type) {
        case GET_ALLBUS:
            return [...action.busList];
        default:
            return state;
    }
  }
  export default businessReducer;
