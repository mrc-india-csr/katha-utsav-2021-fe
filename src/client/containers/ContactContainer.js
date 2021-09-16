import { connect } from 'react-redux';
import * as action from '../store/actions/index';
import Contact from '../components/Contact';


const mapStateToProps = (state) => {
  return {
    isError: state.ContactReducer.isError,
    showSnackBar: state.ContactReducer.showSnackBar
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: (value) => dispatch(action.showLoader(value)),
    showSnackBarFunc: (value) => dispatch(action.isSnackBarVisible(value)),
    UploadDetails: (name, emailId, phoneNumber, message) => dispatch(action.UploadContactForm(name, emailId, phoneNumber, message)),
    showResponsePopUp: (value) => dispatch(action.showResponsePopUp(value)),
    setRegistrationData: (status, message) => dispatch(action.setRegistrationData(status, message))
  }
}


const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
