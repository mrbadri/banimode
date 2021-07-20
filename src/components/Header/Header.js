import "./Header.scss";
import Popup from "../Popup/Popup";
import { useState } from "react";
import headericonshopping from "../Images/iconshopping.png";
import headericonsearch from "../Images/iconsearch.png";
import headerlogo3 from "../Images/logo3.png";

const Header = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const handlePopup = (e) => {
        if (e.target.id === "popup-around") {
            setPopupOpen(false)
        }
    }

    return (
        <div className="Header">
            <div className="Header-up">

                <img src={headericonshopping} className="icons" alt="banimode" />
                <p>
                    github
                </p>

                <div className="box-right">
                    <button
                    className="btn"
                        onClick={
                            () => {
                                setPopupOpen(true)
                            }
                        }
                    >ورود / ثبت نام</button>
                </div>

                <div className="box-center">
                    <img src={headericonsearch} className=" iconsearch " alt="banimode" />
                    <input className="border-none focus:outline-none bg-transparent w-full text-gray-700" tayp="text" placeholder="جستجو در میان بیش از ۴۰۰ مورد" />
                </div>

                <div className="box-left">
                    <img src={headerlogo3}  alt="banimode" />
                </div>
            </div>

            <div className="Header-down">
            </div>
             <Popup open={popupOpen} handle={handlePopup}>
                 test popup
             </Popup>
        </div>
    );
}

export default Header;