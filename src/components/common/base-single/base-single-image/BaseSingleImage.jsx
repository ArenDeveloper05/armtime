import { useState } from "react";

const BaseSingleImage = ({ img1, img2, img3 }) => {
  const [mainImg, setMainImg] = useState(img1);

  const chooseMainImg = (evt) => {
    setMainImg(evt.target.src);
  };

  return (
    <div className="base-single-image">
      <div className="base-single-image-main-image">
        <img src={mainImg} alt="img" />
      </div>

      <div className="base-single-image-imgs">
        <img src={img1} alt="img" onClick={chooseMainImg} />

        <img src={img2} alt="img" onClick={chooseMainImg} />

        <img src={img3} alt="img" onClick={chooseMainImg} />
      </div>
    </div>
  );
};

export default BaseSingleImage;
