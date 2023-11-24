import { TbCurrencyDram } from "react-icons/tb";
import { useContext } from "react";
import { BaseSingleContext } from "../../BaseSingle";

const BaseSingleDescInfoForMobile = ({ discounted_price }) => {
  const { title, code, price } = useContext(BaseSingleContext);
  return (
    <div className="base-single-desc-infoM">
      <p className="base-single-desc-infoM-title">{title ? title : ""}</p>

      <p className="base-single-desc-infoM-code">{code ? code : code}</p>

      <div className="base-single-desc-infoM-price">
        <div
          className="base-single-desc-infoM-price-dis"
          style={{
            display: discounted_price !== "0" ? "block" : "none",
          }}
        >
          {discounted_price ? discounted_price : ""}
          <TbCurrencyDram />
        </div>
        <div className="base-single-desc-infoM-price-nat">
          {price ? price : ""}
          <TbCurrencyDram />
        </div>
      </div>
    </div>
  );
};

export default BaseSingleDescInfoForMobile;
