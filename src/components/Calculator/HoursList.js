import Hour from "./Hour";

const HoursList = ({resultHours, calculatorMode}) => {
    let sleepCycles = 6
    let hoursOfSleep = 10.5;

    return ( 
        <ul className='hours-list'>
            {resultHours && resultHours.map((hour) => {
                return <Hour hour={hour} hoursOfSleep={hoursOfSleep -= 1.5} sleepCycles={sleepCycles--} key={hour}></Hour>
            })}
        </ul>
     );
}
 
export default HoursList;