import { useContext, useEffect, useState } from "react";
import { generateImage } from "../../../../utils/helpers/generateImage";
import { BaseSingleContext } from "../BaseSingle";

import BaseSingleFeatures from "../base-single-desc/base-single-features/BaseSingleFeatures";

import noImage from "../../../../images/no-image.jpg";

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
  } = useContext(BaseSingleContext);

  return (
    <div className="base-single-image">
      <div className="base-single-image-main-image">
        <img src={mainImg} alt="img" />
      </div>

      <div className="base-single-image-imgs">
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
      </div>
      <div className="base-single-image-videos">
        {video &&
          video.lentgh !== 0 &&
          video.map(({ id, url }) => {
            return (
              <div className="base-single-image-videos-video" key={id}>
                <video src={generateImage(url)} controls muted></video>
              </div>
            );
          })}
      </div>

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
    </div>
  );
};

export default BaseSingleImage;
