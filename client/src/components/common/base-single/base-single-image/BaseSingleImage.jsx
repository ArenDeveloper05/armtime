import { useContext, useState } from "react";
import { generateImage } from "../../../../utils/helpers/generateImage";

import noImage from "../../../../images/no-image.jpg";
import BaseSingleFeatures from "../base-single-desc/base-single-features/BaseSingleFeatures";
import { BaseSingleContext } from "../BaseSingle";

const BaseSingleImage = ({ images }) => {
  const [mainImg, setMainImg] = useState(
    images && images.length !== 0 ? generateImage(images[0].url) : noImage
  );

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
              <img
                src={generateImage(url)}
                alt="img"
                onClick={chooseMainImg}
                key={id}
              />
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
        }}
      />
    </div>
  );
};

export default BaseSingleImage;
