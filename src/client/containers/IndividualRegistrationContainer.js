import { connect } from 'react-redux';
import _ from 'lodash';
import IndividualRegistration from '../components/IndividualRegistration';
import * as action from '../store/actions/index';


const mapStateToProps = (state) => {
  return {
    nameMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.nameMessage,
    emailIdMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.emailIdMessage,
    phoneNumberMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.phoneNumberMessage,
    SchoolMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.SchoolMessage,
    CityMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.CityMessage,
    ClassMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.ClassMessage,
    StoryCategoryMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.StoryCategoryMessage,
    fileDataMessage: state.IndividualRegistrationReducer.IndividualRegistrationErrorInfo.fileDataMessage,
    showPopUp: state.IndividualRegistrationReducer.showPopUp,
    showResponsePopUp: state.RegistrationResponseReducer.showResponsePopUp
  }};

const mapDispatchToProps = (dispatch) => {
  return {
    validateDetails: (name, emailId, phoneNumber,School,City,Class,StoryCategory,fileData) => dispatch(action.validate(name, emailId, phoneNumber,School,City,Class, StoryCategory,fileData)),
    showPopUp: (value) => dispatch(action.showPopUp(value)),
    showResponsePopUp: (value) => dispatch(action.showResponsePopUp(value)),
    setRegistrationData: (status, message) => dispatch(action.setRegistrationData(status, message)),
    showLoader: (value) => dispatch(action.showLoader(value))
  }
}

const IndividualRegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualRegistration);

export default IndividualRegistrationContainer;
