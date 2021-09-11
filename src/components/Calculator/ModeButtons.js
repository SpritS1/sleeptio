
const ModeButtons = ({calculatorMode, setCalculatorMode}) => {
    return ( 
        <>
            {/* <h2>What time should I...</h2> */}
            <div className='mode-buttons'>
                <button className={`mode-buttons__button ${calculatorMode === 'sleep' ? 'active' : ''}`} onClick={() => setCalculatorMode('sleep')}>Fall asleep</button>
                <button className={`mode-buttons__button ${calculatorMode === 'wake' ? 'active' : ''}`} onClick={() => setCalculatorMode('wake')}>Wake up</button>
            </div>
            <h2>If you want to {calculatorMode === 1 ? 'fall asleep' : 'wake up' } at...</h2>
        </>
     );
}
 
export default ModeButtons;