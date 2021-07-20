import "./Popup.scss";

const Popup = (props) => {
    return ( 
        <div className={"Popup " +  props.open } id="popup-around" onClick={props.handle}>
            <div className="Popup-content" id="popup-content">
                {props.children}
            </div>
        </div>
     );
}
 
export default Popup;