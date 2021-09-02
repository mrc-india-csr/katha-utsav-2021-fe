import * as actionTypes from './actionTypes';


export const validate = (name, emailId, phoneNumber, School, City, Class, StoryCategory, fileData) => {
    return {
        type: actionTypes.Upload_Data_Initiate,
        name,
        emailId,
        phoneNumber,
        contact
    }
}

