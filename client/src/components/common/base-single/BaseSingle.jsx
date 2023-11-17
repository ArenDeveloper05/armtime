import "./BaseSingle.scss";
import BaseSingleDesc from "./base-single-desc/BaseSingleDesc";
import BaseSingleImage from "./base-single-image/BaseSingleImage";

const BaseSingle = ({ images, title, code, price, deliveryInfo, type }) => {
  return (
    <div className="base-single">
      <BaseSingleImage images={images} />
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
