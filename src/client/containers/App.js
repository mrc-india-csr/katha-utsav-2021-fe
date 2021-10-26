import React from 'react';
import {
  BrowserRouter as Router, Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import IndividualRegistrationContainer from '../containers/IndividualRegistrationContainer';
import HomePage from '../containers/HomeContainer';
import SchoolRegistration from '../components/SchoolRegistration';
import RegistrationResponseContainer from './RegistrationResponseContainer';
import Loader from '../components/Loader/Loader';
import ContactContainer from './ContactContainer';
import {useSelector} from "react-redux";

const AppContainer = () => {
  const {registrationOpen} = useSelector(state => state.RegistrationStatusReducer);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div className='home-page'><HomePage/></div>}/>
        { registrationOpen && <Route path="/individual-registration" render={() => <IndividualRegistrationContainer/>}/> }
        { registrationOpen && <Route path="/school-registration" render={() => <SchoolRegistration/>}/> }
        <Route path="/contact" render={() => <ContactContainer/>}/>
        <Redirect to="/" />
      </Switch>
      <Loader/>
      <RegistrationResponseContainer/>
    </Router>
  );
};

export default AppContainer;