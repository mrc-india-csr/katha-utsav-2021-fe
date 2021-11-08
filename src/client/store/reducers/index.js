import IndividualRegistrationReducer from './IndividualRegistrationReducers';
import SchoolRegistrationStepOneReducer from './SchoolRegistration.StepOne.Reducer';
import SchoolRegistrationReducer from './SchoolRegistrationReducer';
import SchoolRegistrationStepTwoReducer from './SchoolRegistration.StepTwo.Reducer';
import RegistrationResponseReducer from "./RegistrationResponseReducer";
import ContactReducer from './ContactReducer';
import { combineReducers } from 'redux';
import RegistrationStatusReducer from "./RegistrationStatusReducer";


const RootReducer = combineReducers({
    IndividualRegistrationReducer,
    SchoolRegistrationStepOneReducer,
    SchoolRegistrationReducer,
    SchoolRegistrationStepTwoReducer,
    RegistrationResponseReducer,
    ContactReducer,
    RegistrationStatusReducer
  });

  export default RootReducer;