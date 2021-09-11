import './App.css';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="app">
      <div className="app__main-page">
        <Navbar />
        <Calculator />        
      </div>
      <div className="app__about">
        <h1>An online sleep cycles calculator to improve your sleep quality</h1>

        <h2>What is Sleeptio?</h2>
        <p>
          Sleeptio is a simple sleep cycles calculator that works on desktop and mobile. 
          The aim of this app is to improve your sleep quality by calculating the best time to fall asleep or to wake up.
        </p>

        <h2>What are sleep cycles?</h2>
        <p>The sleep cycle is an oscillation between the slow-wave and REM phases of sleep. It is sometimes called the ultradian sleep cycle, sleep–dream cycle, or REM-NREM cycle, to distinguish it from the circadian alternation between sleep and wakefulness. In humans this cycle takes about <b>90 mins</b>. - <a target="_blank" rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Sleep_cycle'>Wikipedia</a></p>

        <h2>Sleep tips</h2>
        <ul>
          <li>Most people take about 14 minutes to fall asleep,</li>
          <li>Increase bright light exposure during the day, </li>
          <li>Reduce blue light exposure in the evening,</li>
          <li>Don't consume caffeine late in the day,</li>
          <li>Reduce irregular or long daytime naps,</li>
          <li>Each cycle lasts roughly 90 minutes and you should pass through five or six of them each night,</li>
          <li>Waking up mid-cycle can leave you feeling grumpy and tired, that's why you should wake up in between those phases.</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
