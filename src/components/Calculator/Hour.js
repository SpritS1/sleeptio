const Hour = ({hour, hoursOfSleep, sleepCycles}) => {
    return ( 
        <li className='hour'>
            <h4 className="hour__time">{hour}</h4>
            <p className="hour__info">{hoursOfSleep} hours of sleep, {sleepCycles} sleep cycles</p>
        </li>
     );
}
 
export default Hour;