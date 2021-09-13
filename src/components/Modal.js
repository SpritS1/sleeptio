import { useState } from "react";
import ReactDom from "react-dom";

const Modal = ({setIsModalOpen}) => {
    return ReactDom.createPortal(
        <>  
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}> </div>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title"> Notification </h2>
                    <i class="fas fa-times modal__close" onClick={() => setIsModalOpen(false)}></i>
                </div>
            </div>
        </>,
        document.getElementById('modal')
     );
}
 
export default Modal;
