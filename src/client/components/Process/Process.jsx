import React, {useState} from 'react';
import Step1 from '../../assets/images/step-1.png';
import Step2 from '../../assets/images/step-2.png';
import Step3 from '../../assets/images/step-3.png';

const TableOfContents = ({context, header, content}) => {

    function returnValue(content, key) {
        return <li key={key}>{content}</li>
    }

  return (
      <div>
          <div className='context-header'>{context}</div>
          <h4>{header}</h4>
          <ul>
              {content.map(returnValue)}
          </ul>
      </div>
  );
};

const Process = () => {
    const [option, setOption] = useState(0);
    const contents = [
        {
            context: 'Stage 1 Upload Stories',
            header: 'Here’s what we’re looking for in your entries',
            content: [
                'Fiction / Non-Fiction / Poems (up to 1200 words)',
                'Writing that delves deep into personal experiences, memories, feelings, pleasures, and imagination.',
                'Upbeat writing, nothing too serious',
                'Most importantly, be You! Submit stories that represent your inner voice, your talent and your originality.'
            ]
        },
        {
            context: 'Stage 2 Know Your Stories',
            content: [
                '"Know Your Stories!" is the level 2 at Katha Utsav that will be happening for two weekends where selected students — post the evaluation process — will be mentored by India\'s best literary professionals for two weeks.',
                'Each student will be asked to write a story/poem specific to his or her genre to culminate the intensive two-week workshop.',
                'Selected stories will make it to the GRAND FINALE! '
            ]
        },
        {
            context: 'Stage 3 Be the Writer',
            header: 'Four-week intensive workshops on Saturday & Sunday',
            content: [
                'The GRAND FINALE is a four-week workshop process for the students selected from the level 2 - "KNOW YOUR MENTOR", wherein they will experience an advance mentoring process and each student will participate in the CHALLENGE GROUNDS.',
                'The jury-selected stories will be awarded the KATHA National Writers\' Workshop Certificate and will also win a chance to get their stories featured on Katha\'s digital platforms.',
            ]
        }
        ];
    return (
        <React.Fragment>
            <div id='process' className='process'>
                <h3>Process</h3>
                <div className='process__container'>
                    <div className='process__buttons'>
                        <button className={`process__buttons--button ${option == 0 && 'yellow'}`} onClick={() => setOption(0)}>
                            <div className='button-box'>
                                <img src={Step1} alt="" />
                                <div><h5>STAGE 1</h5><p>Upload Stories</p></div></div>
                        </button>
                        <button className={`process__buttons--button ${option == 1 && 'yellow'}`} onClick={() => setOption(1)}>
                            <div className='button-box'>
                                <img src={Step2} alt="" />
                                <div><h5>STAGE 2</h5><p>Know Your Stories</p></div></div>
                        </button>
                        <button className={`process__buttons--button ${option == 2 && 'yellow'}`} onClick={() => setOption(2)}>
                            <div className='button-box'>
                                <img src={Step3} alt="" />
                                <div><h5>STAGE 3</h5><p>Be The Writer</p></div>
                            </div>
                        </button>
                    </div>
                    <div className='process__content'>
                        <TableOfContents context={contents[option].context} header={contents[option].header} content={contents[option].content}/>
                    </div>
                </div>
                <div className='process__footer'>
                    <ol>
                        <div className='process__footer--header'>Note:</div>
                        <li>Each submission at STAGE 1 - "STORY UPLOAD" requires a fee of Rs 150/- for each writing piece.</li>
                        <li>When shortlisted to STAGE 2 - "MASTER YOUR STORY", to confirm participation, each student will need to pay Rs 2500/- for  (Regional + finale), which is non-refundable. This fee takes care of complete 10-day digital workshop experience.</li>
                        <li>Paying the registration fee (Rs. 150/- for each submission), does not automatically guarantee a berth in STAGE 2 - "MASTER YOUR STORY" - it will happen after a stringent process of shortlisting.</li>
                    </ol>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Process;