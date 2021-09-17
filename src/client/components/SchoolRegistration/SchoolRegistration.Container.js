import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

const mapStateToProps = (state) => {
  return {
    step: state.SchoolRegistrationReducer.step,
    showPopUp: state.SchoolRegistrationReducer.showPopUp,
  }};

  const mapDispatchToProps = (dispatch) => {
    return {
      showPopUp: (value) => dispatch(action.showPopUpSchool(value)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps);