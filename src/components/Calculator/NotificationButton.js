import { useState } from "react";
import Modal from "../Modal";

const NotificationButton = ({resultHours}) => {
    const [isNotificationSet, setIsNotificationSet] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    return ( 
        <>  
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} resultHours={resultHours}/>}
            <button className="notification-button" onClick={() => setIsModalOpen(true)}>Notify me</button>
        </>
     );
}
 
export default NotificationButton;