import { useContext, useEffect } from "react";
import { CheckoutContext } from "../Checkout";

const FormForRegions = () => {
  const { checkoutData, inputOnChangeWithNesteds, clearShippingInfo } =
    useContext(CheckoutContext);

  useEffect(() => {
    clearShippingInfo("yerevan");
  }, []);

  return (
    <form className="information-formForRegions">
      <div className="information-formForRegions-address">
        <label
          htmlFor="state"
          className="information-formForRegions-address-state"
        >
          State / City / Village
        </label>
        <input
          type="text"
          id="state"
          value={checkoutData.regions.state_village_city}
          onChange={(e) => {
            inputOnChangeWithNesteds(
              "regions",
              "state_village_city",
              e.target.value
            );
          }}
        />
      </div>
      <div className="information-formForRegions-address">
        <label htmlFor="zip" className="information-formForRegions-address-zip">
          Zip / Postal Code
        </label>
        <input
          type="text"
          id="zip"
          value={checkoutData.regions.postal_code}
          onChange={(e) => {
            inputOnChangeWithNesteds("regions", "postal_code", e.target.value);
          }}
        />
      </div>
      <div className="information-formForRegions-address">
        <label
          htmlFor="address"
          className="information-formForRegions-address-adr"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          value={checkoutData.regions.address}
          onChange={(e) => {
            inputOnChangeWithNesteds("regions", "address", e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default FormForRegions;
