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
        <Route exact path="/" render={() => <div className='home-page'><HomePage/></div>}/>
        <Route path="/individual-registration" render={() => <IndividualRegistrationContainer/>}/>
        <Route path="/school-registration" render={() => <SchoolRegistration/>}/>
        <Route path="/contact" render={() => <ContactContainer/>}/>
      </Switch>
      <Loader/>
      <RegistrationResponseContainer/>
    </Router>
  );
};

export default AppContainer;