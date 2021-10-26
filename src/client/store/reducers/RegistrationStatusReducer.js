import checkRegistrationOpen from "../../Utils/helpers/checkRegistrationOpen";
import checkResultPublished from "../../Utils/helpers/checkResultPublished";

const initialState = {
  registrationOpen: checkRegistrationOpen,
  resultsAvailable: checkResultPublished
};

const RegistrationStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default RegistrationStatusReducer;