import { useState } from "react";

const NotificationButton = () => {
    const [isNotificationSet, setIsNotificationSet] = useState(false);
    
    return ( 
        <button className="notification-button">
            Notify me
        </button>
     );
}
 
export default NotificationButton;