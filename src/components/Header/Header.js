import "./Header.scss";
import Popup from "../Popup/Popup";
import { useState } from "react";
import imgLogo from "./../../assets/pics/banilogo.png"; 
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Category } from "@material-ui/icons";
import Auth from "../subComponents/Auth/Auth";

const categoryListData = [
    {titile: "زنانه" , subTitle : []} ,
    {titile: "مردانه" , subTitle : []} ,
    {titile: "بچگانه" , subTitle : []} ,
    {titile: "سایز بزرگ" , subTitle : []} ,
    {titile: "ورزشی" , subTitle : []} ,
    {titile: "زیبایی و سلامت" , subTitle : []} ,
    {titile: "لوازم خانه" , subTitle : []} ,
    {titile: "بازی و سرگرمی" , subTitle : []} ,
    {titile: "کادو چی بخرم؟" , subTitle : []} ,
    {titile: "برند ها" , subTitle : []} ,
    {titile: "فروش ویژه" , subTitle : []} ,
]

const Header = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const handlePopup = (e) =>{
        if(e.target.id === "popup-around"){
            setPopupOpen(false)
        }
    }

    return ( 
        <div className="Header">

            {/* Header Up */}
            <div className="Header-up container-custom mx-auto text-gray-800 text-base flex justify-between h-12 items-center  my-8">
                <div className="box-right flex h-full items-center">
                <ShoppingCartOutlinedIcon className="ml-2 cursor-pointer"/>
                    <button
                    className="btn-A h-full rounded-full px-5"
                        onClick={
                            () => {
                                setPopupOpen(true)
                            }
                        }
                    >ورود / ثبت نام</button>
                </div>

                <div className="box-center  w-6/12 flex items-center relative h-full">
                    <SearchRoundedIcon className="iconsearch absolute right-3 text-gray-800" />
                    <input className="border-none focus:outline-none bg-transparent w-full h-full px-12  text-gray-700 bg-gray-100 rounded-full" tayp="text" placeholder="جستجو در میان بیش از ۴۰۰ مورد" />
                </div>

                <div className="box-left h-full flex items-center justify-end">
                    <img src={imgLogo} className="h-full"  alt="banimode" />
                </div>

            </div>

            {/* Header Down */}
            <div className="Header-down container-custom mx-auto flex mb-5">
                <ul className="h-full w-full flex justify-center list-disc text-gray-700">
                    <li className="mx-3 md:mx-5 hover:text-green-400 transition cursor-pointer list-none">جدید ترین ها</li>
                    {categoryListData.map(item => (
                         <li className="mx-3 md:mx-5 hover:text-green-400 transition cursor-pointer ">{item.titile}</li>
                    ))}
                </ul>
            </div>

            {/* popup */}
            <Popup open={popupOpen} handle={handlePopup} >
                <Auth></Auth>
            </Popup >
        </div>
     );
}
 
export default Header;