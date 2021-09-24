import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import IndividualRegistrationContainer from '../containers/IndividualRegistrationContainer';
import HomePage from '../containers/HomeContainer';
import SchoolRegistration from '../components/SchoolRegistration';
import RegistrationResponseContainer from './RegistrationResponseContainer';
import Loader from '../components/Loader/Loader';
import ContactContainer from './ContactContainer';

const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/individual-registration" render={() => <IndividualRegistrationContainer/>}/>
        <Route exact path="/school-registration" render={() => <SchoolRegistration/>}/>
        <Route exact path="/contact" render={() => <ContactContainer/>}/>
        <Route exact path="/" render={() => <div className='home-page'><HomePage/></div>}/>
      </Switch>
      <Loader/>
      <RegistrationResponseContainer/>
    </Router>
  );
};

export default AppContainer;