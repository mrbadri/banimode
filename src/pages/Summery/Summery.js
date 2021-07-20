import "./Summery.scss";
import Slider from "../../components/subComponents/Slider/Slider";
import imgCategory1 from "./../../assets/pics/main category/mainCategory1.jpg"
import imgCategory2 from "./../../assets/pics/main category/mainCategory2.jpg"
import imgCategory3 from "./../../assets/pics/main category/mainCategory3.jpg"
import imgCategory4 from "./../../assets/pics/main category/mainCategory4.jpg"
import imgCategory5 from "./../../assets/pics/main category/mainCategory5.jpg"
import imgCategory6 from "./../../assets/pics/main category/mainCategory6.jpg"
import WhyUs from "./WhyUs/WhyUs";
import MultiSlider from "../../components/subComponents/MultiSlider/MultiSlider";
import NewsLetters from "../../components/subComponents/Newsletters/Newsletters";
import imgSuggestionA1 from "./../../assets/pics/suggestion/suggestionA1.jpg";
import imgSuggestionA2 from "./../../assets/pics/suggestion/suggestionA2.jpg";
import imgSuggestionB1 from "./../../assets/pics/suggestion/suggestionB1.jpg";
import imgSuggestionB2 from "./../../assets/pics/suggestion/suggestionB2.jpg";
import imgSuggestionB3 from "./../../assets/pics/suggestion/suggestionB3.jpg";
import imgSuggestionB4 from "./../../assets/pics/suggestion/suggestionB4.jpg";


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

         
          <div className="my-5 co flex-growntainer-custom mx-auto">
            <MultiSlider />
          </div>
         
          <div className="suggestion flex flex-col flex-wrap container-custom mx-auto max-w-full justify-center mb-20">
            <div className="suggestion-row  flex justify-center max-w-full">
              <img src={imgSuggestionA1} className=" rounded-lg cursor-pointer shadow w-5/12 flex-auto ml-3 md:ml-8   " />
              <img src={imgSuggestionA2} className=" rounded-lg cursor-pointer shadow w-5/12 flex-auto  " />
            </div>
          </div>

          <div className="my-5 co flex-growntainer-custom mx-auto">
            <MultiSlider />
          </div>

          <div className="suggestion flex flex-col flex-wrap container-custom mx-auto max-w-full justify-center mb-20">
            <div className="suggestion-row mb-3 md:mb-8 flex justify-center max-w-full">
              <img src={imgSuggestionB1} className=" rounded-lg cursor-pointer shadow w-5/12 flex-auto ml-3 md:ml-8   " />
              <img src={imgSuggestionB2} className=" rounded-lg cursor-pointer shadow w-5/12 flex-auto  " />
            </div>
            <div className="suggestion-row  mb-3 md:mb-8 flex justify-center max-w-full">
              <img src={imgSuggestionB3} className=" rounded-lg cursor-pointer shadow w-5/12 flex-auto ml-3 md:ml-8   " />
              <img src={imgSuggestionB4} className=" rounded-lg cursor-pointer shadow w-5/12 flex-auto   " />
            </div>
          </div>

          <div className="Summery-why-us container-custom mx-auto my-16  ">
            <WhyUs /> 
          </div>

          <div className="Summery-news-letters container-custom mx-auto mb-24">
            <NewsLetters />
          </div>

        </div>
     );
}
 
export default Summery;



