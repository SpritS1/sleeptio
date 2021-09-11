import moment from "moment";
import { useEffect, useState } from "react";

const CurrentTimeResults = (props) => {
    const calcWakeTime = (time) => {
        const result = moment(time).add(90 * 6, 'minutes')._d;
        return moment(result).format('HH:mm');   
    };

    const [currentTime, setCurrentTime] = useState(moment(new Date()))
    const [wakeTime, setWakeTime] = useState('');
    
    useEffect(() => {
        setWakeTime(() => calcWakeTime(currentTime))
        setTimeout(() => setCurrentTime(new Date()), 60000)
    }, [currentTime])

    return ( 
        <div className="current-time-results">
            <h2>If you go to sleep now you should wake up at:</h2>
            <span className='current-time-results__result'>{wakeTime}</span>
        </div>
     );
}
 
export default CurrentTimeResults;