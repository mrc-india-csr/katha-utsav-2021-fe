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
      let errorObject = []
      for (let step = 0; step < action.stepTwoFormData.length; step++) {
        const errorObjectData = {
          studentName: '',
          studentEmail: '',
          studentPhone: '',
          studentClass: '',
          storyCategory: '',
          storyPath: ''
        }
        errorObject.push(errorObjectData)
      }
      state.SchoolRegistrationStepTwoValidInfo = action.stepTwoFormData
      state.SchoolRegistrationStepTwoErrorInfo = errorObject
      return {
        ...state
      }
    case actionTypes.VALID_FAIL_SCHOOL_STEPTWO:
      return {
        ...state,
        SchoolRegistrationStepTwoErrorInfo: action.stepTwoErrorData
      }
    default:
      return state;
  }
};

export default SchoolRegistrationStepTwoReducer;