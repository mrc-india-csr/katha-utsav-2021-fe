import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from '../../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    stepTwoMessage: state.SchoolRegistrationStepTwoReducer.SchoolRegistrationStepTwoErrorInfo,
  }};


const mapDispatchToProps = (dispatch) => {
  return {
    validateDetailsStepTwo: (stepTwoData) => dispatch(action.validateStepTwo(stepTwoData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);