import { connect } from 'react-redux';
import * as action from '../store/actions/index';
import Contact from '../components/Contact';


const mapStateToProps = (state) => {
  return {
    isError: state.ContactReducer.isError,
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    UploadDetails: (name, emailId, phoneNumber, message) => dispatch(action.UploadContactForm(name, emailId, phoneNumber, message)),
  }
}


const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

export default ContactContainer;
