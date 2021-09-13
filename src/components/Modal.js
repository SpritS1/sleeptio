import ReactDom from "react-dom";

const Modal = ({setIsModalOpen, resultHours}) => {
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
                    <select name="" id="">
                        {resultHours.map((hour) => {
                            return <option>{hour} </option>
                        })}
                    </select>
                </div>
                <div className="modal__section">
                    <p>Notify me ... before bedtime:</p>
                    <select name="" id="">
                        <option value="">5 min</option>
                        <option value="">10 min</option>
                        <option value="">15 min</option>
                        <option value="">30 min</option>
                        <option value="">1 hour</option>
                        <option value="">2 hours</option>
                    </select>
                </div>
                <div className="modal__section">
                    <p>Notification sound:</p>
                    <select name="" id="">
                        <option value="">None</option>
                        <option value="">Juntos</option>
                        <option value="">Crickets</option>
                    </select>
                </div>
                <p className="modal__warning">Do not close the page, otherwise the notification will not work!</p>
                <button className="modal__button" onClick={() => {
                    setIsModalOpen(false)
                    
                }}>Set up the notification</button>
            </div>
        </>,
        document.getElementById('modal')
     );
}
 
export default Modal;
