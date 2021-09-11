import HoursList from "./HoursList";

const CalcResult = ({resultHours, calculatorMode}) => {
    return ( 
        <div className="calc-result">
            <h2>You should {calculatorMode === 2 ? 'fall asleep' : 'wake up' } at one of the following hours:</h2>
            <HoursList resultHours={resultHours}></HoursList>
        </div>
     );
}
 
export default CalcResult;