import { useState} from "react";
import moment from "moment";
import ReactDom from "react-dom";

const Modal = ({setIsModalOpen, resultHours, time, calculatorMode}) => {
    const [bedTime, setBedTime] = useState(resultHours[0]);
    const [minutesBeforeBedTime, setminutesBeforeBedTime] = useState('15');
    const [notificationSound, setNotificationSound] = useState('/audio/juntos.mp3');

    const parseTimeToDate = (time) => moment(time, 'HH:mm')._d;

    const handleNotificationButton = (time, bedTime, calculatorMode) => {
        const currentTime = new Date();
        const currentTimeMinutes = (currentTime.getHours() * 60) + currentTime.getMinutes();

        let timeout = 0;
        
        if (calculatorMode === 'sleep') {
            const dateTime = parseTimeToDate(time);
            // console.log('DateTime: ' + dateTime);

            const notificationTime = moment(dateTime).subtract(minutesBeforeBedTime, 'minutes')._d;
            // console.log('NotificationTime: ' + notificationTime)

            const timeoutTime = moment(notificationTime).subtract(currentTimeMinutes, 'minutes')._d;
            // console.log('Timeout time: ' + timeoutTime);

            const timeoutInMiliseconds = (timeoutTime.getHours() * 60) + timeoutTime.getMinutes() * 60000;

            timeout = timeoutInMiliseconds;
        } 
        else if (calculatorMode === 'wake') {
            const dateTime = parseTimeToDate(bedTime);
            // console.log('DateTime: ' + dateTime);

            const notificationTime = moment(dateTime).subtract(minutesBeforeBedTime, 'minutes')._d;
            // console.log('NotificationTime: ' + notificationTime)

            const timeoutTime = moment(notificationTime).subtract(currentTimeMinutes, 'minutes')._d;
            // console.log('Timeout time: ' + timeoutTime);

            const timeoutInMiliseconds = (timeoutTime.getHours() * 60) + timeoutTime.getMinutes() * 60000;

            timeout = timeoutInMiliseconds;
            // console.log('timeout: ' + timeout)
        }


        setTimeout(() => {
            const options = {
                icon: 'favicon.png',
                body: `You should fall asleep at ${calculatorMode === 'sleep' ? time : bedTime}`
            }

            const audio = new Audio(notificationSound);
            new Notification("Hey, it's time to sleep 😴", options)
            audio.play();
        }, timeout)

        setIsModalOpen(false);
    }

    return ReactDom.createPortal(
        <>  
            <div className="overlay" onClick={() => setIsModalOpen(false)}> </div>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title"> Notification settings</h2>
                    <i className="fas fa-times modal__close" onClick={() => setIsModalOpen(false)}></i>
                </div>

                <div className="modal__section">
                    <p>Bedtime hour:</p>
                    {calculatorMode === 'wake' && 
                        <select value={bedTime} onChange={(e) => setBedTime(e.target.value)}>
                            {resultHours.map((hour) => {
                                return <option value={hour} key={hour}> {hour} </option>
                            })}
                        </select>
                    }
                    {calculatorMode === 'sleep' && <span>{time}</span>}
                </div>

                <div className="modal__section">
                    <p>Notify me ... before bedtime:</p>
                    <select value={minutesBeforeBedTime} onChange={(e) => setminutesBeforeBedTime(e.target.value)}>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                        <option value="15">15 min</option>
                        <option value="30">30 min</option>
                        <option value="60">1 hour</option>
                        <option value="120">2 hours</option>
                    </select>
                </div>

                <div className="modal__section">
                    <p>Notification sound:</p>
                    <select value={notificationSound} onChange={(e) => setNotificationSound(e.target.value)}>
                        <option value="">None</option>
                        <option value='/audio/juntos.mp3'>Juntos</option>
                        <option value='/audio/crickets.mp3'>Crickets</option>
                    </select>
                </div>

                <p className="modal__warning">Do not close the page, otherwise the notification will not work!</p>

                <button className="modal__button" onClick={() => handleNotificationButton(time, bedTime, calculatorMode)}>Set up the notification</button>
            </div>
        </>, document.getElementById('modal')
     );
}
 
export default Modal;
