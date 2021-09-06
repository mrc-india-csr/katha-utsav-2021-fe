import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showPopUp: false,
  registrationStatus: '',
  registrationComment: ''
}

const RegistrationResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_RESPONSE_POPUP:
      return {
        ...state,
        showPopUp: action.showPopUp
      }
    case actionTypes.SET_REGISTRATION_DATA:
      return {
        ...state,
        registrationStatus: action.status,
        registrationComment: action.message
      }
    default:
      return state;
  }
}

export default RegistrationResponseReducer;