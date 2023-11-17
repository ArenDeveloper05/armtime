import { useContext } from "react";
import { CheckoutContext } from "../Checkout";

import FormForErevan from "./FormForErevan";
import FormForRegions from "./FormForRegions";

import "./CheckoutPayerShipping.scss";

const CheckoutPayerShipping = () => {
  const { checkoutData, inputOnChange, changeShippingState } =
    useContext(CheckoutContext);

  return (
    <div className="information">
      <div className="information-title">Payer & shipping information</div>
      <div className="information-payer">
        <div className="information-payer-name">Payer Information</div>
        <form action="" className="information-payer-form" autoComplete="off">
          <div className="information-payer-form-item">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={checkoutData.first_name}
              onChange={inputOnChange}
            />
          </div>
          <div className="information-payer-form-item">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={checkoutData.last_name}
              onChange={inputOnChange}
            />
          </div>
          <div className="information-payer-form-item">
            <label htmlFor="phone_number">Phone number</label>
            <input
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
            Shipping information
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
              <div>Yerevan</div>
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
              <div>Regions</div>
            </div>
          </div>
        </div>
        {checkoutData.shipping === "yerevan" ? (
          <FormForErevan />
        ) : (
          <FormForRegions />
        )}

        <div className="information-shipping-notes">
          <label htmlFor="notes">Notes Field</label>
          <input
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
