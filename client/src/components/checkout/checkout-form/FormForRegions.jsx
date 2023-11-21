import { useContext, useEffect } from "react";
import { CheckoutContext } from "../Checkout";
import { useTranslation } from "react-i18next";
import { errorStyles } from "../../../utils/constants";

const FormForRegions = () => {
  const {
    checkoutData,
    inputOnChangeWithNesteds,
    clearShippingInfo,
    checkoutValidations,
  } = useContext(CheckoutContext);
  const { t } = useTranslation();

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
          {t("main.main_putOrder.Region/City/Village")}
        </label>
        <input
          style={
            checkoutValidations.regions["state_village_city"] ? {} : errorStyles
          }
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
          {t("main.main_putOrder.Zip/Postal_Code")}
        </label>
        <input
          style={checkoutValidations.regions["postal_code"] ? {} : errorStyles}
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
          {t("main.main_putOrder.Address")}
        </label>
        <input
          style={checkoutValidations.regions["address"] ? {} : errorStyles}
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
