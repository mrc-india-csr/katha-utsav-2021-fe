import * as actionTypes from "./actionTypes";

export const showResponsePopUp = (showPopUp) => {
  return {
    type: actionTypes.SHOW_RESPONSE_POPUP,
    showPopUp
  }
}


export const setRegistrationStatus = (registrationStatus) => {
  return {
    type: actionTypes.SET_REGISTRATION_STATUS,
    registrationStatus
  }
}


export const setRegistrationComments = (registrationComment) => {
  return {
    type: actionTypes.SET_REGISTRATION_COMMENT,
    registrationComment
  }
}

