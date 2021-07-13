import "./Summery.scss";
import Slider from "../../components/subComponents/Slider";
import imgCategory1 from "./../../assets/pics/main category/mainCategory1.jpg"
import imgCategory2 from "./../../assets/pics/main category/mainCategory2.jpg"
import imgCategory3 from "./../../assets/pics/main category/mainCategory3.jpg"
import imgCategory4 from "./../../assets/pics/main category/mainCategory4.jpg"
import imgCategory5 from "./../../assets/pics/main category/mainCategory5.jpg"
import imgCategory6 from "./../../assets/pics/main category/mainCategory6.jpg"
import WhyUs from "./WhyUs/WhyUs";

const Summery = () => {
    return ( 
        <div className="Summery">

          <div className="Summery-slider">
            <Slider/>
          </div>

          <div className="Summery-main-category container-custom mx-auto flex justify-center  sm:justify-around  flex-wrap py-16">
            <div className="Summery-main-category-box ">
              <img src={imgCategory1} className=""/>
              <span className="overlay" ></span>
            </div>
            
            <div className="Summery-main-category-box ">
              <img src={imgCategory2}/>
              <span className="overlay" ></span>
            </div>
            <div className="Summery-main-category-box ">
              <img src={imgCategory3}/>
              <span className="overlay"></span>
            </div>
            <div className="Summery-main-category-box ">
              <img src={imgCategory4}/>
              <span className="overlay"></span>
            </div>
            <div className="Summery-main-category-box ">
              <img src={imgCategory5}/>
              <span className="overlay"></span>
            </div>
            <div className="Summery-main-category-box ">
              <img src={imgCategory6}/>
              <span className="overlay"></span>
            </div>
          </div>

          <div className="Summery-why-us container-custom mx-auto  ">
            <WhyUs /> 
          </div>

        </div>
     );
}
 
export default Summery;



