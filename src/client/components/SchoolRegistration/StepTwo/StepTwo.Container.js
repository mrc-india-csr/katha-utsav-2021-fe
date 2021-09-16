import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from '../../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    stepTwoMessage: state.SchoolRegistrationStepTwoReducer.SchoolRegistrationStepTwoErrorInfo,
    stepOneData: state.SchoolRegistrationStepOneReducer.SchoolRegistrationStepOneValidInfo
  }};


const mapDispatchToProps = (dispatch) => {
  return {
    validateDetailsStepTwo: (stepTwoData) => dispatch(action.validateStepTwo(stepTwoData)),
    showLoader: (value) => dispatch(action.showLoader(value)),
    showResponsePopUp: (value) => dispatch(action.showResponsePopUp(value)),
    setRegistrationData: (status, message, orderId) => dispatch(action.setRegistrationData(status, message, orderId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps);