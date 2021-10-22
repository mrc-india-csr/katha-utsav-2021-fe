import React, {useState, useEffect} from 'react';

const Timer = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date('11/04/2021') - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <React.Fragment>
            <div className='timer'>
                <h3>Registration ends in</h3>
                <div className='timer__time-left'>
                    <div className='timer__time-left--container'><span className='timer__time-left--value'>{timeLeft.days}</span><span className='timer__time-left--desc'>days</span></div>:
                    <div className='timer__time-left--container'><span className='timer__time-left--value'>{timeLeft.hours}</span><span className='timer__time-left--desc'>hours</span></div>:
                    <div className='timer__time-left--container'><span className='timer__time-left--value'>{timeLeft.minutes}</span><span className='timer__time-left--desc'>mins</span></div>:
                    <div className='timer__time-left--container'><span className='timer__time-left--value'>{timeLeft.seconds}</span><span className='timer__time-left--desc'>secs</span></div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Timer;