import React from 'react';
import Podium from '../../assets/images/timeline-podium.png';
import India from '../../assets/images/timeline-india.png';
import Meeting from '../../assets/images/timeline-meeting.png';
import Online from '../../assets/images/timeline-online.png';
import Poet from '../../assets/images/timeline-poet.png';

const ImageWithContent = ({image, content}) => {
    return (
      <div className='image-with-content'>
          <img src={image} alt="" />
          <div className='image-with-content__content'>{content}</div>
      </div>
    );
}
const Timeline = () => {
    return (
      <React.Fragment>
          <div className='timeline'>
              <h3 id="whykatha">Why you should be part of Katha Utsav ?</h3>
              <div className='timeline__flagship'>
                  <div className='timeline__flagship--content'>The Utsav is Katha’s flagship event in building skills of expression in children, whether they identify themselves as poets, authors, or social media activists. As our geographical boundaries disappear, children need to develop respect for our traditions while accepting different cultures. An important message that the Katha Utsav conveys is that children need to focus on self-improvement, and not an unhealthy competition, and hence the journey during the Utsav is always in the form of workshops, and knowledge sharing, and not on who emerged a winner. For us, every child is a winner, if only we could accommodate so many.</div>
                  <div><img src={Podium} alt="" /></div>
              </div>
              <h4>Katha’s Impact in <span className='yellow'>7 years!</span></h4>
              <div className='timeline__impact'>
                  <div className='timeline__impact--content'>
                      <div><span className='purple'>1,00,000+</span> students PARTICIPATED</div>
                      <div><span className='purple'>35,000+</span> schools ENGAGED</div>
                      <div><span className='purple'>1,200+</span> poets, writers and authors COLLABORATED</div>
                  </div>
                  <div className='timeline__impact--box'>
                      <div className='timeline__impact--images'>
                          <ImageWithContent image={India} content='PAN India Participation'/>
                          <ImageWithContent image={Poet} content='Master-classes by renowned poets and writers.'/>
                      </div>
                      <div className='timeline__impact--images'>
                          <ImageWithContent image={Meeting} content='Meeting with publishers and literary agents.'/>
                          <ImageWithContent image={Online} content='An opportunity to publish your work online.'/>
                      </div>
                  </div>

              </div>
          </div>
      </React.Fragment>
    );
}

export default Timeline;