import { TbCurrencyDram } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { useContext } from "react";
import { BaseSingleContext } from "../../BaseSingle";

const BaseSingleDescInfo = () => {
  const { title, code, price, deliveryInfo } = useContext(BaseSingleContext);
  return (
    <div className="base-single-desc-info">
      <p className="base-single-desc-info-title">{title ? title : ""}</p>

      <p className="base-single-desc-info-code">{code ? code : code}</p>

      <p className="base-single-desc-info-price">
        {price ? price : ""}{" "}
        <TbCurrencyDram style={{ width: "20px", height: "20px" }} />
      </p>

      <p className="base-single-desc-info-deliveryInfo">
        <BiWorld /> <span>{deliveryInfo ? deliveryInfo : ""}</span>
      </p>
    </div>
  );
};

export default BaseSingleDescInfo;
