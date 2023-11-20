import { Swiper, SwiperSlide } from "swiper/react";
import "./Identical.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Identical = ({ data }) => {
  return (
    <>
      <div className="identical">
        <div className="identical-title">Colors</div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
          spaceBetween={5}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="identical-slider"
        >
          {data.map((item) => {
            return (
              <SwiperSlide style={{ width: "90px" }} key={item.id}>
                <Link to={`/watches/${item.id}`}>
                  <div className="identical-image">
                    {/* src={item.image[0]} */}
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/370593484_2682255098580244_439897415268965010_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=zegdTOvoqWwAX-EudaU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&cb_e2o_trans=q&oh=03_AdRJwfRiL_IrwW3JA-_Czke5M859AmShyJ2KfYxTk4v5gA&oe=6582985B" />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Identical;
