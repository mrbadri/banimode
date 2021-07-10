import "./Header.scss";
import Popup from "../Popup/Popup";
import { useState } from "react";


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
                onClick={
                    () => {
                        setPopupOpen(true)
                    }
                }
                >ورود / ثبت نام</button>
            </div>
            <div className="Header-down">
                Header down
            </div>

            <Popup open={popupOpen} handle={handlePopup} />
        </div>
     );
}
 
export default Header;