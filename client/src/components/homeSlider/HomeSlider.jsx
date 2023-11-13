//Scss
import "./HomeSlider.scss";
//Components
import Slider from "react-slick";
//Images
import slide1 from "../../images/slider/slider-1.png";
import slide2 from "../../images/slider/slider-2.jpg";
import slide3 from "../../images/slider/slider-3.jpg";
import slide4 from "../../images/slider/slider-4.jpg";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} arrows={false}>
      <div className="slider-item">
        <img src={slide1} alt="" className="slider-item-image" />
      </div>
      <div className="slider-item">
        <img src={slide2} alt="" className="slider-item-image" />
      </div>
      <div className="slider-item">
        <img src={slide3} alt="" className="slider-item-image" />
      </div>
      <div className="slider-item">
        <img src={slide4} alt="" className="slider-item-image" />
      </div>
    </Slider>
  );
};

export default HomeSlider;
