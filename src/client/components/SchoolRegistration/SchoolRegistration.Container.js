import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    step: state.SchoolRegistrationReducer.step,
    showPopUp: state.SchoolRegistrationReducer.showPopUp,
  }
};

export default connect(mapStateToProps, null);