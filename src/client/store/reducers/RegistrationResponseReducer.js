import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showPopUp: false,
  registrationStatus: '',
  registrationComment: '',
  orderId: '',
  displayShowLoader: false
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
        registrationComment: action.message,
        orderId: action.orderId
      }
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        displayShowLoader: action.showLoader
      }
    default:
      return state;
  }
}

export default RegistrationResponseReducer;