import React from 'react';
import { hot } from 'react-hot-loader';
import {
        BrowserRouter as Router,
        Route,
        Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import IndividualRegistrationContainer from '../containers/IndividualRegistrationContainer';
import HomePage from '../containers/HomeContainer';
import SchoolRegistration from '../components/SchoolRegistration';
import RegistrationResponseContainer from './RegistrationResponseContainer';
import Loader from '../components/Loader/Loader';


import ContactContainer from './ContactContainer';
import PaymentStatus from '../components/PaymentStatus';
const AppContainer = (props) => {
        return (
                <Router>
                        <Switch>
                                {(!props.showIndividualPopUp && !props.showSchoolPopUp) && <Route exact path="/" render={() => <div className='home-page'> <HomePage />  </div>} />}
                                {props.showIndividualPopUp && <Route exact path="/" render={() => <IndividualRegistrationContainer />} />}
                                {props.showSchoolPopUp && <Route exact path="/" render={() => <SchoolRegistration/> } />}
                                {<Route exact path="/contact" render={(props) => <ContactContainer/> } />}
                        </Switch>
                        <Loader />
                        <RegistrationResponseContainer />
                </Router>
        );
};

const mapStateToProps = (state) => {
        return {
                showIndividualPopUp: state.IndividualRegistrationReducer.showPopUp,
                showSchoolPopUp: state.SchoolRegistrationReducer.showPopUp,
        }
};


export default connect(
        mapStateToProps,
        null
)(AppContainer);