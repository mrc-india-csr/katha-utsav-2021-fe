import * as actionTypes from './actionTypes';


export const validateSchoolStepOne = (schoolName,emailId,phoneNumber,schoolCoordinatorName,city) => {
    return {
        type: actionTypes.VALID_INITIATE_SCHOOL_STEPONE,
        schoolName,emailId,phoneNumber,schoolCoordinatorName,city
    }
}

export const validateSuccessSchoolStepOne = (schoolName,emailId,phoneNumber,schoolCoordinatorName,city) => {
    const stepOneData = {
        schoolName,emailId,phoneNumber,schoolCoordinatorName,city
    }
    return {
        type: actionTypes.VALID_SUCCESS_SCHOOL_STEPONE,
        stepOneData
    }
}

export const validateFailSchoolStepOne = (schoolNameMessage,emailIdMessage,phoneNumberMessage,schoolCoordinatorNameMessage,cityMessage) => {
    const errorPayload = {
        schoolNameMessage,
        emailIdMessage,
        phoneNumberMessage,
        schoolCoordinatorNameMessage,
        cityMessage
    };
    return {
        type: actionTypes.VALID_FAIL_SCHOOL_STEPONE,
        errorPayload
    }
}

export const updateStep = () => {
    return {
        type: actionTypes.UPDATE_STEP,
    }
}