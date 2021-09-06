import * as actionTypes from "./actionTypes";

export const showResponsePopUp = (showPopUp) => {
  return {
    type: actionTypes.SHOW_RESPONSE_POPUP,
    showPopUp
  }
}