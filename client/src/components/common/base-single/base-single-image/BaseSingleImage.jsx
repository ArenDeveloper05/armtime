import { useState } from "react";
import { generateImage } from "../../../../utils/helpers/generateImage";

const BaseSingleImage = ({ images }) => {
  const [mainImg, setMainImg] = useState(generateImage(images[0].url));

  const chooseMainImg = (evt) => {
    setMainImg(evt.target.src);
  };

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
    </div>
  );
};

export default BaseSingleImage;
