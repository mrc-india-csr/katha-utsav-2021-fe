import * as actionTypes from "./actionTypes";

export const showResponsePopUp = (showPopUp) => {
  return {
    type: actionTypes.SHOW_RESPONSE_POPUP,
    showPopUp
  }
}

export const setRegistrationData = (status, message) => {
  return {
    type: actionTypes.SET_REGISTRATION_DATA,
    status,
    message
  }
}

export const showLoader = (showLoader) => {
  return {
    type: actionTypes.SHOW_LOADER,
    showLoader
  }
}
