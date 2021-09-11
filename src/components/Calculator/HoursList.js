import Hour from "./Hour";

const HoursList = ({resultHours}) => {
    return ( 
        <ul className='hours-list'>
            {resultHours && resultHours.map((hour) => {
                return <Hour hour={hour} key={hour}></Hour>
            })}
        </ul>
     );
}
 
export default HoursList;