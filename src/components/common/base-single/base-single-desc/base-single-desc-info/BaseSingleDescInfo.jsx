import { TbCurrencyDram } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

const BaseSingleDescInfo = ({ title, code, price, deliveryInfo }) => {
  return (
    <div className="base-single-desc-info">
      <p className="base-single-desc-info-title">{title}</p>

      <p className="base-single-desc-info-code">{code}</p>

      <p className="base-single-desc-info-price">
        {price} <TbCurrencyDram style={{ width: "20px", height: "20px" }} />
      </p>

      <p className="base-single-desc-info-deliveryInfo">
        <BiWorld /> <span>{deliveryInfo}</span>
      </p>
    </div>
  );
};

export default BaseSingleDescInfo;
