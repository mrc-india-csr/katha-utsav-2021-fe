import * as actionTypes from '../actions/actionTypes';

const initialState ={
    SchoolRegistrationStepOneValidInfo:{
    },
    SchoolRegistrationStepOneErrorInfo: {
        schoolNameMessage: '',
        emailIdMessage:'',
        phoneNumberMessage:'',
        schoolCoordinatorNameMessage:'',
        cityMessage:'',
        isError: true
    },
}

const SchoolRegistrationStepOneReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VALID_SUCCESS_SCHOOL_STEPONE:
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
            }
        case actionTypes.VALID_FAIL_SCHOOL_STEPONE:
            return {
                ...state,
                SchoolRegistrationStepOneErrorInfo: action.errorPayload
            }
        default:
            return state;
    }
};

export default SchoolRegistrationStepOneReducer;