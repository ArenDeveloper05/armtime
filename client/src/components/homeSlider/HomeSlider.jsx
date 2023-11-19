import { useEffect } from "react";
import { Link } from "react-router-dom";
import { generateImage } from "../../utils/helpers/generateImage";
//Components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//Images
import slide1 from "../../images/slider/slider-1.png";
//Scss
import "./HomeSlider.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSliderThunk } from "../../redux/slices/sliderSlice";

import Loading from "../loading/Loading";

const HomeSlider = () => {
  const sliderData = useSelector((state) => state.slider.sliderList);
  const loading = useSelector((state) => state.slider.sliderListLoading);
  const error = useSelector((state) => state.slider.sliderListError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderThunk());
  }, []);

  console.log(sliderData);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {sliderData &&
        sliderData.map(({ id, url, link }) => {
          return (
            <SwiperSlide className="slider-item" key={id}>
              <Link to={link} key={id}>
                <img
                  src={generateImage(url)}
                  alt="slider_image"
                  className="slider-item-image"
                />
              </Link>
            </SwiperSlide>
          );
        })}

      {loading && <Loading />}
      {error && (
        <div className="slider-item">
          <img src={slide1} alt="slider_image" className="slider-item-image" />
        </div>
      )}
    </Swiper>
  );
};

export default HomeSlider;
