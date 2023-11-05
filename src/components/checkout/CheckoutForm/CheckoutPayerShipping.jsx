import { useState } from "react";
import FormForErevan from "./FormForErevan";
import "./CheckoutPayerShipping.scss";

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
                  checked.erevan
                    ? setChecked({
                        erevan: true,
                        regions: false,
                      })
                    : setChecked({
                        erevan: true,
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
                  checked.regions
                    ? setChecked({
                        erevan: false,
                        regions: true,
                      })
                    : setChecked({
                        erevan: false,
                        regions: true,
                      });
                }}
              />
              <label htmlFor="regions"></label>
              <div>Regions</div>
            </div>
          </div>
        </div>
        <FormForErevan />
      </div>
    </div>
  );
};

export default CheckoutPayerShipping;
