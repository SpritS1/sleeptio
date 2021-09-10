import ModeButtons from "./ModeButtons";
import CalcResult from "./CalcResult";

const Calculator = () => {
    return ( 
        <div className='calculator'> 
           <ModeButtons />
           <input type="time" className="time-input" />
           <CalcResult />
        </div>
     );
     
}
 
export default Calculator;