import { TbCurrencyDram } from "react-icons/tb";
import { useContext } from "react";
import { BaseSingleContext } from "../../BaseSingle";

const BaseSingleDescInfoForMobile = () => {
  const { title, code, price } = useContext(BaseSingleContext);
  return (
    <div className="base-single-desc-infoM">
      <p className="base-single-desc-infoM-title">{title ? title : ""}</p>

      <p className="base-single-desc-infoM-code">{code ? code : code}</p>

      <p className="base-single-desc-infoM-price">
        {price ? price : ""}
        <TbCurrencyDram style={{ width: "20px", height: "20px" }} />
      </p>
    </div>
  );
};

export default BaseSingleDescInfoForMobile;
