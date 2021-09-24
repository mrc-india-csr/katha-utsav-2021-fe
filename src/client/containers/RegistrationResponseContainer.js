import { connect } from 'react-redux';
import * as action from '../store/actions/index';
import PaymentStatus from '../components/PaymentStatus';


const mapStateToProps = (state) => {
    return {
        displayResponsePopUp: state.RegistrationResponseReducer.showPopUp,
        registrationStatus: state.RegistrationResponseReducer.registrationStatus,
        registrationComment: state.RegistrationResponseReducer.registrationComment,
        orderId: state.RegistrationResponseReducer.orderId,
        displayShowLoader: state.RegistrationResponseReducer.displayShowLoader
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showResponsePopUp: (value) => dispatch(action.showResponsePopUp(value)),
        setRegistrationData: (status, message) => dispatch(action.setRegistrationData(status, message)),
        showLoader: (value) => dispatch(action.showLoader(value)),
    }
}

const RegistrationResponseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentStatus);

export default RegistrationResponseContainer;
