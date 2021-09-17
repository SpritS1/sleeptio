const Hour = ({hour, hoursOfSleep, sleepCycles, isRecommended}) => {
    return ( 
        <li className={`hour ${isRecommended ? 'recommended' : ''}`}>
            <h4 className="hour__time">{hour}</h4>
            <p className="hour__info">{hoursOfSleep} hours of sleep, {sleepCycles} sleep cycles</p>
        </li>
     );
}
 
export default Hour;