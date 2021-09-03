import React from 'react';
import Mentor1 from '../../assets/images/mentor-1.png';
import Mentor2 from '../../assets/images/mentor-2.png';
import Mentor3 from '../../assets/images/mentor-3.png';
import Mentor4 from '../../assets/images/mentor-4.png';

const Profile = ({image, name, description}) => {
    return (
        <div className='profile'>
            <img src={image} alt=""/>
            <div className='profile__name'>{name}</div>
            <div className='profile__description'>{description}</div>
        </div>
    );
}
const Mentors = () => {
    return (
        <React.Fragment>
            <div id='mentors' className='mentors'>
                <h3>Mentors</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum dolor sit amet, consectetur </p>
                <div className='mentors__container'>
                    <div className='mentors__container--box'>
                        <Profile image={Mentor1} name='Rachana Kulshrestha' description='Poetry'/>
                        <Profile image={Mentor2} name='Savi Sarin' description='Story'/>
                    </div>
                    <div className='mentors__container--box'>
                        <Profile image={Mentor3} name='Vikram Sridhar' description='Story and Poetry'/>
                        <Profile image={Mentor4} name='Dr Shivani Kanodia' description='Poetry'/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Mentors;