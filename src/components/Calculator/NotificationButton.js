import { useState } from "react";
import Modal from "../Modal";

const NotificationButton = ({resultHours, time, calculatorMode}) => {
    // const [isNotificationSet, setIsNotificationSet] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    return ( 
        <>  
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} resultHours={resultHours} time={time} calculatorMode={calculatorMode}/>}
            <button className="notification-button" onClick={() => {
                Notification.requestPermission()
                .then(() => {
                    if (Notification.permission === 'granted') {
                        setIsModalOpen(true);
                    } else if (Notification.permission === "denied") {
                        alert("Notifications blocked. Please enable them in your browser.");
                      }
                })
                }}>Notify me
            </button>
        </>
     );
}
 
export default NotificationButton;