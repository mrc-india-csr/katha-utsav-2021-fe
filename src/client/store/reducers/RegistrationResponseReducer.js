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

    case actionTypes.SET_REGISTRATION_STATUS:
      return {
        ...state,
        registrationStatus: action.setRegistrationStatus
      }
      
      
    case actionTypes.SET_REGISTRATION_COMMENT:
      return {
        ...state,
        registrationComment: action.setRegistrationComments
      }
      
    default:
      return state;
  }
}

export default RegistrationResponseReducer;