import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Timeline from '../Timeline/Timeline';
import AboutKatha from '../AboutKatha/AboutKatha';
import KathaHistory from '../KathaHistory/KathaHistory';
import Mentors from '../Mentors/Mentors';
import Process from '../Process/Process';
import Timer from '../Timer/Timer';
import Schedule from '../Schedule/Schedule';
import Footer from '../Footer/Footer'
import Registration from '../Registration/Registration';
import {useSelector} from "react-redux";
import EndRegistration from "../EndRegistration/EndRegistration";
import checkResultPublished from "../../Utils/helpers/checkResultPublished";

const Home = (props) => {
  const {registrationOpen} = useSelector(state => state.RegistrationStatusReducer);

  return (
        <React.Fragment>
            <HeaderComponent {...props}/>
            {registrationOpen ? <Timer /> : <EndRegistration />}
            {checkResultPublished &&  (<div className='second-stage-link-text'>Registration for the second stage is now online! <a href='#'>Sign up now</a> to take your stories to new heights and learn from the very best!!</div>)}
            <Timeline />
            <Process />
            <AboutKatha />
            <Schedule/>
            <KathaHistory />
            <Mentors />
            {registrationOpen && <Registration {...props} />}
            <Footer />
        </React.Fragment>
    );
};

export default Home;