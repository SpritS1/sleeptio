
const ModeButtons = ({calculatorMode, setCalculatorMode}) => {
    return ( 
        <>
            {/* <h2>What time should I...</h2> */}
            <div className='mode-buttons'>
                <button className={`mode-buttons__button ${calculatorMode === 1 ? 'active' : ''}`} onClick={() => setCalculatorMode(1)}>Fall asleep</button>
                <button className={`mode-buttons__button ${calculatorMode === 2 ? 'active' : ''}`} onClick={() => setCalculatorMode(2)}>Wake up</button>
            </div>
            <h2>If you want to {calculatorMode === 1 ? 'fall asleep' : 'wake up' } at...</h2>
        </>
     );
}
 
export default ModeButtons;