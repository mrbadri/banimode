
import "./WhyUs.scss";
import imgWhyUsDelivery from "./../../../assets/pics/why us/delivery.svg";
import imgWhyUsOriginality from "./../../../assets/pics/why us/originality.svg";
import imgWhyUsSupport from "./../../../assets/pics/why us/support.svg";
import imgWhyUsWarranty from "./../../../assets/pics/why us/warranty.svg";


const WhyUs = () => {
    return ( 
        <div className="WhyUs  flex flex-wrap justify-around">

            <div className="WhyUs-box   ">
                <div className="WhyUs-box-bg"></div>
                <img src={imgWhyUsDelivery}  className=" WhyUs-box-img"/>
                <div className="WhyUs-box-title ">
                     ارسال سریع و رایگان 
                </div>
                <div className="WhyUs-box-text ">
                    ارسال رایگان برای خریدهای بالای 200 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                </div>
            </div>

            <div className="WhyUs-box   ">
                <div className="WhyUs-box-bg"></div>
                <img src={imgWhyUsOriginality}  className=" WhyUs-box-img"/>
                <div className="WhyUs-box-title ">
                ضمانت اصالت     
                </div>
                <div className="WhyUs-box-text ">
                    ارسال رایگان برای خریدهای بالای 200 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                </div>
            </div>

            <div className="WhyUs-box  ">
                <div className="WhyUs-box-bg"></div>
                <img src={imgWhyUsWarranty}  className=" WhyUs-box-img"/>
                <div className="WhyUs-box-title ">
                ضمانت بازگشت کالا 
                </div>
                <div className="WhyUs-box-text ">
                    ارسال رایگان برای خریدهای بالای 200 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                </div>
            </div>

            <div className="WhyUs-box  ">
                <div className="WhyUs-box-bg"></div>
                <img src={imgWhyUsSupport}  className=" WhyUs-box-img"/>
                <div className="WhyUs-box-title ">
                خدمات پس از فروش 
                </div>
                <div className="WhyUs-box-text ">
                    ارسال رایگان برای خریدهای بالای 200 هزار تومان و در زمان انتخابی مشتری به سریعترین شکل ممکن می‌باشد.
                </div>
            </div>
        </div>
     );
}
 
export default WhyUs;