import ReactDom from "react-dom";

const Popup = ({text = 'Popup text', setShowPopup}) => {

    return ReactDom.createPortal( 
        <div className="popup" onClick={() => {
            setShowPopup(false)
            }
        }>
            <span className="popup__text">{text}</span>
            <i className="fas fa-times popup__close"></i>
        </div>
     , document.getElementById('popup'));
}
 
export default Popup;