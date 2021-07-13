import "./Header.scss";
import Popup from "../Popup/Popup";
import { useState } from "react";
// import imgSrc from "./../../assets/pics/"


const Header = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopup = (e) =>{
        if(e.target.id === "popup-around"){
            setPopupOpen(false)
        }
    }

    return ( 
        <div className="Header">
            <div className="Header-up">
               
                    <button
                        className="btn"
                        onClick={
                            () => {
                                setPopupOpen(true)
                            }
                        }
                    >
                        ورود / ثبت نام
                    </button>
                    
                
            </div>

            <div className="Header-down">
                down
            </div>

            <Popup open={popupOpen} handle={handlePopup} >
                test popup
            </Popup >
        </div>
     );
}
 
export default Header;