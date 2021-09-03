import IndividualRegistrationReducer from './IndividualRegistrationReducers';
import SchoolRegistrationStepOneReducer from './SchoolRegistration.StepOne.Reducer';
import SchoolRegistrationReducer from './SchoolRegistrationReducer';
import SchoolRegistrationStepTwoReducer from './SchoolRegistration.StepTwo.Reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    IndividualRegistrationReducer,
    SchoolRegistrationStepOneReducer,
    SchoolRegistrationReducer,
    SchoolRegistrationStepTwoReducer
  });

  export default RootReducer;