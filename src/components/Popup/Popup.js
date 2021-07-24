import "./Popup.scss";

const Popup = (props) => {
    return ( 
        <div className={"Popup flex justify-center items-center fixed inset-0 z-40  " +  props.open } id="popup-around" onClick={props.handle}>
            
                {props.children}
            
        </div>
     );
}
 
export default Popup;