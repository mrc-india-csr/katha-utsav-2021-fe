import { connect } from 'react-redux';
import * as action from '../../../store/actions/index';

const mapStateToProps = (state) => {
  return {
  }};

const mapDispatchToProps = (dispatch) => {
  console.log('container')
  return {
    validateDetails: (stepTwoData) => dispatch(action.validateStepTwo(stepTwoData)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps);