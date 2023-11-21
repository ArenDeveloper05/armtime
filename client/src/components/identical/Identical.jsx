import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { generateImage } from "../../utils/helpers/generateImage";
import noImage from "../../images/no-image.jpg";
import { t } from "i18next";

import "./Identical.scss";

const Identical = ({ data, pageType }) => {
  return (
    <div className="identical">
      <div className="identical-title">{t("more")}</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        spaceBetween={5}
        slidesPerView={4}
        className="identical-slider"
      >
        {data &&
          data.length !== 0 &&
          data.map((item) => {
            return (
              <SwiperSlide
                style={{ width: "90px" }}
                key={item.id}
                className="identical-slider-item"
              >
                <Link to={`/${pageType}/${item.id}`}>
                  <div className="identical-image">
                    <img
                      src={
                        item && item.image && item.image[0]
                          ? generateImage(item.image[0].url)
                          : noImage
                      }
                      alt="more"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Identical;
