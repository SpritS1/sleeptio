import ModeButtons from "./ModeButtons";
import CalcResult from "./CalcResult";
import { useEffect, useState } from "react";
import moment from "moment";

const Calculator = () => {
   const [time, setTime] = useState('');
   const [calculatorMode, setCalculatorMode] = useState(1);
   const [resultHours, setResultHours] = useState([])

   const parseToDate = (time) => {
      const date = new Date();
      date.setHours(time.substr(0, 2), time.substr(3, 2), 0)
      console.log(date)
      return date;
   }

   useEffect(() => {     
      if (time) {
         const convertedTime = parseToDate(time);
         const sleepTime = [];
         
         for (let i = 4; i <= 6; i++) {
            let calculatedTime;
            if (calculatorMode === 1) {
               calculatedTime = moment(convertedTime).add(90 * i, 'minutes')._d;
            } else if (calculatorMode === 2) {
               calculatedTime = moment(convertedTime).subtract(90 * i, 'minutes')._d;
            }

            const calcTimeHours = String(calculatedTime.getHours());
            let calcTimeMinutes = String(calculatedTime.getMinutes());

            if (calcTimeMinutes.length === 1) {
               calcTimeMinutes += '0';
            }

            const StringDate = calcTimeHours + ':' + calcTimeMinutes;
            sleepTime.push(StringDate);
         }

         setResultHours(sleepTime);         
      }

   }, [time, calculatorMode])

   useEffect(() => {
      console.log(resultHours);
   })

   return ( 
      <div className='calculator'> 
         <ModeButtons calculatorMode={calculatorMode} setCalculatorMode={setCalculatorMode}/>
         <input type="time" className="time-input" value={time} onChange={(e) => setTime(e.target.value)}/>
         <CalcResult resultHours={resultHours} calculatorMode={calculatorMode}/>
      </div>
   );
     
}
 
export default Calculator;