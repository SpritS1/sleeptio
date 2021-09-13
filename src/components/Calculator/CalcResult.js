import HoursList from "./HoursList";
import NotificationButton from "./NotificationButton";

const CalcResult = ({resultHours, calculatorMode}) => {
    return ( 
        <div className="calc-result">
            <h2>You should {calculatorMode === 'wake' ? 'fall asleep' : 'wake up' } at one of the following hours:</h2>
            <HoursList resultHours={resultHours} />
            <NotificationButton />
        </div>
     );
}
 
export default CalcResult;