import { useState } from "react";
import ReactDom from "react-dom";

const Modal = ({setIsModalOpen, resultHours}) => {
    const [bedTimeHour, setBedTimeHour] = useState(resultHours[0]);
    const [notificationTime, setNotificationTime] = useState('30');
    const [notificationSound, setNotificationSound] = useState('/audio/juntos.mp3');

    return ReactDom.createPortal(
        <>  
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}> </div>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title"> Notification settings</h2>
                    <i class="fas fa-times modal__close" onClick={() => setIsModalOpen(false)}></i>
                </div>

                <div className="modal__section">
                    <p>Bedtime hour:</p>
                    <select value={bedTimeHour} onChange={(e) => setBedTimeHour(e.target.value)}>
                        {resultHours.map((hour) => {
                            return <option>{hour} </option>
                        })}
                    </select>
                </div>

                <div className="modal__section">
                    <p>Notify me ... before bedtime:</p>
                    <select value={notificationTime} onChange={(e) => setNotificationTime(e.target.value)}>
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

                <button className="modal__button" onClick={() => {
                    setTimeout(() => {
                        const icon = 'favicon.png'
                        const audio = new Audio(notificationSound);
                        new Notification("Hey, it's time to sleep!", {body: `You should fall asleep at ${bedTimeHour}`, icon})
                        audio.play();
                    }, 5000)

                    setIsModalOpen(false)
                }}>Set up the notification</button>
            </div>
        </>, document.getElementById('modal')
     );
}
 
export default Modal;
