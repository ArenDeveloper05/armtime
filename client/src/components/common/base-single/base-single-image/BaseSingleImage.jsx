import { useContext, useEffect, useState } from "react";
import { generateImage } from "../../../../utils/helpers/generateImage";
import { BaseSingleContext } from "../BaseSingle";

import BaseSingleFeatures from "../base-single-desc/base-single-features/BaseSingleFeatures";

import noImage from "../../../../images/no-image.jpg";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";
import BaseSingleDescInfoForMobile from "../base-single-desc/base-single-desc-info/BaseSingleDescInfoForMobile";
import BaseSingleDescraption from "../base-single-desc/base-single-descraption/BaseSingleDescraption";

const BaseSingleImage = ({ images, video }) => {
  const [mainImg, setMainImg] = useState(
    images && images.length !== 0 ? generateImage(images[0].url) : noImage
  );

  useEffect(() => {
    if (images) {
      images.length
        ? setMainImg(generateImage(images[0].url))
        : setMainImg(noImage);
    }
  }, [images]);

  const chooseMainImg = (evt) => {
    setMainImg(evt.target.src);
  };

  const {
    sex,
    case_material,
    case_size,
    case_thickness,
    band_material,
    water_resistant,
    weight,
    type,
    material,
    sizes,
    description,
  } = useContext(BaseSingleContext);

  return (
    <div className="base-single-image">
      <div className="base-single-image-main-image">
        <img src={mainImg} alt="img" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        spaceBetween={20}
        slidesPerView={3}
        className="base-single-image-imgs"
      >
        {images &&
          images.length !== 0 &&
          images.map(({ id, url }) => {
            return (
              <SwiperSlide className="base-single-image-imgs-item">
                <img
                  style={
                    mainImg === generateImage(url)
                      ? { filter: "blur(2px)" }
                      : {}
                  }
                  src={generateImage(url)}
                  alt="watch-or-belt"
                  onClick={chooseMainImg}
                />
              </SwiperSlide>
            );
          })}
        {video &&
          video.lentgh !== 0 &&
          video.map(({ id, url }) => {
            return (
              <SwiperSlide className="base-single-image-videos-video" key={id}>
                <video src={generateImage(url)} controls muted></video>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {/* <div className="base-single-image-imgs">
        {images &&
          images.length !== 0 &&
          images.map(({ id, url }) => {
            return (
              <div key={id} className="base-single-image-imgs-item">
                <img
                  style={
                    mainImg === generateImage(url)
                      ? { filter: "blur(2px)" }
                      : {}
                  }
                  src={generateImage(url)}
                  alt="watch-or-belt"
                  onClick={chooseMainImg}
                />
              </div>
            );
          })}
      </div> */}
      {/* <div className="base-single-image-videos">
        {video &&
          video.lentgh !== 0 &&
          video.map(({ id, url }) => {
            return (
              <div className="base-single-image-videos-video" key={id}>
                <video src={generateImage(url)} controls muted></video>
              </div>
            );
          })}
      </div> */}
      <BaseSingleDescInfoForMobile />
      <div className="base-single-image-feat">
        <BaseSingleFeatures
          featuresData={{
            type,
            sex,
            case_material,
            case_size,
            case_thickness,
            band_material,
            water_resistant,
            weight,
            material,
            sizes,
          }}
        />
        <BaseSingleDescraption description={description} />
      </div>
    </div>
  );
};

export default BaseSingleImage;
