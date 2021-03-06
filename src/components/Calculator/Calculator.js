import ModeButtons from "./ModeButtons";
import NotificationButton from "./NotificationButton";
import CalcResult from "./CalcResult";
import { useEffect, useState } from "react";
import moment from "moment";

const Calculator = () => {
   const [time, setTime] = useState('');
   const [calculatorMode, setCalculatorMode] = useState('sleep');
   const [resultHours, setResultHours] = useState([])

   const parseToDate = (time) => {
      const date = moment(time, 'HH:mm')._d;
      return date;
   }

   useEffect(() => {     
      const calculateSleepHours = (time, mode) => {
         const convertedTime = parseToDate(time);
         const sleepTime = [];
         
         for (let i = 3; i <= 6; i++) {
            let calculatedTime;
            if (mode === 'sleep') {
               calculatedTime = moment(convertedTime).add(90 * i, 'minutes')._d;
            } else if (mode === 'wake') {
               calculatedTime = moment(convertedTime).subtract(90 * i, 'minutes')._d;
            }
   
            const calcTimeHours = String(calculatedTime.getHours());
            let calcTimeMinutes = String(calculatedTime.getMinutes());

            if (calcTimeMinutes.length === 1) {
               calcTimeMinutes = '0' + calcTimeMinutes;
            }

            const StringDate = calcTimeHours + ':' + calcTimeMinutes;
            sleepTime.push(StringDate);
         }
         return sleepTime;
      }

      if (time) {
         const sleepHours = calculateSleepHours(time, calculatorMode).reverse();

         if (calculatorMode === 'sleep') {
            setResultHours(sleepHours);   
         } else if (calculatorMode === 'wake') {
            setResultHours(sleepHours);         
         } 
      }

   }, [time, calculatorMode])

   return ( 
      <div className='calculator'> 
         <ModeButtons calculatorMode={calculatorMode} setCalculatorMode={setCalculatorMode}/>
         <input type="time" className="time-input" value={time} onChange={(e) => setTime(e.target.value)}/>
         {resultHours.length !== 0 && <>
            <CalcResult resultHours={resultHours} calculatorMode={calculatorMode}/>
            <NotificationButton resultHours={resultHours} time={time} calculatorMode={calculatorMode}/>
         </>}
      </div>
   );
     
}
 
export default Calculator;