import * as actionTypes from '../actions/actionTypes';

const initialState ={
  SchoolRegistrationStepTwoValidInfo: [
    {
      studentName: '',
      studentEmail: '',
      studentPhone: '',
      studentClass: '',
      storyCategory: '',
      storyPath: {}
    }
  ],
  SchoolRegistrationStepTwoErrorInfo: [
    {
      studentName: '',
      studentEmail: '',
      studentPhone: '',
      studentClass: '',
      storyCategory: '',
      storyPath: ''
    }
  ],
}

const SchoolRegistrationStepTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALID_SUCCESS_SCHOOL_STEPTWO:
      const { schoolName,emailId,phoneNumber,schoolCoordinatorName,city } = action.stepOneData
      const SchoolRegistrationStepOneValidInfo = {schoolName,emailId,phoneNumber,schoolCoordinatorName,city}
      return {
        ...state,
        SchoolRegistrationStepOneValidInfo,
        SchoolRegistrationStepOneErrorInfo : {
          schoolNameMessage: "",
          emailIdMessage:"",
          phoneNumberMessage:"",
          schoolCoordinatorNameMessage:"",
          cityMessage:"",
          isError: false
        },
        step:2
      }
    case actionTypes.VALID_FAIL_SCHOOL_STEPTWO:
      return {
        ...state,
        SchoolRegistrationStepOneErrorInfo: action.errorPayload
      }
    default:
      return state;
  }
};

export default SchoolRegistrationStepTwoReducer;