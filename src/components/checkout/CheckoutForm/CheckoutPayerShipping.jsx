import { useState } from "react";
import FormForErevan from "./FormForErevan";
import "./CheckoutPayerShipping.scss";
import FormForRegions from "./FormForRegions";

const CheckoutPayerShipping = () => {
  const [checked, setChecked] = useState({
    erevan: true,
    regions: false,
  });
  return (
    <div className="information">
      <div className="information-title">Payer & shipping information</div>
      <div className="information-payer">
        <div className="information-payer-name">Payer Information</div>
        <form action="" className="information-payer-form" autoComplete="off">
          <div className="information-payer-form-item">
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" />
          </div>
          <div className="information-payer-form-item">
            <label htmlFor="lname">Last name</label>
            <input type="text" name="lname" />
          </div>
          <div className="information-payer-form-item">
            <label htmlFor="phone">Phone number</label>
            <input type="text" name="phone" />
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
                checked={checked.erevan}
                onClick={() => {
                  if (checked.erevan) return;
                  setChecked({
                    erevan: !checked.erevan,
                    regions: false,
                  });
                }}
              />
              <label htmlFor="erevan"></label>
              <div>Erevan</div>
            </div>
            <div className="information-shipping-title-cityName-check">
              <input
                type="checkbox"
                id="regions"
                checked={checked.regions}
                onClick={() => {
                  if (checked.regions) return;
                  setChecked({
                    erevan: false,
                    regions: !checked.regions,
                  });
                }}
              />
              <label htmlFor="regions"></label>
              <div>Regions</div>
            </div>
          </div>
        </div>
        {checked.erevan ? <FormForErevan /> : <FormForRegions />}

        <div className="information-shipping-notes">
          <label htmlFor="notes">Notes Field</label>
          <input type="text" name="notes" id="notes" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayerShipping;
