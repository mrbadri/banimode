import "./Footer.scss"; 
import FooterList from "./FooterList/FooterList";
import imgLogo from "./../../assets/pics/banilogo.png" ; 
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import imglicense1 from "./../../assets/pics/license/license1.png";
import imglicense2 from "./../../assets/pics/license/license2.png";
import imglicense3 from "./../../assets/pics/license/license3.png";
import imglicense4 from "./../../assets/pics/license/license4.png";


const footerListData =  [
    {title: "خرید" , list : ["خرید لباس" ,"لباس مردانه" ,"لباس زنانه" ,"لباس بچگانه" ,"خرید لوازم آرایشی"]} ,
    {title: "خرید" , list : ["خرید لباس" ,"لباس مردانه" ,"لباس زنانه" ,"لباس بچگانه" ,"خرید لوازم آرایشی"]} ,
    {title: "خرید" , list : ["خرید لباس" ,"لباس مردانه" ,"لباس زنانه" ,"لباس بچگانه" ,"خرید لوازم آرایشی"]} ,
]


const Footer = () => {
    return ( 
        <div className="Footer border-t-4 border-gray-100 pt-5 sm:pt-10  pb-2 sm:pb-4  ">
            <div className="Footer-up container-custom mx-auto flex justify-between mb-10">
                <div className="Footer-up-left flex justify-between w-9/12">
                    <FooterList data={footerListData[0]} />
                    <FooterList data={footerListData[1]} />
                    <FooterList data={footerListData[2]} />
                    <div className="Footer-up-left-contact w-4/12 leading-9 text-gray-900">
                        <div className="Footer-up-left-contact-title">
                            میزبان صدای گرمتان هستیم        
                        </div>
                        <div className="Footer-up-left-contact-time">
                            7 روز هفته - 24 ساعته
                        </div>
                        <div className="Footer-up-left-contact-info text-base flex flex-wrap leading-9">
                            <span className="text-gray-600">
                            تلفن:
                            <a href="tel:021-49215" className="text-gray-900 hover:text-green-500 mr-2">
                            021-49215
                            </a>
                            </span>
                            <span className="text-gray-600 md:mr-3">
                            پیامک:
                            <a href="tel:021-49215" className="text-gray-900 hover:text-green-500 mr-2">
                            10001654
                            </a>
                            </span>
                            <span className="text-gray-600">
                            ایمیل:
                            <a href="tel:021-49215" className="text-gray-900 hover:text-green-500 mr-2">
                            customer@banimode.com
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Footer-up-right">
                    <img src={imgLogo} className="w-full mb-5" />
                    <button className="mb-5 btn-B w-full rounded-full py-2 px-3">
                        <SaveAltIcon className="ml-2"/>
                        <span>دانلود اپلیکیشن</span>
                    </button>
                    <div className="flex justify-between">
                        <div className="p-3  border border-gray-800 rounded-full cursor-pointer hover:text-green-500 hover:border-green-500 transition">
                            <InstagramIcon style={{ fontSize: 30 }} className="" />
                        </div>
                        <div className="p-3  border border-gray-800 rounded-full cursor-pointer hover:text-green-500 hover:border-green-500 transition">
                            <TelegramIcon style={{ fontSize: 30 }} className="" />
                        </div>
                        <div className="p-3  border border-gray-800 rounded-full cursor-pointer hover:text-green-500 hover:border-green-500 transition">
                            < YouTubeIcon style={{ fontSize: 30 }} className="" />
                        </div>
                        <div className="p-3  border border-gray-800 rounded-full cursor-pointer hover:text-green-500 hover:border-green-500 transition">
                            <TwitterIcon style={{ fontSize: 30 }} className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-down  container-custom mx-auto flex justify-between mb-10">
                <div className="Footer-down-left w-7/12 ">
                    <div className="Footer-down-left-title text-xl text-gray-500 mb-4">
                        فروشگاه اینترنتی پوشاک بانی مد  
                    </div>
                    <div className="Footer-down-left text-gray-700 text-sm">
                        <p className="text-justify leading-8 ">
                            مرکز خرید آنلاین بانی‌مد فعالیت خود را در زمینۀ پوشاک به‌صورت تخصصی از سال 1393 آغاز نمود و طی این سال‌ها توانسته ضمن همکاری با بیش از 400 برند ایرانی و بین‌المللی، در مسیر بهبود تجربۀ خرید آنلاین پوشاک در ایران گام بردارد. مهم‌ترین رسالت بانی‌مد بهبود کیفیت سبک زندگی است که رضایت اکثریت مشتریان گرامی از این فروشگاه اینترنتی گواهی بر این ادعاست؛ رضایتی که پشتوانه‌ای استوار برای تحقق
                            &nbsp;
                            <span className="text-green-500 cursor-pointer hover:text-green-600">
                            بیشتر بخوانید
                            </span>
                        </p>
                        
                        <p className="leading-8">

                        </p>
                   
                    </div>
                </div>
                <div className="Footer-down-right flex items-center justify-end ">
                    <img src={imglicense1} className="w-1/6 cursor-pointer mx-1" />
                    <img src={imglicense2} className="w-1/6 cursor-pointer mx-1" />
                    <img src={imglicense3} className="w-1/6 cursor-pointer mx-1" />
                    <img src={imglicense4} className="w-1/6 cursor-pointer mx-1" />
                </div>
            </div>
            <div className="Footer-copy-right container-custom mx-auto text-sm flex text-gray-400 justify-between">
                <p>
                © کلیه حقوق این وب سایت متعلق به 
                &nbsp;
                <span className="hover:text-green-500 cursor-pointer">
                تیم کورسا
                </span>
                &nbsp;
                 است.
                </p>
                <p className="ltr">
                    © Copyright 2021 
                    <span className="hover:text-green-500 cursor-pointer">
                        Coursa Team
                    </span>
                </p>
            </div>
        </div>
     );
}
 
export default Footer;