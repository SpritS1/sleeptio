import HoursList from "./HoursList";

const CalcResult = () => {
    return ( 
        <div className="calc-result">
            <h2>You should fall asleep at one of the following hours:</h2>
            <HoursList></HoursList>
        </div>
     );
}
 
export default CalcResult;