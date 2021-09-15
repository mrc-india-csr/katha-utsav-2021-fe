import * as actionTypes from '../actions/actionTypes';



const ContactReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.IS_UPLOAD_SUCCESS:
            return{
                isError: action.isError,
                showSnackBar: true
            }
        case actionTypes.SHOW_SNACK_BAR:
            return{
                showSnackBar: action.value
            }
        default:
            return state;
    }
};

export default ContactReducer;