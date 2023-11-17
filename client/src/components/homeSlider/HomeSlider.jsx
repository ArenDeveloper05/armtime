import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generateImage } from "../../utils/helpers/generateImage";
//Components
import Slider from "react-slick";
//Images
import slide1 from "../../images/slider/slider-1.png";
//Scss
import "./HomeSlider.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSliderThunk } from "../../redux/slices/sliderSlice";

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

  const sliderData = useSelector((state) => state.slider.sliderList);
  const loading = useSelector((state) => state.slider.sliderListLoading);
  const error = useSelector((state) => state.slider.sliderListError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderThunk());
  }, []);

  console.log(sliderData);

  return (
    <Slider {...settings} arrows={false}>
      {sliderData &&
        sliderData.map(({ id, url, link }) => {
          return (
            <Link to={link} key={id}>
              <div className="slider-item">
                <img
                  src={generateImage(url)}
                  alt="slider_image"
                  className="slider-item-image"
                />
              </div>
            </Link>
          );
        })}

      {loading && <h1>Loading ...</h1>}
      {error && (
        <div className="slider-item">
          <img src={slide1} alt="slider_image" className="slider-item-image" />
        </div>
      )}
    </Slider>
  );
};

export default HomeSlider;
