import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showPopUp: false
}

const RegistrationResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_RESPONSE_POPUP:
      return {
        ...state,
        showPopUp: action.showPopUp
      }
    default:
      return state;
  }
}

export default RegistrationResponseReducer;