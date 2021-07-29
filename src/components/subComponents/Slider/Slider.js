import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Slider.scss";
import ImgSlider1 from "./../../../assets/pics/slider/slider1.jpg" ;
import ImgSlider2 from "./../../../assets/pics/slider/slider2.jpg" ;
import ImgSlider3 from "./../../../assets/pics/slider/slider3.jpg" ;
import ImgSlider4 from "./../../../assets/pics/slider/slider4.jpg" ;
import ImgSlider5 from "./../../../assets/pics/slider/slider5.jpg" ;
import ImgSlider6 from "./../../../assets/pics/slider/slider6.jpg";

const Slider = () => {
    return ( 
        <div className="slide-container">
            <Slide>
                <div className="each-slide">
                    <div className="image-container">
                    <img src={ImgSlider1} />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container">
                    <img src={ImgSlider2} />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container">
                    <img src={ImgSlider3} />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container">
                    <img src={ImgSlider4} />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container">
                    <img src={ImgSlider5} />
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container">
                    <img src={ImgSlider6} />
                    </div>
                </div>
            </Slide>
      </div>
     );
}
 
export default Slider;