//Scss
import "./HomeSlider.scss";
//Components
import Slider from "react-slick";
//Images
import slide1 from "../../images/slider/slide-1.webp";
import slide2 from "../../images/slider/slide-2.jpg";
import slide3 from "../../images/slider/slide-3.webp";
import slide4 from "../../images/slider/slide-4.webp";

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
      <div>
        <img src={slide2} alt="" />
      </div>
      <div>
        <img src={slide3} alt="" />
      </div>
      <div>
        <img src={slide4} alt="" />
      </div>
    </Slider>
  );
};

export default HomeSlider;
