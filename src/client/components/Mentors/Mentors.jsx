import React from 'react';
import Mentor1 from '../../assets/images/mentor-1.png';
import Mentor2 from '../../assets/images/mentor-2.png';
import Mentor3 from '../../assets/images/mentor-3.png';
import Mentor4 from '../../assets/images/mentor-4.png';
import Mentor5 from '../../assets/images/mentor-5.png';
import Mentor6 from '../../assets/images/mentor-6.png';

const Profile = ({image, name, description, link = '#'}) => {
    return (
        <a className='profile' href={link} target='_blank'>
            <img src={image} alt=""/>
            <div className='profile__name'>{name}</div>
            <div className='profile__description'>{description}</div>
        </a>
    );
}
const Mentors = () => {
    return (
        <React.Fragment>
            <div id='mentors' className='mentors'>
                <h3>Mentors</h3>
                <div className='mentors__container'>
                    <div className='mentors__container--box'>
                        <Profile image={Mentor1} name='Rachana Kulshrestha' description='Performance Poet' link='https://www.linkedin.com/in/rachanakulshrestha/'/>
                        <Profile image={Mentor2} name='Savi Sarin' description='Performance Storyteller' link='https://weaveatale.com/'/>
                        <Profile image={Mentor3} name='Vikram Sridhar' description='Performance Storyteller and Poet' link='https://www.linkedin.com/in/vikramsridhar1/'/>
                    </div>
                    <div className='mentors__container--box'>
                        <Profile image={Mentor4} name='Dr Shivani Kanodia' description='Performance Poet' link='https://www.linkedin.com/in/dr-shivani-kanodia-0a596827/'/>
                        <Profile image={Mentor5} name='Amita Khare' description='Performance Storyteller'/>
                        <Profile image={Mentor6} name='Swetha Prakash' description='Performance Storyteller' link='https://www.clippings.me/swethaprakash'/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Mentors;