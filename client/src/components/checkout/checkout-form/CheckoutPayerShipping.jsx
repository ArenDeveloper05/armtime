import { useContext } from "react";
import { CheckoutContext } from "../Checkout";

import FormForErevan from "./FormForErevan";
import FormForRegions from "./FormForRegions";

import "./CheckoutPayerShipping.scss";
import { useTranslation } from "react-i18next";
import { errorStyles } from "../../../utils/constants";

const CheckoutPayerShipping = () => {
  const {
    checkoutData,
    inputOnChange,
    changeShippingState,
    checkoutValidations,
  } = useContext(CheckoutContext);

  const { t } = useTranslation();

  return (
    <div className="information">
      <div className="information-title">
        {t("main.main_putOrder.Put_Order")}
      </div>
      <div className="information-payer">
        <div className="information-payer-name">
          {t("main.main_putOrder.Payer_Information")}
        </div>
        <form className="information-payer-form" autoComplete="off">
          <div className="information-payer-form-item">
            <label htmlFor="first_name">
              {t("main.main_putOrder.First_Name")}
            </label>
            <input
              style={checkoutValidations["first_name"] ? {} : errorStyles}
              type="text"
              name="first_name"
              id="first_name"
              value={checkoutData.first_name}
              onChange={inputOnChange}
            />
          </div>
          <div className="information-payer-form-item">
            <label htmlFor="last_name">
              {t("main.main_putOrder.Last_Name")}
            </label>
            <input
              style={checkoutValidations["last_name"] ? {} : errorStyles}
              type="text"
              name="last_name"
              id="last_name"
              value={checkoutData.last_name}
              onChange={inputOnChange}
            />
          </div>
          <div className="information-payer-form-item">
            <label htmlFor="phone_number">
              {t("main.main_putOrder.Phone_Number")}
            </label>
            <input
              style={checkoutValidations["phone"] ? {} : errorStyles}
              type="number"
              name="phone"
              min={0}
              id="phone_number"
              value={checkoutData.phone}
              onChange={inputOnChange}
            />
          </div>
        </form>
      </div>

      <div className="information-shipping">
        <div className="information-shipping-title">
          <div className="information-shipping-title-name">
            {t("main.main_putOrder.Shipping_information")}
          </div>
          <div className="information-shipping-title-cityName">
            <div className="information-shipping-title-cityName-check">
              <input
                type="checkbox"
                id="erevan"
                checked={checkoutData.shipping === "yerevan" ? true : false}
                onChange={() => {
                  if (checkoutData.shipping === "yerevan") return;
                  changeShippingState("yerevan");
                }}
              />
              <label htmlFor="erevan"></label>
              <div> {t("main.main_putOrder.Erevan")}</div>
            </div>
            <div className="information-shipping-title-cityName-check">
              <input
                type="checkbox"
                id="regions"
                checked={checkoutData.shipping === "regions" ? true : false}
                onChange={() => {
                  if (checkoutData.shipping === "regions") return;
                  changeShippingState("regions");
                }}
              />
              <label htmlFor="regions"></label>
              <div> {t("main.main_putOrder.Regions")}</div>
            </div>
          </div>
        </div>
        {checkoutData.shipping === "yerevan" ? (
          <FormForErevan />
        ) : (
          <FormForRegions />
        )}

        <div className="information-shipping-notes">
          <label htmlFor="notes">{t("main.main_putOrder.Notes_Field")}</label>
          <input
            style={checkoutValidations["notes"] ? {} : errorStyles}
            type="text"
            name="notes"
            id="notes"
            value={checkoutData.notes}
            onChange={inputOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayerShipping;
