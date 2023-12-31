import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../Checkout";
import { useTranslation } from "react-i18next";
import { errorStyles } from "../../../utils/constants";

const FormForErevan = () => {
  const [checkedTime, setCheckedTime] = useState({
    12: true,
    18: false,
  });
  const { t } = useTranslation();

  const {
    checkoutData,
    inputOnChangeWithNesteds,
    clearShippingInfo,
    checkoutValidations,
  } = useContext(CheckoutContext);

  useEffect(() => {
    clearShippingInfo("regions");
  }, [clearShippingInfo]);

  return (
    <form className="information-formForErevan">
      <div className="information-formForErevan-address">
        <label htmlFor="address">{t("main.main_putOrder.Address")}</label>
        <input
          style={checkoutValidations.yerevan["address"] ? {} : errorStyles}
          type="text"
          name="address"
          id="address"
          value={checkoutData.yerevan.address}
          onChange={(e) => {
            inputOnChangeWithNesteds("yerevan", "address", e.target.value);
          }}
        />
      </div>
      <div className="information-formForErevan-time">
        <div>{t("main.main_putOrder.TimeConvenientForYou")}</div>
        <div className="information-formForErevan-time-hours">
          <input
            type="checkbox"
            id="12:00"
            name="12:00"
            checked={checkedTime[12]}
            onChange={() => {
              if (checkedTime[12]) return;
              setCheckedTime({
                12: true,
                18: false,
              });
              inputOnChangeWithNesteds("yerevan", "time", "12:00 - 18:00");
            }}
          />
          <label htmlFor="12:00"></label>
          <div>12 : 00 - 18 : 00</div>
        </div>
        <div className="information-formForErevan-time-hours">
          <input
            type="checkbox"
            id="18:00"
            name="18:00"
            checked={checkedTime[18]}
            onChange={() => {
              if (checkedTime[18]) return;
              setCheckedTime({
                12: false,
                18: true,
              });
              inputOnChangeWithNesteds("yerevan", "time", "18:00 - 23:00");
            }}
          />
          <label htmlFor="18:00"></label>
          <div>18 : 00 - 23 : 00</div>
        </div>
      </div>
    </form>
  );
};

export default FormForErevan;
