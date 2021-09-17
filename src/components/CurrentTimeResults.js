import moment from "moment";
import { useEffect, useState } from "react";
import HoursList from './Calculator/HoursList';

const CurrentTimeResults = (props) => {
    const calcWakeTime = (time) => {
        const sleepTime = [];
        for (let i = 5; i <= 6; i++) {
            const result = moment(time).add(90 * i, 'minutes')._d;
            sleepTime.push(moment(result).format('HH:mm'))
        }
        console.log(sleepTime)
        return sleepTime.reverse();   
    };

    const [currentTime, setCurrentTime] = useState(moment(new Date()))
    const [resultHours, setResultHours] = useState('');
    
    useEffect(() => {
        setResultHours(() => calcWakeTime(currentTime))
        setTimeout(() => setCurrentTime(new Date()), 60000)
    }, [currentTime])

    return ( 
        <div className="current-time-results">
            <h2>If you go to sleep in 15 minutes you should wake up at:</h2>
            <HoursList resultHours={resultHours}></HoursList>
            {/* <span className='current-time-results__result'>{wakeTime}</span>
            <span className='current-time-results__result'>{wakeTime}</span> */}
        </div>
     );
}
 
export default CurrentTimeResults;