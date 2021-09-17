import * as actionTypes from '../actions/actionTypes';

const initialState ={
    showPopUp: false,
    step: 1
}

const SchoolRegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_SHOW_POPUP_SCHOOL:
            return{
                ...state,
                showPopUp: action.showPopUp,
                step: 1
            }
        case actionTypes.UPDATE_STEP:
            return{
                ...state,
                step: 2
            }
        default:
            return state;
    }
};

export default SchoolRegistrationReducer;