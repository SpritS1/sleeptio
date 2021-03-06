import { useEffect, useState } from "react";
import Modal from "../Modal";
import Popup from "../Popup";

const NotificationButton = ({resultHours, time, calculatorMode}) => {
    // const [isNotificationSet, setIsNotificationSet] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    return ( 
        <>  
            {showPopup && <Popup text={'Notification set'} setShowPopup={setShowPopup} />}
            {isModalOpen && <Modal 
                setIsModalOpen={setIsModalOpen} 
                resultHours={resultHours} 
                time={time} 
                calculatorMode={calculatorMode}
                setShowPopup={setShowPopup}
            />}
            <button className="notification-button" onClick={() => {
                if ('Notification' in window) {
                    Notification.requestPermission(() => {
                        if (Notification.permission === 'granted') {
                            setIsModalOpen(true);
                        } else if (Notification.permission === "denied") {
                            alert("Notifications blocked. Please enable them in your browser.");
                        }
                    })
                    // .then(() => {
                    //     if (Notification.permission === 'granted') {
                    //         setIsModalOpen(true);
                    //     } else if (Notification.permission === "denied") {
                    //         alert("Notifications blocked. Please enable them in your browser.");
                    //     }
                    // })                    
                } else {
                    alert('Your browser does not support notifications 😔')
                }

                }}>Notify me
            </button>
        </>
     );
}
 
export default NotificationButton;