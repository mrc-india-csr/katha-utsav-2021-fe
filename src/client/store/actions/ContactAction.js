import * as actionTypes from './actionTypes';


export const UploadContactForm = (name, emailId, phoneNumber,message) => {
    return {
        type: actionTypes.Upload_Data_Initiate,
        name,
        emailId,
        phoneNumber,
        message
    }
}

export const isUploadSuccess = (value) => {
    return {
        type: actionTypes.IS_UPLOAD_SUCCESS,
        isError: value
    }
}


