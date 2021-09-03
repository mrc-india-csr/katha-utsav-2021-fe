import * as actionTypes from './actionTypes';

export const validateStepTwo = (stepTwoData) => {
  return {
    type: actionTypes.VALID_INITIATE_SCHOOL_STEPTWO,
    stepTwoData
  }
}

export const validateSuccessSchoolStepTwo = (stepTwoFormData) => {
  return {
    type: actionTypes.VALID_SUCCESS_SCHOOL_STEPTWO,
    stepTwoFormData
  }
}

export const validateFailSchoolStepTwo = (stepTwoErrorData) => {

  return {
    type: actionTypes.VALID_FAIL_SCHOOL_STEPTWO,
    stepTwoErrorData
  }
}


