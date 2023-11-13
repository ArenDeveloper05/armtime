import "./BaseSingle.scss";
import BaseSingleDesc from "./base-single-desc/BaseSingleDesc";
import BaseSingleImage from "./base-single-image/BaseSingleImage";

const BaseSingle = ({
  img1,
  img2,
  img3,
  title,
  code,
  price,
  deliveryInfo,
  type,
}) => {
  return (
    <div className="base-single">
      <BaseSingleImage img1={img1} img2={img2} img3={img3} />

      <BaseSingleDesc
        title={title}
        code={code}
        price={price}
        deliveryInfo={deliveryInfo}
        type={type}
      />
    </div>
  );
};

export default BaseSingle;
