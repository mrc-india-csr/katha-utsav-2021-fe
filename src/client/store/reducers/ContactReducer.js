import * as actionTypes from '../actions/actionTypes';

const initialState ={
    isError: false,
}

const ContactReducer = (state = initialState, action) => {
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