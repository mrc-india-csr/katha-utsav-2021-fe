import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Timeline from '../Timeline/Timeline';
import AboutKatha from '../AboutKatha/AboutKatha';
import KathaHistory from '../KathaHistory/KathaHistory';
import Mentors from '../Mentors/Mentors';
import Process from '../Process/Process';
import Timer from '../Timer/Timer';
import Schedule from '../Schedule/Schedule';

const Home = (props) => {
    return (
        <React.Fragment>
            <HeaderComponent {...props}/>
            <Timer />
            <Timeline />
            <Process />
            <AboutKatha />
            <Schedule/>
            <KathaHistory />
            <Mentors />
        </React.Fragment>
    );
};

export default Home;