import { connect } from 'react-redux';
import _ from 'lodash';
import * as action from '../store/actions/index';
import PaymentStatus from '../components/PaymentStatus';


const mapStateToProps = (state) => {
    return {
        displayResponsePopUp: state.RegistrationResponseReducer.showPopUp
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showPopUp: (value) => dispatch(action.showPopUp(value)),
        showResponsePopUp: (value) => dispatch(action.showResponsePopUp(value))
    }
}

const RegistrationResponseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentStatus);

export default RegistrationResponseContainer;
