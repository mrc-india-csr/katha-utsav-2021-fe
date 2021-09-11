import * as actionTypes from '../actions/actionTypes';



const ContactReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.IS_UPLOAD_SUCCESS:
            return{
                isError: action.isError
            }
        default:
            return state;
    }
};

export default ContactReducer;